import { createLogger, format, level, transports } from 'winston'
import { getCorelationId } from '../utils/helper/request.helper';
const { combine, timestamp, label, printf } = format;

import DailyRotateFile from 'winston-daily-rotate-file'

const myFormat = printf(({ level, message, label, timestamp }) => {
    const corelationdId = getCorelationId();
  return `${timestamp} [${label}] ${level}: ${message} ${corelationdId}`;
});

const logger = createLogger({
  format: combine(
    label({ label: level}),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console(),
    new DailyRotateFile({
    level: 'info',
    filename: 'logs/-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })]
});



export default logger