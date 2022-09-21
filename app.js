const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const { response } = require("express");

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//public folder storing static info:css, images
app.use(express.static("public"));

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+ "/home.html");
   });

   
  
app.listen("3000", function(){
    console.log("running on port 3000");
})