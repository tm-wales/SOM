/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const pygmyRoutePath = '../../' + pygmy.paths.pygmy.routes
    const defaultData = require(pygmyRoutePath + 'defaultData')
    const path = pygmy.paths.app.views
    const Product = pygmy.models.model.Product.schema
    let find = {};
    let order = {};

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.get("/", function(req, res) {
        defaultData("products", (data) => {
            find = {};
            order = {order: 1}
            Product.find(find).sort(order).exec(function(err, products) {
                data.products = products
                res.render(path + "products", {data: data});
            });
        })
    });

    router.get("/:group/", function(req, res) {
        let group = req.params.group;
        defaultData("productGroup", (data) => {
            find = {name: group};
            order = {}
            Product.findOne(find).sort(order).exec(function(err, found) {
                function compare(a,b) {
                    if (a.order < b.order)
                      return -1;
                    if (a.order > b.order)
                      return 1;
                    return 0;
                }
                found.subProducts.sort(compare);
                data.group = found
                res.render(path + "productGroup", {data: data});
            });
        })
    });


    router.get("/:group/:sub", function(req, res) {
        let group = req.params.group;
        let sub = req.params.sub;

        defaultData("productsSub", (data) => {
            find = {name: group};
            Product.findOne(find).exec(function(err, found) {
                function search(nameKey, myArray) {
                    for (var i=0; i < myArray.length; i++) {
                        if (myArray[i].name === nameKey) {
                            return myArray[i];
                        }
                    }
                }

                let subProduct = search(sub,found.subProducts)

                data.product = subProduct
                res.render(path + "productSub", {data: data});
            });
        })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
