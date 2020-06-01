const Logger = require('./logger');

class BaseConfiguration extends Logger {
    constructor(loggers = []) {
        super();
        this.loggers = loggers;
    }

    info(msg, params) {
        this.loggers.forEach((logger) => {
            logger.info(msg, params);
        });
    }

    warn(msg, params) {
        this.loggers.forEach((logger) => {
            logger.warn(msg, params);
        });
    }

    error(msg, params) {
        this.loggers.forEach((logger) => {
            logger.error(msg, params);
        });
    }

    init(loggers) {
        this.loggers = loggers;
        return this;
    }
}

module.exports = new BaseConfiguration();