// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();


// mongoose.connect("mongodb://localhost/items",()=> {
//     console.log("Connected to db")
// }, (err)=> {
//     console.log(err);
// });


// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.set("view engine", "ejs");


// app.listen(3002, (err)=> {
//     if(!err) {
//         console.log("Server Started at 3002");
//     } else {
//         console.log(err);
//     }
// });

// const requestSchema=mongoose.Schema({
//     task:String
// })

// const Request=mongoose.model("Request",requestSchema)

// app.get("/",function(req, res){
    
//     Request.find(function(err,found){
//         if(err){
//             console.log(err)
//         }else{
//             res.render({items:found})
//         }
//     })
// })


// app.post("/add",function(req,res){
//     const input=req.body.input

//     const newItem=new Request({
//         item:input
//     })
//     newItem.save(function(err){
//         if(err){
//             console.log(err)
//         }else{
//             res.render("/")
//         }
//     })
// })






const express=require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const userModel = require("./userSchema.js")


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port=3000;
app.listen(port,()=>{
    console.log("server started at 3000")
});

mongoose.connect("mongodb://localhost/task",()=> {
    console.log("Connected to db")
}, (err)=> {
    console.log(err);
});

app.get("/items",(req,res)=>{
    userModel.find().then((user)=>{
        res.status(200).send(user)
    })
    })


    app.get("/items:id",(req,res)=>{
        userModel.find().then((user)=>{
            res.status(200).send(user)
            })
        })
    
    
app.post("/adding",(req,res)=>{
    userModel.create({title:req.body.title,
        is_completed:req.body.is_completed
        
     }).then((data)=>{
        res.status(200).send(data) 
    }).catch((err)=>{
console,log(err)
    });    
});