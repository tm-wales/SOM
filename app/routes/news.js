/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const path = pygmy.paths.app.views
    const News = pygmy.models.model.News.schema
    const log = pygmy.util.logger
    let find = {};
    let order = {};

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("/", function(req, res) {
        let data = {};
        defaultData("news", (data) => {
            find = {};
            order = {date: -1}
            News.find(find).sort(order).exec(function(err, news) {
                if(err) {
                    log.error(err)
                }
                data.news = news
                res.render(path + "news", {data: data});
            });
        })
    });

    router.get("/:news/", function(req, res) {
        let data = {};
        let newsItem = "";
        newsItem = req.params.news;
        var fullUrl = req.get('host') + req.originalUrl;
        var urlName = req.originalUrl;

        defaultData("newsItem", (data) => {
            find = {name: newsItem};
            News.findOne(find).exec(function(err, selected) {
                if(err) {
                    log.error(err)
                }
                data.newsItem = selected
                data.url = fullUrl
                data.urlName = urlName
                res.render(path + "newsItem", {data: data});
            });
        })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
