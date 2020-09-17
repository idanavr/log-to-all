const Logger = require('../logger');
const { generateMessage } = require('./utils');

class Console extends Logger {

    debug(msg, params) {
        const formattedMessage = generateMessage('debug', msg, params);
        console.log(`Logger - ${formattedMessage}`);
    }

    info(msg, params) {
        const formattedMessage = generateMessage('info', msg, params);
        console.log(`Logger - ${formattedMessage}`);
    }

    warn(msg, params) {
        const formattedMessage = generateMessage('warn', msg, params);
        console.warn(`Logger - ${formattedMessage}`);
    }

    error(msg, params) {
        const formattedMessage = generateMessage('error', msg, params);
        console.error(`Logger - ${formattedMessage}`);
    }
}

module.exports = Console;