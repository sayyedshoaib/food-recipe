require('dotenv').config();
const mongoose = require('mongoose');

 


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() =>{
    console.log('connection successful')
}).catch((e) =>{
    console.log(`Error is ${e}`)
})
