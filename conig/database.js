const  mongoose  = require("mongoose");

require('dotenv').config();

exports.connectDb = () =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("Server Online"))
    .catch((e) =>{
        console.log("Server connetion Error")
        process.exit(1);
    })
}

