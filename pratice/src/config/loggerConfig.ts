import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;
import { getCorelationId } from '../utils/helper/corelation.helper.ts';
import DailyRotateFile from 'winston-daily-rotate-file';

const myFormat = printf(({ level, message, label, timestamp }) => {

  return `${timestamp} ${[getCorelationId()]} [${label}] ${level}: ${message}`;
});
const transport = new DailyRotateFile({
  filename: 'application-%DATE%.log', 
  datePattern: 'YYYY-MM-DD',     
  dirname: './logs',             
  maxSize: '20m',                
  maxFiles: '14d'                
});

const logger = createLogger({
    level:"info",
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [transport,new transports.Console(),

  ]
});

export default logger