const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    phone : {
        type:Number,
        required:true
    },
    work : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    cpassword : {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name : {
                type:String,
                required:true
            },
            email : {
                type:String,
                required:true
            },
            phone : {
                type:Number,
                required:true
            },
            message : {
                type:String,
                required:true
            }
        }
    ],
    tokens :[{
        token :{
            type:String,
            required:true
        }
    }]
})
userSchema.pre('save', async function(next){
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

// generating token
userSchema.methods.generateAuthToken = async function(){
    try{
        const user = this
        const token = jwt.sign({ _id : user._id.toString()},"mynameissayyedshoaibuddintheking");
        user.tokens = user.tokens.concat({token})
        await user.save()
        return token
    }catch(e){
        console.log("errror is" + e)
    }
}

// store message
userSchema.methods.addMessage = async function(name,email,phone,message){
    try{
        const user = this
        user.messages = user.messages.concat({name,email,phone,message})
        await user.save()
        return user.messages
    }catch(err){
        console.log(err)
    }
}


const User = mongoose.model('USER',userSchema);
module.exports = User;



