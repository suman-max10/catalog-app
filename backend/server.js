// import express from "express"; // not for module in script in package.json


const express = require("express");
const app = express();

app.get("/api/notes",(req,res)=>{
    // send the notes
    res.status(200).send("You got 5 notes ");
});

app.post("api/notes",(req,res)=>{
    res.status(201).json({message:"Note created successfully!"})
})
app.put("api/notes/:id",(req,res)=>{
    res.status(200).json({message:"Note updated successfully!"})
})

app.delete("api/notes/:id",(req,res)=>{
    res.status(200).json({message:"Note updated successfully!"})
})


app.listen(5001,()=>{
    console.log("Server started on PORT: 5001");
});