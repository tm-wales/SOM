/* Module dependencies. */
/* ------------------------------------------------ */

const Pages = pygmy.models.model.Page.schema
const Setting = pygmy.models.model.Setting.schema
const Social = pygmy.models.model.Social.schema
const Policy = pygmy.models.model.Policy.schema
let data = {};
let find = {};
let order = {};

/* ------------------------------------------------ */

/* Generate default data. */
/* ------------------------------------------------ */
const defaultData = function (pageName, callback) {
    find = {};
    Setting.findOne({}).exec((err, settings) => {
        if(err) {
            pygmy.util.logger.error("error returning settings")
            return;
        }
        data.settings = settings

        find = {name: pageName};
        Pages.findOne(find).exec(function(err, page) {
            if(err) {
                pygmy.util.logger.error("error returning page")
                return;
            }
            data.page = page

            find = {};
            order = {}
            Social.find(find).sort(order).exec(function(err, social) {
                if(err) {
                    pygmy.util.logger.error("error returning Social")
                    return;
                }
                data.social = social

                find = {active: true};
                order = {}
                Policy.find(find).sort(order).exec(function(err, policy) {
                    if(err) {
                        pygmy.util.logger.error("error returning polcies")
                        return;
                    }
                    data.policy = policy

                    callback(data);
                });
            });
        });
    });
}

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

module.exports = defaultData;

/* ------------------------------------------------ */
