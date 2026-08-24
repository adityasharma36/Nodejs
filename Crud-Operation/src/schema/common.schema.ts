
import {z} from "zod";


export const emailSchema = z.email({pattern:/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i})

export const passwordSchema = z.string()
.min(8,"password must be at least 8 char ")
.regex(/[A-Z]/,"Password must be contain an uppercase letter")
.regex(/[a-z]/, "password must be contain an lowercase letter")
.regex(/[0-9]/,"password must be contain number")

.regex(/[^A-Za-z0-9]/, "password must conatin special character ")


export const usernameSchema = z.string().min(8,{

    message:"username must contain 8 min char"
    
})