/** @format */

import express from "express";
import {
  getAllNotes,
  createANotes,
  updateANotes,
  deleteANotes,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createANotes);
router.put("/:id", updateANotes);
router.delete("/:id", deleteANotes);

export default router;
