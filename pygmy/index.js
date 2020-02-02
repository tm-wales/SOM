
let pygmy = {
    appDirectory: '',
    init: (callback) => {
        const log = pygmy.util.logger
            , morgan = pygmy.util.morgan
            , secret = pygmy.config.session.secret
            , con = pygmy.db.mongoose.connection
            , express    = pygmy.express
            , session    = require('express-session')
            , MongoStore = require('connect-mongo')(session)
            , bodyParser = require("body-parser")
            , passport   = require("passport")
            , LocalStrategy = require("passport-local")
            , methodOverride = require("method-override")

        /* Logging setup. */
        /* ------------------------------------------------*/
            pygmy.app.use(morgan("tiny",{ "stream": log.stream }));
            log.info('Pygmy Initialising')
            log.info("Overriding 'Express' logger");

        /* ------------------------------------------------*/

        /* Setup DB connection. */
        /* ------------------------------------------------*/

            pygmy.db.setupConnection(() => {
                /* Set model defaults. */
                /* ------------------------------------------------*/

                const models = pygmy.models
                models.defaults();

                /* ------------------------------------------------*/

                /* Create session. */
                /* ------------------------------------------------*/

                    pygmy.app.use(session({
                        secret: secret,
                        resave: false,
                        saveUninitialized: false,
                        store: new MongoStore({ mongooseConnection: con })
                    }));

                /* ------------------------------------------------*/

                /* Set Defaults. */
                /* ------------------------------------------------*/

                    pygmy.app.use(bodyParser.urlencoded({extended: true}));
                    pygmy.app.set('views', pygmy.appDirectory);
                    pygmy.app.set("view engine", "ejs");
                    pygmy.app.use(express.static(pygmy.appDirectory + "/public"));
                    pygmy.app.use(methodOverride("_method"));

                /* ------------------------------------------------*/

                /* Passport configuration. */
                /* ------------------------------------------------*/

                    // Passport
                    const UserPyg = pygmy.models.model.UserPyg.schema
                    pygmy.app.use(passport.initialize());
                    pygmy.app.use(passport.session());
                    passport.use(new LocalStrategy(UserPyg.authenticate()));
                    passport.serializeUser(UserPyg.serializeUser());
                    passport.deserializeUser(UserPyg.deserializeUser());

                    // Pass User to every route
                    pygmy.app.use(function(req, res, next) {
                        res.locals.currentUser = req.user;
                        next();
                    });

                /* ------------------------------------------------*/

                /* Set routes defaults. */
                /* ------------------------------------------------*/

                    const routes = pygmy.routes
                    routes.defaults();

                /* ------------------------------------------------*/

                /* Set on Exit. */
                /* ------------------------------------------------*/
                    log.debug("Setting onExit");
                    pygmy.onExit();

                /* ------------------------------------------------*/

                /* Seed default data. */
                /* ------------------------------------------------*/
                    pygmy.db.seed.loadDefault();
                /* ------------------------------------------------*/

                /* Run callback. */
                /* ------------------------------------------------*/

                    callback();

                /* ------------------------------------------------*/
            });

        /* -----------------------------------------------*/
    },
    start: (callback) => {
        /* Start listening. */
        /* ------------------------------------------------*/

            /* Load routes */
            pygmy.routes.load();

            /* Add any required middleware */
            pygmy.app.use(pygmy.underConstruction);

            /* Start listening */
            pygmy.app.listen(pygmy.config.app.port, function() {
                pygmy.util.logger.info( pygmy.config.app.name + " (" + pygmy.env + ") server listening on port: " + pygmy.config.app.port);
            });

            callback();
        /* ------------------------------------------------*/
    },
    env: process.env.NODE_ENV || "development",
    config: require('./config/').get(process.env.NODE_ENV || "development"),
    express: require('express'),
    app: require('express')(),
    util: {
        morgan: require("morgan"),
        logger: require("./utils/logger.js"),
        nodemailer: require("./utils/nodemailer.js"),
        fs: require('fs')
    },
    onExit: () => {
        const log = pygmy.util.logger
        const mongoose = pygmy.db.mongoose

        process.on('SIGINT', function() {
            mongoose.connection.close(function () {
                log.info('Mongoose default connection disconnected through app termination');
                process.exit(0);
            });
        });
    },
    db: {
        mongoose: require("mongoose"),
        passport: require("passport"),
        setupConnection: (callback) => {
            const log = pygmy.util.logger
            const config = pygmy.config
            const mongoose = pygmy.db.mongoose

            /* Connect via mongoose. */
            /* ------------------------------------------------*/
                mongoose.connect(config.database, { useNewUrlParser: true }, function(err, con) {
                    if(err) {
                        log.error("ERROR connecting to DB")
                    } else {
                        log.info("Connected to DB: " + con.name +  " on " + con.port);

                        callback();
                    }
                });
            /* ------------------------------------------------*/
        },
        seed: {
            loadDefault: () => {
                const seedDefault = require("./seed") // in pygmy root folder called seed

                seedDefault.seedSettings();
                seedDefault.seedUsers();
                seedDefault.seedPolicies();
                seedDefault.seedPages();
            }
        },
        resetData: () => {
            // Loop through all stored models and delete all data
            for (let key in pygmy.models.model) {
                let doc = pygmy.models.model[key];
                doc.deleteMany({}, err => {
                    if (err) {
                        pygmy.util.logger.error("Models: " + key + " delete data ERRORED");
                    } else {
                        pygmy.util.logger.debug("Models: " + key + " data DELETED");
                    }
                });
            }
        }
    },
    paths: {
        app: {
            views: 'app/views/',
            models: 'app/models/',
            routes: 'app/routes/'
        },
        pygmy: {
            views: 'pygmy/views/',
            models: 'pygmy/models/',
            routes: 'pygmy/routes/'
        }
    },
    models: {
        defaults: () => {
            pygmy.models.add('UserPyg', false, 'userPyg.js','edit/userPyg')
            pygmy.models.add('Setting', false, 'setting.js','edit/setting')
            pygmy.models.add('Page', false, 'pages.js','edit/pages')
            pygmy.models.add('Policy', false, 'policies.js','edit/policies')
            pygmy.models.add('Subscription', false, 'subscription.js','edit/subscription')
            pygmy.models.add('Social', false, 'social.js','edit/social')
        },
        add: (name, isCustomModel, filePath, templatePath) => {
            const models = pygmy.models
            const fullfilePath = '../' + (isCustomModel ? pygmy.paths.app.models : pygmy.paths.pygmy.models) + filePath

            models.model[name] = {
                editRoute: name,
                schema: require(fullfilePath),
                templatePath: (isCustomModel ? pygmy.paths.app.views : pygmy.paths.pygmy.views) + templatePath,
                custom: isCustomModel
            }
            pygmy.util.logger.debug("Models: " + name + " added");
        },
        model: {},
    },
    routes: {
        defaults: () => {
            pygmy.routes.add('pygmy', false, '/tm/pygmy','pygmy.js',100)
            pygmy.routes.add('/', false, '*', '404.js',1000)
            pygmy.routes.add('sitemap', false, '/sitemap','sitemap.js',101)
            pygmy.routes.add('policy', false, '/policies','policies.js',102)
        },
        add: (name, isCustomRoute, routePath, filePath, order) => {
            const routes = pygmy.routes;
            let newRoute = {
                name: name,
                routePath: routePath,
                order: order,
                filePath: (isCustomRoute ? pygmy.paths.app.routes : pygmy.paths.pygmy.routes) + filePath
            };
            routes.route.push(newRoute)

            // Sort array by order so 404 are loaded correctly
            routes.route.sort(function(a,b) {
                return a.order - b.order
            });

            pygmy.util.logger.debug("Routes: " + name + " added");
        },
        load: () => {
            pygmy.routes.route.forEach(element => {
                pygmy.app.use(element.routePath, require('../' + element.filePath));
            });
            pygmy.util.logger.debug("Routes: Assigned to app");
        },
        route: [],
    },
    pages: {
        // amend = (if exists, updated, otherwise add new)
        amend: (page, isCustomPage) => {
            const Page = pygmy.models.model.Page.schema;
            const log = pygmy.util.logger
            const fs = pygmy.util.fs
            // Check that ejs file exists before continuing
            const filePath = pygmy.appDirectory + '/' + (isCustomPage ? pygmy.paths.app.views : pygmy.paths.pygmy.views) + page.templatePath
            if (fs.existsSync(filePath)) {
                let query = {name : page.name}
                let update = page
                let options = { upsert: true, new: true, setDefaultsOnInsert: true };

                // Find the document
                Page.findOneAndUpdate(query, update, options, function(error, result) {
                    if (error) {
                        log.error("Pages: update error (" + err + ')')
                        return;
                    }

                    // If nothing is found, add it
                    if(!result) {
                        Page.create(page, err => {
                            if(err) {
                                log.error("Pages: create error (" + err + ')')
                            } else {
                                log.info("Pages: Added")
                            }
                        });
                    }

                // do something with the document
                });
            } else {
                log.error("Amend Page: ejs files does not exists")
                return false
            }
        }
    },
    settings: {
        doc: undefined,
        get: (callback) => {
            const Setting = pygmy.models.model.Setting.schema;

            Setting.findOne({}).exec((err, doc) => {
                if (err) {
                    pygmy.util.logger.error("Settings: find error (" + err + ')')
                } else {
                    pygmy.settings.doc = doc;
                    callback();
                }
            });
        },
        fonts: {
            add: (newFonts) => {
                for (i = 0; i < newFonts.length; i++) {
                    pygmy.settings.doc.fontPaths.push(newFonts[i])
                }
                pygmy.settings.doc.save();
                pygmy.util.logger.info("Settings: font Added (" + newFonts + ")")
            },
            remove: (index) => {
                let current = pygmy.settings.doc.fontPaths[index]
                pygmy.settings.doc.fontPaths.splice(index, 1);
                pygmy.settings.doc.save();
                pygmy.util.logger.info("Settings: font remove (" + current + ")")
            },
            update: (index, newPath) => {
                pygmy.settings.doc.fontPaths[index] = newPath
                pygmy.settings.doc.save();
                pygmy.util.logger.info("Settings: font update @ index " + index + " to (" + newPath + ")")
            },
        },
        update: (field, value) => {
            pygmy.settings.doc[field] = value
            pygmy.settings.doc.save();
            pygmy.util.logger.info("Settings: " + field + " update (" + value + ")")
        }
    },
    isLoggedIn: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        }
        res.redirect("/tm/pygmy/login");
    },
    underConstruction: (req, res, next) => {
        const Setting = pygmy.models.model.Setting.schema

        Setting.findOne({}).exec((err, settings) => {
            if(err) {
                pygmy.util.logger.error("error returning settings")
            } else {
                if(settings.underConstruction && req.url != "/pygmy" && req.url != "/subscribe") {
                    res.render("defaults/underConstruction")
                } else {
                    next();
                }
            }
        });
    }
};

module.exports = pygmy