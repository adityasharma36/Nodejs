import { z } from "zod";
import { emailSchema, passwordSchema, usernameSchema } from "./common.schema";

export const createUserSchema = z.object({
    name: usernameSchema,
    email: emailSchema,
    password: passwordSchema
});

export const updateUserSchema = z.object({
    name: usernameSchema.optional(),
    email: emailSchema.optional(),
    password: passwordSchema.optional()
})
