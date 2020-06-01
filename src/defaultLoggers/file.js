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

    _ensureDirectoryExists(filePath) {
        const dirname = path.dirname(filePath);
        if (!fs.existsSync(dirname)) {
            this._ensureDirectoryExists(dirname);
            fs.mkdirSync(dirname);
        }
    }

    _saveLog(type, msg, params) {
        const todayDate = new Date();
        const monthYear = `${todayDate.getMonth() + 1}-${todayDate.getFullYear()}`;
        const dateTodayFormatted = `${todayDate.getDate()}-${monthYear}`;
        const filePath = `${this.logPath}/${monthYear}/${dateTodayFormatted}.log`;
        const message = generateMessage(type, msg, params);

        this._ensureDirectoryExists(filePath);
        fs.appendFile(filePath, message, { flag: 'a' }, (err) => {
            if (err)
                console.log(err);
        });
    }

    info(msg, params) {
        this._saveLog('Info', msg, params);
    }

    warn(msg, params) {
        this._saveLog('Warn', msg, params);
    }

    error(msg, params) {
        this._saveLog('Error', msg, params);
    }
}

module.exports = File;