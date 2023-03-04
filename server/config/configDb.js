const mongoose = require("mongoose");
const colors = require("colors"); 
require('dotenv').config();
mongoose.set("strictQuery", false);
try {const connectDb=mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB");
  });
    
} catch (error) {
//console.log("errorconnectingtoserver",error);   
throw error 
}
module.exports=connectDb