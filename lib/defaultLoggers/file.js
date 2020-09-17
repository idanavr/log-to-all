const Logger = require('../logger');
const fs = require('fs');
const path = require('path');
const { generateMessage } = require('./utils');

class File extends Logger {
    constructor(logPath) {
        super();
        if (!logPath)
            throw Error('No path for logs');
        this.logPath = logPath;
    }

    debug(msg, params) {
        return this._saveLog('Debug', msg, params);
    }

    info(msg, params) {
        return this._saveLog('Info', msg, params);
    }

    warn(msg, params) {
        return this._saveLog('Warn', msg, params);
    }

    error(msg, params) {
        return this._saveLog('Error', msg, params);
    }

    getCurrentFilePath() {
        const todayDate = new Date();
        const monthYear = `${todayDate.getMonth() + 1}-${todayDate.getFullYear()}`;
        const dateTodayFormatted = `${todayDate.getDate()}-${monthYear}`;
        return `${this.logPath}/${monthYear}/${dateTodayFormatted}.log`;
    }

    _ensureDirectoryExists(filePath) {
        const dirname = path.dirname(filePath);
        if (!fs.existsSync(dirname)) {
            this._ensureDirectoryExists(dirname);
            fs.mkdirSync(dirname);
        }
    }

    _saveLog(type, msg, params) {
        const filePath = this.getCurrentFilePath();
        const message = generateMessage(type, msg, params);

        this._ensureDirectoryExists(filePath);
        return new Promise((resolve, reject) => {
            fs.appendFile(filePath, message, { flag: 'a' }, (err) => {
                if (err)
                    reject(err);
                resolve(filePath);
            });
        });
    }
}

module.exports = File;