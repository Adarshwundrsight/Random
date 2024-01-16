import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017",{
        dbName:"otpAPI"
    }).then(c=>console.log("connect data base "))
    .catch((e)=>console.log(e))
}