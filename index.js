//app create
const express = require('express');
const app = express();


//port found out krna h 
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//middleware add krna hai 
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload({
    useTempFiles : true,
    tempFileDir:'/tmp/'

}));//yeah server par upload krta h 


//db conmnect
const db = require('./conig/database');
db.connectDb();

//cloud connect 
const cloudinary = require('./conig/cloudinary');
cloudinary.cloudinaryConnect();

//api route mount
const Upload  = require('./routes/FileUpload')
app.use('/api/v1/upload' , Upload);

//server activate krna hai 
app.listen(PORT , () =>{
    console.log("APP RUNNING ON PORT ",PORT)
})


