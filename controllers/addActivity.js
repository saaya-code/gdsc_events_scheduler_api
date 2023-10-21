const activityModel = require("../models/activity");

module.exports = async (req,res)=>{
    try{
        const {activity_type, date, details, concerned_committes} = req.body;
        const newActivity = new activityModel({
            activity_type,
            date,
            details,
            concerned_committes,
        })
        await newActivity.save();
        res.send(newActivity).status(200);
    }
    catch(err){
        res.send({"Error":"INTERNAL SERVER ERROR"}).status(500);
        console.error(err);
    }
}