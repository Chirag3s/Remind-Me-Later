const Info = require("../models/reminderSchema");

const reminder = async(req,res) =>{
    try{
        const {phonenumber,email,message,datetym}=req.body;
        const createinfo = await Info.create({phonenumber,email,message,datetym});
        res.status(200).json({
            msg:"Reminder Updated Successfully",
        });

    }
    catch(error)
    {
        console.log(error);
    }
};

module.exports = reminder;