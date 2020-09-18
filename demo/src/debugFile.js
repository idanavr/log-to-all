const logger = require('../../lib');

logger.setDebugMode(true);
logger.debug('debugFile - debug is working');
logger.setDebugMode(false);
logger.debug('debugFile - this will not be logged since debug mode is now false');