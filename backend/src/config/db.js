/** @format */

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoUri);
    console.log("MONGODB CONNECTED SUCCESFULLY");
  } catch (error) {
    console.error("ERROR CONNECTING TO MONGODB", error);
    process.exit(1); // exit with failure
  }
};
