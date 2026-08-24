
import {z} from 'zod'

export const nameSchema = z.string().min(6,{
    message:"name should contain more than 6 char"
})

export const passwordSchema = z.string()
.min(8,"password must be at least 8 char ")
.regex(/[A-Z]/,"Password must be contain an uppercase letter")
.regex(/[a-z]/, "password must be contain an lowercase letter")
.regex(/[0-9]/,"password must be contain number")
.regex(/[^A-Za-z0-9]/, "password must conatin special character ")