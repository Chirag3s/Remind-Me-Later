const mongoose = require("mongoose");
const infoschema = new mongoose.Schema({
    phonenumber:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
    datetym:{
        type:String,
        require:true,
    },    
    
});

const Info = new mongoose.model("Info",infoschema);

module.exports = Info;