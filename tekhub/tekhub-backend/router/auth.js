const express=require('express')
const User = require('../models/userSchema')
const bcrypt=require("bcryptjs")
const authenticate = require('../middleware/authenticate')
const cookieParser = require('cookie-parser')

const router=express.Router()
router.use(cookieParser())
router.get('/',(req,res)=>{
    console.log("in get")
    res.send("from router js")
})
router.get('/about',authenticate,(req,res)=>{
    // console.log("in about")
    // console.log(req.rootUser,"hi there")
    res.send(req.rootUser)
})
router.post('/contact',(req,res)=>{
    // console.log("in about")
    // console.log(req.rootUser,"hi there")

    res.send(req.rootUser)
})
router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken')
    res.send("signned out...")
})
router.post('/signup',(req,res)=>{
    console.log(req.body)
    const {name
        ,
        email
        ,
        phone
       ,
        work
        ,
        password
        ,
        cpassword}=req.body
        if(!name || !email || !phone || !work || !password || !cpassword){
            return res.status(422).json({"message":"please check fields"})
        }
        if(password!==cpassword){
            return res.status(422).json({"message":"password didnt match"})
        }
        // console.log(User.findOne({email:email}))
        User.findOne({email:email}).then((isExist)=>{
            if(isExist){
            return res.status(422).json({"message":"email already exist"})
        }
        else{
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                work: req.body.work,
                password: req.body.password,
                cpassword: req.body.cpassword,
                
              });
            
            return user.save().then(()=>res.status(201).json({"message":"success"})).catch(()=>res.status(422).json({"message":"failed"}))
        } 
        }).catch(()=>res.status(422).json({"message":"failed in checking"}))
    

})
router.post('/signin',(req,res)=>{
    console.log(req.body);
    if(req.body.email=== "" || req.body.password=== ""|| !req.body.email || !req.body.password){
        console.log("here you are")
        return res.status(400).json({"message":"invalid credentials"})
    }
    User.findOne({email:req.body.email}).then((user)=>{
        console.log(user);
        if(user){
            bcrypt.compare(""+req.body.password,user.password).then((isMatched)=>{
                if(isMatched){
                    // console.log(user.generateToken())
                    res.cookie("jwtoken",user.generateToken(),{
                        expires:new Date(Date.now()+492834892487),
                        httpOnly:true
                    })
                    return res.status(201).json({"message":"login success"})
                }
                else
                res.status(403).json({"message":"please check mail or password"})
            })
            
        } 
        else
        return res.status(403).json({"message":"invalid credentials"})
    }).catch(err=>console.log(err))
})

module.exports=router 