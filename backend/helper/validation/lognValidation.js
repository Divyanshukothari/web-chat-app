import {z} from 'zod'

const loginSchema= z.object({
   
    username: z.string().min(1,{message:"username is required"}),
    password: z.coerce.string().min(8, {message:"Password must be at least 8 characters long"}),
})


export default loginSchema