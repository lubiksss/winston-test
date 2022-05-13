import winston from 'winston'

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
const process = {
    env:{
        NODE_ENV: 'production',
        // NODE_ENV: 'dev',
    }
}

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

// logger.log({
//     level: 'info',
//     message: 'Hello distributed log files!'
// });

// logger.error('Hello again distributed logs');
// logger.warn('Hello again distributed logs');
// logger.info('Hello again distributed logs');
// logger.http('Hello again distributed logs');
// logger.verbose('Hello again distributed logs');
// logger.debug('Hello again distributed logs');
// logger.silly('Hello again distributed logs');

export {logger}