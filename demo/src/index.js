const ConsoleLogger = require('../../src/defaultLoggers/console');
const FileLogger = require('../../src/defaultLoggers/file');
const logger = require('../../src').init([
  new ConsoleLogger(),
  new FileLogger(`${__dirname}/../logs`)
]);

logger.info('info test');
logger.warn('warn test');
logger.error('error test');

require('./anotherFile');