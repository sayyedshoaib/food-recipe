require('dotenv').config();
const mongoose = require('mongoose');
// const DB = 'mongodb+srv://shoaib_sayyed:Shoaib786@@cluster0.gb8wg.mongodb.net/MERNstack?retryWrites=true&w=majority'


 


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
