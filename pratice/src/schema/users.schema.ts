import {z} from "zod";
import { nameSchema, passwordSchema } from "./common.schema.ts";

export const userSchema = z.object({

    name:nameSchema,
    password:passwordSchema

})