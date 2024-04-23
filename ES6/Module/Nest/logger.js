import {
    TYPE_WARN,
} from '../constants.js';

const logger = (log, type = TYPE_WARN) => {
    console[type](log);
}
//a module can have multiple exports, but only one default export
export default logger; 