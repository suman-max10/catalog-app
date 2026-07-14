import Note from "../models/Note.js";
export async function getAllNotes  (req, res) {
  try{
    const notes = await Note.find()
    res.status(200).json(notes)
  }catch{
    console.error("Error in getAll Notes method", error);
    res.status(500).json({message:"Internal Server error"});
  }
};

export async function createANotes  (req, res)  {
 try{
  const {title,content} =  req.body
  console.log(title,content)
 }catch(error){
  
 }
  
}

export function updateANotes (req, res)  {
  res.status(200).json({ message: "Note updated successfully!" });
}


export function deleteANotes  (req, res)  {
  res.status(200).json({ message: "Note deleted successfully!" });
}