import {z} from 'zod'



const signupSchema= z.object({
    fullName: z.coerce.string().min(1,{message:"Full name is required"}),
    username: z.string().min(1,{message:"username is required"}),
    password: z.coerce.string().min(8, {message:"Password must be at least 8 characters long"}),
    confirmPassword: z.coerce.string().min(8,{message:"Confirm password is required"}),
    gender: z.enum(["male", "female","others"],"Gender must be either male or female"),
})


export default signupSchema