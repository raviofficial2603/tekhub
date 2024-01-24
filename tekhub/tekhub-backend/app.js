const express=require("express")
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const DB=process.env.DATABASE
const USER=require('./models/userSchema')
// const DB='mongodb+srv://dbuser:1234@cluster0.jrm4l9d.mongodb.net/?retryWrites=true&w=majority'
console.log(DB)
mongoose.connect(DB).then(()=>console.log("connection successful")).catch(()=>console.log("caught"))
const app=express()
app.use(express.json())
const middleware=(req,res,next)=>{
    console.log("in middleware...")
    next() 
}

app.use(require('./router/auth'))

app.get("/",(req,res)=>{
    
    res.send("Server is up and running...")
})

app.get("/contact",(req,res)=>{
    res.cookie("jwtoken","here is your token",{
        expires:new Date(Date.now()+492834892487),
        httpOnly:true
    })
    res.send("this is contact page...")
})
app.get("/signin",(req,res)=>{
    res.send("this is signin page...")
})
app.get("/signup",(req,res)=>{
    res.send("this is signup page...")
})
app.listen(5000,()=>{
    console.log("server listening 5000 port")
})