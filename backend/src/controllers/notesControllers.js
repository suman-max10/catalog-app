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
  const note = new Note({title, content})

  const savedNote = await note.save()
  // res.status(201).json({message:"Note created successfully"})
  res.status(201).json({savedNote})
 }catch(error){
  console.error("Error in create note controller", error);
    res.status(500).json({message:"Internal Server error"});
  

 }
  
}

export async function updateANotes (req, res)  {
  try {
   const {title,content} = req.body;
   const updatedNotes = await Note.findByIdAndUpdate(req.params.id,{title,content},
    {
      new:true,
    }
   )
   if(!updatedNotes) return res.status(404).json({message:"notes not found"})
   
   res.status(200).json({updatedNotes})
    
  } catch (error) {
    console.error("Error in update Notes controller", error);
    res.status(500).json({message:"Internal Server error"});
    
  }
}


export function deleteANotes  (req, res)  {
  res.status(200).json({ message: "Note deleted successfully!" });
}