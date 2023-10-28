const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db.config");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const activity_router = require("./routes/activity");
const activity = require("./models/activity")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1",activity_router);

app.get("/",(req,res,next)=>{
    res.send("Hello world!")
})

app.get("/sync", async (req,res)=>{
    activity.syncIndexes()
    res.send("ok");
})
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    connectDB(process.env.MONGO_URI);
})