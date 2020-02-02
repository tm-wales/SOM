var nodemailer = require('nodemailer');
var config = require('../config/').get(process.env.NODE_ENV || "development")

var transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
        user: config.email.auth.user,
        pass: config.email.auth.password
    }
});

transporter.verify(function(error, success) {
    if(error) {
        console.log(error)
        console.log("email verification failed")
    } else {
        console.log("email verification SUCCESS")
    }
});

module.exports = transporter;