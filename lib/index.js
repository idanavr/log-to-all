const Logger = require('./logger');

class BaseConfiguration extends Logger {
    constructor(loggers = [], isDebugMode = false) {
        super();
        this.loggers = loggers;
        this.isDebugMode = isDebugMode;
    }

    init(loggers, isDebugMode) {
        this.loggers = loggers;
        this.isDebugMode = isDebugMode;
        return this;
    }

    setDebugMode(isDebugMode) {
        this.isDebugMode = isDebugMode;
    }

    debug(msg, params) {
        if (this.isDebugMode)
            return this._logToAll('debug', msg, params);
        return null;
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