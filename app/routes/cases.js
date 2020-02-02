/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const path = pygmy.paths.app.views
    const Case = pygmy.models.model.Case.schema
    let data = {};
    let find = {};
    let order = {};

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("/", function(req, res) {
        defaultData("cases", (data) => {
            find = {featured: true};
            order = {date: 'desc'}
            Case.find(find).sort(order).exec(function(err, cases) {
                data.cases = cases
                data.cases.categories = Case.schema.path('category').enumValues
                res.render(path + "cases", {data: data});
            });
        })
    });

    router.get("/:case/", function(req, res) {
        let caseStudy = "";
        caseStudy = req.params.case;

        defaultData("case", (data) => {
            find = {name: caseStudy};
            Case.findOne(find).exec(function(err, selected) {
                data.case = selected
                res.render(path + "case", {data: data});
            });
        })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
