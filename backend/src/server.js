/** @format */

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

// const express = require("express");
const app = express();
connectDB();

const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);


app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});


// mongodb+srv://codersuman01_db_user:yrqoQLMV3H8bLbG9@cluster0.jmv4vzs.mongodb.net/?appName=Cluster0