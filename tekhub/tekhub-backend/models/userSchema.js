const mongoose=require('mongoose')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const userSchema=mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    work: {
         type: String,
        required:true
    },
    password: {
         type: String,
        required:true
    },
    cpassword: {
         type: String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

userSchema.pre("save",async function(next){
    // console.log(this.isModified('password') +"###########3333333")
    if(this.isModified('password')){
        this.password=bcrypt.hashSync(this.password,12)
        this.cpassword=bcrypt.hashSync(this.cpassword,12)
    }
    next()
})
userSchema.methods.generateToken=function(){
    const token=jwt.sign({_id:this._id},process.env.SECRET_TOKEN)
    this.tokens.push({token:token})
    this.save()
    console.log(this.tokens)
    return token;
}

const User=mongoose.model('USER',userSchema)
module.exports=User