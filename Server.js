const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const PackageRoutes = require("./Routers/PackageRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Travique Backend Running");
});

const UserRoutes = require("./Routers/UserRoutes");
app.use("/api/user", UserRoutes);
app.use("/api/packages", PackageRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB successfully");
     console.log("Database Name:", mongoose.connection.name);
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Travique Backend Running");
});
const Package = require("./Models/PackageModel");




