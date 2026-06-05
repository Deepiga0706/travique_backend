const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app=express();
app.use(express.json());
app.use(cors()); 
app.listen(5000,()=>{
    console.log("Server is running on port 5000"); 
});
const UserRoutes=require("./Routers/UserRoutes");
app.use("/api/user",UserRoutes);
console.log("Mongo URL:", process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB successfully");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});


