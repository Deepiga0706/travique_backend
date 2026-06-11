const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const PackageRoutes = require("./Routers/PackageRoutes");
const bookingRoutes = require("./Routers/BookingRoutes");
const UserRoutes = require("./Routers/UserRoutes");
const adminRoutes = require("./Routers/AdminRoutes");
const customTripRoutes = require("./Routers/CustomTripRoutes");
const myBookingsRoute  = require("./Routers/MyBookingsRoute");


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Home Route
app.get("/", (req, res) => {
    res.send("Travique Backend Running");
});

// Routes
app.use("/api/user", UserRoutes);
app.use("/api/packages", PackageRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/custom-trips", customTripRoutes);
app.use("/api/my-bookings",  myBookingsRoute);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB successfully");
    console.log("Database Name:", mongoose.connection.name);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});