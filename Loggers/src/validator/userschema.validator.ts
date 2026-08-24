

import { z} from "zod";


export const userSchema = z.object({
    name:z.string().min(8),
    password:z.string().min(8),
    email:z.string()
})