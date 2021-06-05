const express = require('express');
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');

const router = express.Router();
const Authenticate = require("../middleware/authenticate");

require("../db/conn")


router.get('/',(req,res) => {
    res.send('hello ')
});

router.post('/register', async (req,res) =>{
    const {name,email,phone,work,password,cpassword} = req.body;
    console.log(name,email,phone,work,password)

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({ error : "Plz filled the field properly"});
    }

    try{
        const userExist = await User.findOne({ email})
        if (userExist){
            return res.status(422).json({ error : "user already exist"})
        }else if (password != cpassword){
            return res.status(422).json({error:"password not matching"})
        }else{
            const user = new User({name,email,phone,work,password,cpassword})
            await user.save();
            res.status(201).json({message : "user registered successfully"});    
        }
        
    }catch(err){
        console.log(`ye hai error ${err}`)
    }

});

router.post('/signin', async (req,res) =>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"plz fill the data"})
        }
        
        const userLogin = await User.findOne({email : email});
        if(userLogin){
             const isMatch = await bcrypt.compare(password, userLogin.password);
             const token = await userLogin.generateAuthToken();
             console.log("the token part " + token);
 
             res.cookie("jwtoken", token, {
                 expires: new Date(Date.now() + 3000000000),
                 httpOnly: true
                 // secure:true
             });
        const result = (isMatch) ? res.status(200).json({message:"login successfully"}) : res.status(400).json({error:"invalid details"})
        return result
        }else{
            res.status(400).json({error:"invalid details"})
        }

    }catch(err){
        console.log(err)
    }
})

router.get('/getData',Authenticate,(req,res)=>{
    console.log('hello')
    res.send(req.rootUser)
})
router.post('/contact',Authenticate, async(req,res)=>{
    console.log("hello from contact page")
   try{
    const {name,email,phone,message} = req.body;

    if(!name || !email || !phone || !message){
        console.log("error in contact form");
        return res.json({error:"please fill the contact form"})
    }
    const userContact = await User.findOne({_id:req.userID})
    // console.log(userContact)
    if(userContact){
        const userMessage = await userContact.addMessage(name,email,phone,message)
        await userContact.save()
        res.status(201).json({message:"user successfully "})
    }


   }catch(err){
       console.log(err);
   }
})
router.get("/Logout",(req,res)=>{
    console.log('hello from logout page')
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send("user logout succesfully")
})
module.exports = router;