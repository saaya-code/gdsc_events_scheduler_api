const activityModel = require("../models/activity");

module.exports = async (req,res)=>{
    try{
        const allActivities = await activityModel.find();
        res.json(allActivities).status(200);
    }
    catch(err){
        res.send({"Error":"INTERNAL SERVER ERROR"}).status(500);
        console.error(err);
    }
}