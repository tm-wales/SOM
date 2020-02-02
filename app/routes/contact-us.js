/* Module dependencies. */
/* ------------------------------------------------ */

    const express = pygmy.express
    const email = pygmy.config.email.auth.user
    const router  = express.Router()
    const mailer  = pygmy.util.nodemailer
    const logger = pygmy.util.logger

/* ------------------------------------------------ */

/* Route now. */
/* ------------------------------------------------ */

    router.post("/", function(req, res) {
        let data = {
            name: req.body.name,
            email: req.body.email,
            telephone: req.body.phone,
            message: req.body.message,
            company: req.body.company,
            honey: req.body.website,
            createDate: Date.now()
        };

        // Send mail
        let mailOptions = {
            from: 'info@somodular.co.uk',
            to: "info@somodular.co.uk",
            subject: `Contact Request from ${data.name} @ ${data.company}`,
            text: `${data.name} @ ${data.company} (email:${data.email}) (tel:${data.telephone}) says: ${data.message}`,
            html: `${data.name} @ ${data.company}<br><br>Email:<a href="emailTo:${data.email}">${data.email}</a><br>tel:<a href="tel:${data.telephone}">${data.telephone}</a><br><br>says:</br>${data.message}`
        };

        mailer.sendMail(mailOptions, function(error, info){
            if (error) {
                logger.error(error)
            } else {
                logger.info("Email Sent")
            }

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ success: !error }));
        });
    });

/* ------------------------------------------------ */

/* Module dependencies. */
/* ------------------------------------------------ */

    module.exports = router;

/* ------------------------------------------------ */
