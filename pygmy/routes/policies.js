/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const router  = express.Router()
    const logger  = pygmy.util.logger
    const path = pygmy.paths.app.views
    /* ----------------------------- */
    const Policies = pygmy.models.model.Policy.schema
    const pygmyRoutePath = './'
    const defaultData = require(pygmyRoutePath + 'defaultData')
/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */
    router.get("/:id", function(req, res) {
            let policyRoute = ''
            policyRoute = req.params.id;
            policyRoute = policyRoute.toLowerCase();
            defaultData("Policies", (data) => {
                console.log(data)
                Policies.findOne({route: policyRoute} , (err, selectedPolicy) => {
                    if(err) {
                        logger.error("Policy (route): Find " + id)
                    } else {
                        if (selectedPolicy) {
                            data.selectedPolicy = selectedPolicy
                            res.render(path + "defaults/policies", {data: data});
                        } else {
                            res.render(path + "defaults/404");
                        }
                    }
                })
            })
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */