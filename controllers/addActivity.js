const activityModel = require("../models/activity");
const webhookHandler = require("../helpers/webhookHandler");
module.exports = async (req,res)=>{
    try{
        console.log(req.body)
        const {activity_type, date, details, concerned_committes} = req.body;
        const newdetails = details || "No details provided."
        const newActivity = new activityModel({
            activity_type,
            date,
            newdetails,
            concerned_committes,
        })
        await newActivity.save();
        res.json(newActivity).status(200);
        webhookHandler(req.body);
    }
    catch(err){
        res.send({"Error":"INTERNAL SERVER ERROR"}).status(500);
        console.error(err);
    }
}