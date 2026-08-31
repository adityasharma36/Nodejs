
import { Job, Worker } from "bullmq";
import { NotificationDTO } from "../dtos/notification.dto";
import { MAILER_QUEUE } from "../queue/mailer.queue";
import { getRedisConnObj } from "../config/redis.config";
import { MAILER_PAYLOAD } from "../producers/email.producers";
import { renderMailTemplate } from "../templates/templates.handler";
import { sendMail } from "../services/nodemailer.service";
import logger from "../config/logger.config";



export const setupMailerWorker = () =>{
    const emailProcessor =  new Worker<NotificationDTO>(
    MAILER_QUEUE,async (job:Job)=>{
            if(job.name !== MAILER_PAYLOAD){
                throw new Error("payload miss matched")
            }

            // call the services logic here

            const payload = job.data;
            console.log(`Processing Email for ${JSON.stringify(payload)}`);

            const emailContent = await renderMailTemplate(payload.templateid,payload.params);

            console.log('email Content', emailContent)
            await sendMail(payload.to,payload.subject,emailContent)
            logger.info(`Mail send To ${payload.to} with subject ${payload.subject}`)

    },
    {
        connection:getRedisConnObj()
    }
)

    emailProcessor.on("failed",()=>{
        console.log("emailProcessor failed ")
    })

    emailProcessor.on("completed",()=>{
        console.log('emailProcessor is completed')
    })
}