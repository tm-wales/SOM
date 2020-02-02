/* Module dependencies. */
/* ------------------------------------------------ */
    const express = pygmy.express
    const router  = express.Router()
    const path = pygmy.paths.app.views
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const Product = pygmy.models.model.Product.schema
    const Case = pygmy.models.model.Case.schema
    const News = pygmy.models.model.News.schema
    let data = {};
    let find = {};
    let order = {};

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("/", function(req, res) {
        defaultData("home", (data) => {
            order = {order: 1}
            Product.find(find).sort(order).exec(function(err, products) {
                data.products = products

                find = {featured: true};
                order = {date: 'desc'}
                Case.find(find).limit(5).exec(function(err, cases) {
                    data.cases = cases

                    find = {};
                    order = {date: 'desc'}
                    News.find(find).sort(order).limit(4).exec(function(err, news) {
                        data.news = news
                        res.render(path + "home", {data: data});
                    });
                });
            });
        })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
