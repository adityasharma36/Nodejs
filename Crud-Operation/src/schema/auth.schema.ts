

import {z} from 'zod'
import { emailSchema, passwordSchema, usernameSchema } from './common.schema'

export const authSchema = z.object({

    username:usernameSchema,

    password:passwordSchema,

    email:emailSchema
    
})