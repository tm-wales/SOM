/* Module dependencies. */
/* ------------------------------------------------ */


    const express = pygmy.express
    const router  = express.Router()
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const path = pygmy.paths.app.views

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("/", function(req, res) {
        defaultData("sustainability", (data) => {
            res.render(path + "sustainability", {data: data});
        })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
