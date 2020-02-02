/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const passport   = require("passport")
    const LocalStrategy = require("passport-local")

    const router  = express.Router()
    const pathPyg = pygmy.paths.pygmy.views
    const pathApp = pygmy.paths.app.views
    /* ----------------------------- */
    const model = pygmy.models.model
    const Pages = pygmy.models.model.Page.schema

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */
    // Standard route
    router.get("/", pygmy.isLoggedIn, function(req, res) {
        let data = {}
        data.model = model

        Pages.find({}).exec(function(err, pages) {
            if(err) {
                pygmy.util.logger.error("error returning page")
                return;
            }
            data.pages = pages

            res.render(pathPyg + "index", {data: data});
        });
    });

    // LOGIN
    router.get("/login", function(req, res) {
        console.log("LOGIN")
        if(req.isAuthenticated()) {
            console.log("AUTHENTICATED")
            res.redirect("/tm/pygmy/")
            return;
        } else {
            res.render(pathPyg + "login")
        }
    });

    router.post("/login", function(req, res) {
        let urlHost = req.protocol + '://' + req.get('host');

        passport.authenticate('local', function(err, user) {
            if (req.xhr) {
                if (err)   { return res.json({ success: false, error: err.message }); }
                if (!user) { return res.json({ success: false, error: "Invalid Login" }); }
                req.login(user, {}, function(err) {
                    if (err) { return res.json( { success: false, error:err } ); }
                    return res.json(
                        { user: {
                                id: req.user.id,
                                joined: req.user.joined,
                        },
                        url: urlHost + "/tm/pygmy",
                        success: true
                    });
                });
            } else {
                req.login(user, {}, function(err) {
                return res.redirect('/tm/pygmy');
                });
            }
        })(req, res);
    });

    router.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/tm/pygmy");
    });

    router.get("/section/:section/:id", pygmy.isLoggedIn, function(req, res) {
        let id = req.params.id
        let section = req.params.section

        switch(section) {
            case 'home':
                res.render(pathPyg + "sections/home");
                break;
            case 'content':
                let obj = model[id]
                if (obj) {
                    obj.schema.find({} , (err, data) => {
                        if (err) {
                            logger.error("Pygmy (route): Find all data for " + obj.name)
                        } else {
                            res.render(obj.templatePath, {data: data});
                        }
                    });
                } else {
                    res.render(pathApp + "defaults/404");
                }
                break;
            case 'pages':
                let data = {};
                Pages.findOne({name: id}).exec(function(err, page) {
                    if(err) {
                        pygmy.util.logger.error("error returning page")
                        return;
                    }
                    res.render(pathPyg + "sections/pages", {data: page});
                });
                break;
            case 'policies':
                res.render(pathPyg + "sections/policies");
                break;
            case 'social':
                res.render(pathPyg + "sections/social");
                break;
            case 'users':
                res.render(pathPyg + "sections/users");
                break;
            case 'settings':
                res.render(pathPyg + "sections/settings");
                break;
            default:
                res.render(pathApp + "defaults/404");
        }
    });

/* ------------------------------------------------ */

/* Module Export. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */