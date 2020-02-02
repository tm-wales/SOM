/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const path = pygmy.paths.app.views
/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("*", function(req, res) {
        res.render(path + "defaults/404");
    });

/* ------------------------------------------------ */

/* Module export. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */