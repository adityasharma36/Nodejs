
import nodemailer from 'nodemailer'
import { serverConfig } from '.'

 export const transport = nodemailer.createTransport({
    pool:true,
    host:serverConfig.SMTP_HOST,
    port:serverConfig.SMTP_PORT,
    secure:true,
    auth:{
        user:serverConfig.SMTP_USER,
        pass:serverConfig.SMTP_PASS
    }
})