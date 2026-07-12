// import express from "express"; // not for module in script in package.json


const express = require("express");
const app = express();

app.get("/api/notes",(req,res)=>{
    // send the notes
    res.status(200).send("You got 5 notes ");
});

app.post("/api/notes",(req,res)=>{
    res.status(201).send("Your notes created successfully");
})



app.listen(5001,()=>{
    console.log("Server started on PORT: 5001");
});