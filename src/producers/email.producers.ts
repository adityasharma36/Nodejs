import { NotificationDTO } from "../dtos/notification.dto";
import { mailerQueue } from "../queue/mailer.queue";

export const MAILER_PAYLOAD = 'payload:mail'
export const addEmailToQueue = async (payload:NotificationDTO) => {
    await mailerQueue.add(MAILER_PAYLOAD,payload);
    console.log(`Email added To Queue ${JSON.stringify(payload)}`);
}