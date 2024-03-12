const mongoose  = require("mongoose");

const URL = process.env.MURL

const connectDB = async()=>
{
    try
    {
        await mongoose.connect(URL);
        console.log("DB Connection successfull");
    }
    catch(error)
    {
        console.log("DB Connection failed");
        process.exit(0);
    }
};

module.exports = connectDB;