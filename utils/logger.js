const chalk = require('chalk');
const palette = require('../config').LOGGER.palette;

class Logger {

    constructor(scope) {
        this.scope = scope;
    }

    info(message, object) {
        const tag = chalk.bold.blue('[INFO]');
        const scope = chalk.blue(`{${this.scope}}`);
        const text = chalk.hex(palette.info)(`${tag} ${scope} ${message}`);
        if (object) {
            console.log(text, object)
        }
        else {
            console.log(text);
        }
    }
    
    success(message, object) {
        const tag = chalk.bold.green('[SUCCESS]');
        const scope = chalk.green(`{${this.scope}}`);
        const text = chalk.hex(palette.success)(`${tag} ${scope} ${message}`);
        if (object) {
            console.log(text, object)
        }
        else {
            console.log(text);
        }
    }

    debug(message, object) {
        const tag = chalk.bold.grey('[DEBUG]');
        const scope = chalk.grey(`{${this.scope}}`);
        const text = chalk.hex(palette.debug)(`${tag} ${scope} ${message}`);
        if (object) {
            console.debug(text, object)
        }
        else {
            console.debug(text);
        }
    }

    warning(message, object) {
        const tag = chalk.bold.yellow('[WARNING]');
        const scope = chalk.yellow(`{${this.scope}}`);
        const text = chalk.hex(palette.warning)(`${tag} ${scope} ${message}`);
        if (object) {
            console.warn(text, object)
        }
        else {
            console.warn(text);
        }
    }

    error(message, error) {
        const tag = chalk.bold.red('[ERROR]');
        const scope = chalk.red(`{${this.scope}}`);
        const text = chalk.hex(palette.error)(`${tag} ${scope} ${message}`);
        if (error) {
            console.error(text, error)
        }
        else {
            console.error(text);
        }
    }

    br(n) {
        n = n || 1;
        for (let i = 0; i < n; i++) {
            console.log();
        }
    }
    hr(n) {
        n = n || 1;
        const hyphens = [...Array(50).keys()].map(_ => '-').join('');
        for (let i = 0; i < n; i++) {
            console.log(hyphens);
        }
    }

}

module.exports = function(scope) {
    return new Logger(scope);
};