import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
       await mongoose.connect("mongodb+srv://codersuman01_db_user:yrqoQLMV3H8bLbG9@cluster0.jmv4vzs.mongodb.net/?appName=Cluster0");
            console.log("MONGODB CONNECTED SUCCESFULLY")
    } catch(error){
        console.error("ERROR CONNECTING TO MONGODB",error);
        process.exit(1); // exit with failure

    }
}