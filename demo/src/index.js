const ConsoleLogger = require('../../lib/defaultLoggers/console');
const FileLogger = require('../../lib/defaultLoggers/file');
const logger = require('../../lib').init([
  new ConsoleLogger(),
  new FileLogger(`${__dirname}/../logs`)
]);

logger.info('info test');
logger.warn('warn test');
logger.error('error test');

require('./anotherFile');