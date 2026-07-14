import mongoose from "mongoose";

// crewat a schemas
// model based off that svhema

const noteScheme = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true

    },
    
},{timestamps:true }// craedted at and updated at

);

const Note = mongoose.model("Note",noteScheme)

export default Note;