const Logger = require('./logger');

class BaseConfiguration extends Logger {
    constructor(loggers = []) {
        super();
        this.loggers = loggers;
    }

    info(msg, params) {
        return this._logToAll('info', msg, params);
    }

    warn(msg, params) {
        return this._logToAll('warn', msg, params);
    }

    error(msg, params) {
        return this._logToAll('error', msg, params);
    }

    init(loggers) {
        this.loggers = loggers;
        return this;
    }

    _logToAll(type, msg, params) {
        const loggersResult = {};
        this.loggers.forEach((logger) => {
            if (logger && logger.info)
                loggersResult[logger.constructor.name] = logger[type](msg, params);
            else
                loggersResult[logger.constructor.name] = super[type]();
        });
        return loggersResult;
    }
}

module.exports = new BaseConfiguration();