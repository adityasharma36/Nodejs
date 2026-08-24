
import { createLogger , format , transports } from 'winston';
import { getCorelationId } from '../utils/helper/request.header';
import DailyRotateFile from "winston-daily-rotate-file"

const { combine , timestamp , label , printf } = format;

const myFormat = printf( ( { level, message, label, timestamp ,...data } ) => {
    console.log(data);
    const corelationId = getCorelationId();
    return `${timestamp} [${label}] ${level}: ${message} ${label} ${corelationId} `;
    

})

const logger = createLogger({
    format:combine(
        // label({label:'right Meow ! '}),
        // format.json(),
        timestamp({format: "MM-DD-YYYY HH:mm:ss"}),
        myFormat
    ),
    transports:[new transports.Console(),
    new DailyRotateFile({
    level: 'info',
    filename: 'logs/%DATE%-app.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })
    ]
});

export default logger;
