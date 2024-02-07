import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";

const connectDB = async () =>{

    try{
      const connectInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n MongoDB connect !! DB Host:${connectInstance.connection.host}}`)
    }
    catch(error){
      
        console.log("MONGODB error", error);
        process.exit(1);
    }
}



export default connectDB