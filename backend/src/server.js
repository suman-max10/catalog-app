/** @format */

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();

// const express = require("express");
const app = express();

// middleware 
app.use(cors({
  origin:"http://localhost:5173",
})
);
app.use(express.json());
app.use(rateLimiter);


connectDB();


// app.use((req,res,next)=>{
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });






app.use(express.json());


const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);




app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});


