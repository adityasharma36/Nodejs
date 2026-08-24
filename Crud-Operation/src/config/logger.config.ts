import { createLogger, format, transports } from "winston";
import { getCorelationId } from "../utils/helper/request.header";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, printf, errors, splat } = format;

const myFormat = printf(({ level, message, timestamp, stack }) => {
    const printableMessage = typeof message === "string" ? message : JSON.stringify(message);
    const errorStack = stack ? `\n${stack}` : "";
    return `${timestamp} [${getCorelationId()}] ${level}: ${printableMessage}${errorStack}`;
});

const logger = createLogger({
    level: "info",
    
    format: combine(
        errors({ stack: true }),
        splat(),
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        myFormat
    ),

    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: "logs/app-%DATE%.log",
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d"
        }),
        new DailyRotateFile({
            level:"error",
            filename:"logs/error-%DATE%.log",
            datePattern:"YYYY-MM-DD-HH",
            zippedArchive:true,
            maxSize:"20m",
            maxFiles:"14d"
        }),

    ]
});

export default logger;