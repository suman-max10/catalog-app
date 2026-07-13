export function getAllNotes  (req, res) {
  res.status(200).send("You just fetech the notes ");
};

export function createANotes  (req, res)  {
  res.status(201).json({ message: "Note created successfully!" });
  
}

export function updateANotes (req, res)  {
  res.status(200).json({ message: "Note updated successfully!" });
}


export function deleteANotes  (req, res)  {
  res.status(200).json({ message: "Note deleted successfully!" });
}