const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const { PORT, DIST_PATH } = require('./config');
const app = express();

const logger = require('./utils/logger')('MAIN');
const httpsRedirect = require('./utils/httpsRedirect');

/* ADDING MIDDLEWARES */

logger.info('Adding middlewares...');

logger.debug('compression');
app.use(compression());

if (process.env.NODE_ENV === 'production') {
    logger.debug('httpsRedirect');
    app.use(httpsRedirect);
}

logger.debug('helmet');
app.use(helmet());

logger.debug('cors');
app.use(cors());

logger.debug('morgan');
app.use(morgan('dev'));

logger.debug('bodyParser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

logger.debug('history fallback');
app.use(history());

logger.debug('express-static');
app.use(express.static(DIST_PATH));

logger.success('Added middlewares!!!');

logger.hr();

/* STARTING SERVER */

logger.hr();

logger.info('Starting server...');
app.listen(PORT, () => {
    logger.success('Server started!!!');
    logger.debug(`Server listening on port ${PORT}`);
    logger.hr();
    logger.br();
});