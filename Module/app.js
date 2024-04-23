import logger from './Nest/index.js'
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants.js';

logger('This is default message');
logger('This is log message', TYPE_LOG);
logger('This is error message', TYPE_ERROR);
logger('This is warn message', TYPE_WARN);