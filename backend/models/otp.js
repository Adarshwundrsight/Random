import mongoose from "mongoose";

const schema=new mongoose.Schema({
    code: { 
        type: String, 
        
      },
})
export const OTP=mongoose.model("otp",schema)