const ConsoleLogger = require('../../lib/defaultLoggers/console');
const FileLogger = require('../../lib/defaultLoggers/file');

const logger = require('../../lib').init([
    new ConsoleLogger(),
    new FileLogger(`${__dirname}/../logs`)
], true);

logger.debug('debugFile is working');