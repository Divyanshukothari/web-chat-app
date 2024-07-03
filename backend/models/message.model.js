import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
        sender:  {
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
            required:true
           },
        receiver: {
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
            required:true
           },
        
        message : {
            type:String,
            required:true
        }
		
	},
	{ timestamps: true }
);

const User = mongoose.model("User", messageSchema);

export default User;