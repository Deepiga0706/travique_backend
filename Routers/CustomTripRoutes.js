const express = require("express");
const router = express.Router();
router.get("/ping", (req, res) => {
  res.json({ message: "Custom Trip Routes Working" });
});

const {
  createCustomTrip,
  getUserCustomTrips,
  getCustomTripById,
} = require("../Controllers/CustomTripController");

router.post("/", createCustomTrip);
router.get("/user/:userId", getUserCustomTrips);
router.get("/:id", getCustomTripById);

module.exports = router;

