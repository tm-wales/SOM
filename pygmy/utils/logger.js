var winston = require('winston');

var logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 20,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
              )
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
              )
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message.trim());
    }
};