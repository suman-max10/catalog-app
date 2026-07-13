/** @format */

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

// const express = require("express");
const app = express();
connectDB();

const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
