const ConsoleLogger = require('../../lib/defaultLoggers/console');
const FileLogger = require('../../lib/defaultLoggers/file');
const logger = require('../../lib').init([
  new ConsoleLogger(),
  new FileLogger(`${__dirname}/../logs`)
]);

logger.debug('debug test');
logger.info('info test');
logger.warn('warn test');
logger.error(new Error('error test'));

require('./anotherFile');
require('./debugFile');