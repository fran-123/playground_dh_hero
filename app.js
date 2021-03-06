const express=require("express");
const app =express();
const path =require("path");
const puerto = 3030;
app.use(express.static("public"))

app.listen(3030,()=>console.log( "servidor corriendo en http://localhost:"+puerto));


app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"views","index.html")))

app.get("/babbage",(req,res)=>res.sendFile(path.join(__dirname,"views","babbage.html")))
app.get("/clarke",(req,res)=>res.sendFile(path.join(__dirname,"views","clarke.html")));
app.get("/hamilton",(req,res)=> res.sendFile(path.join(__dirname,"views","hamilton.html")));
app.get("/hopper",(req,res)=>res.sendFile(path.join(__dirname,"views","hopper.html")));
app.get("/lovelace",(req,res)=>res.sendFile(path.join(__dirname,"views","lovelace.html")));
app.get("/turnig",(req,res)=>res.sendFile(path.join(__dirname,"views","turnig.html")));
