/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const path = pygmy.paths.app.views
    const Job = pygmy.models.model.Job.schema
    let find = {};
    let order = {};

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */
    router.get("/", function(req, res) {
        defaultData("jobs", (data) => {
            find = {numberNeeded: {$gt: 0}};
            order = {date: -1}
            Job.find(find).sort(order).exec(function(err, jobs) {
                data.jobs = jobs
                res.render(path + "jobs", {data: data});
            });
        })
    });


/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
