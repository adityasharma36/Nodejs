
import { serverConfig } from "../config";
import logger from "../config/logger.config";
import { transport } from "../config/nodeMailer.config"
import { InternalServerError } from "../utils/errors/app.error";


export async function sendMail(to:string,subject:string,body:string){
    try {
         await transport.sendMail({
            from : serverConfig.SMTP_USER,
            to,
            subject,
            html:body
        });
    logger.info(`Email send to ${to} with subject ${subject}`)
      
    } catch (error) {
        console.log('Error Sending Email ', error)
        throw new InternalServerError("failed to send Email")
    }
}