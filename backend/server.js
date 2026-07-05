// import express from "express"; // not for module in script in package.json


const express = require("express");
const app = express();

app.get("/api/notes",(req,res)=>{
    // delete a note
    res.send("You got 5 notes");
});

app.get("/api/notes",(req,res)=>{
    // create a note
    res.send("You got 5 notes");
});

app.listen(5001,()=>{
    console.log("Server started on PORT: 5001");
});