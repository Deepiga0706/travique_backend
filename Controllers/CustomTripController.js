const CustomTrip = require("../Models/CustomTripModel");
exports.createCustomTrip = async (req, res) => {
  console.log("=== CUSTOM TRIP REQUEST RECEIVED ===");
  console.log(req.body);

  try {
    const customTrip = await CustomTrip.create({
      ...req.body,
      status: req.body.status || "Pending Review",
    });

    res.status(201).json({ success: true, customTrip });
  } catch (error) {
    console.error("CUSTOM TRIP ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.getUserCustomTrips = async (req, res) => {
  try {
    const { userId } = req.params;
    const trips = await CustomTrip.find({ userId }).sort({ createdAt: -1 });
    res.json({ success: true, trips });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getCustomTripById = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await CustomTrip.findById(id);
    if (!trip) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, trip });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

