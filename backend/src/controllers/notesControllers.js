/** @format */

import Note from "../models/Note.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt:-1});// latest first
    res.status(200).json(notes);
  } catch {
    console.error("Error in getAll Notes method", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}

export async function createANotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    // res.status(201).json({message:"Note created successfully"})
    res.status(201).json({ savedNote });
  } catch (error) {
    console.error("Error in create note controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
  
}

export async function getNoteById(req,res){
  try {
    const note= await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"Note not Found!"});
      res.json(note);
  } catch (error) {
    console.error("Error in getNoteById Controllers",error);
    res.status(500).json({message:"Internal server error"});
  }

}

export async function updateANotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNotes = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      },
    );
    if (!updatedNotes)
      return res.status(404).json({ message: "notes not found" });

    res.status(200).json({ updatedNotes });
  } catch (error) {
    console.error("Error in update Notes controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}

export async function deleteANotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Notes not found" });
    res.status(200).json({ message: "Note deleted Succefully" });
  } catch (error) {
    console.error("Error in deleted Notes controller", error);
    res.status(500).json({ message: "Internal Server error" });
  }
}
