const Logger = require('./logger');

class BaseConfiguration extends Logger {
    constructor(loggers = []) {
        super();
        this.loggers = loggers;
    }

    info(msg, params) {
        this.loggers.forEach((logger) => {
            if (logger && logger.info)
                logger.info(msg, params);
            else
                super.info();
        });
    }

    warn(msg, params) {
        this.loggers.forEach((logger) => {
            if (logger && logger.warn)
                logger.warn(msg, params);
            else
                super.warn();
        });
    }

    error(msg, params) {
        this.loggers.forEach((logger) => {
            if (logger && logger.error)
                logger.error(msg, params);
            else
                super.error();
        });
    }

    init(loggers) {
        this.loggers = loggers;
        return this;
    }
}

module.exports = new BaseConfiguration();