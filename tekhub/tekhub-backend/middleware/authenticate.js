const jwt=require('jsonwebtoken')
const User = require('../models/userSchema')
const authenticate=(req,res,next)=>{
    try{

        const token=req.cookies.jwtoken 
        const validToken=jwt.verify(token,process.env.SECRET_TOKEN)
        // console.log(validToken)
    if(validToken){
        User.findOne({_id:validToken._id,"tokens.token":token}).then(rootUser=>{
            // console.log(rootUser)
            if(rootUser){
                req.rootUser=rootUser
                // console.log(req.rootUser)
            }
            next()
        })
    }} 
    catch(err){
        return res.status(401).json("Unauthorised token")
    }
}
module.exports=authenticate