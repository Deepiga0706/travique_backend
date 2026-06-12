// backend/routes/adminRoutes.js
const express = require("express");
const router  = express.Router();
const Package = require("../Models/PackageModel");
const Booking = require("../Models/BookingModels");
//const { protect, adminOnly } = require("../middleware/Authmiddleware");

//router.use(protect, adminOnly);

// ── PACKAGES ──────────────────────────────────────────────

// GET all packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST add new package
router.post("/packages", async (req, res) => {
  try {
    const { title, slug, description, price, duration, category, location, image, gallery, highlights } = req.body;
    if (!title || !slug || !description || !price)
      return res.status(400).json({ message: "title, slug, description and price are required" });

    const exists = await Package.findOne({ slug });
    if (exists) return res.status(400).json({ message: "A package with this slug already exists" });

    const pkg = await Package.create({
      title, slug, description,
      price: Number(price),
      duration: duration || '',
      category: category || 'general',
      destination: location || '',   // form sends 'location', model field is 'destination'
      image: image || '',
      gallery: gallery || [],
      highlights: highlights || [],
    });
    res.status(201).json({ message: "Package created", package: pkg });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE package
router.delete("/packages/:id", async (req, res) => {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json({ message: "Package deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ── BOOKINGS ──────────────────────────────────────────────

// GET all bookings — uses your actual field names
router.get("/bookings", async (req, res) => {
  try {
    console.log("NEW ADMIN BOOKINGS ROUTE RUNNING");

    // Avoid any implicit package ref resolution; we only need userId population.
    const bookings = await Booking.find({})
      .populate("userId", "name email")
      .sort({ createdAt: -1 })
      .lean();

    // Defensive shaping: ensure endpoint never crashes due to missing/legacy fields.

    const shaped = (bookings || []).map((b) => {
      const customerEmail = b?.email || b?.customerEmail || b?.userId?.email || "";
      const customerName = b?.customerName || b?.name || b?.userId?.name || "";

      return {
        _id: b?._id,
        customerName,
        customerEmail,
        packageTitle: b?.packageName || "",
        // keep existing UI fields available even if some docs are legacy
        packageImage: b?.packageImage || "",
        travelDate: b?.travelDate,
        adults: b?.adults,
        children: b?.children,
        totalAmount: b?.totalPrice || 0,
        status: (b?.bookingStatus || "Pending").toLowerCase(),
        mobile: b?.mobile,
        city: b?.city,
        specialRequest: b?.specialRequest,
        createdAt: b?.createdAt,
      };
    });

    res.json(shaped);
  } catch (err) {
  console.error("========== ADMIN BOOKINGS ERROR ==========");
  console.error(err);
  console.error(err.stack);

  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}
});

// GET booking stats
router.get("/bookings/stats", async (req, res) => {
  try {
    const total     = await Booking.countDocuments();
    const pending   = await Booking.countDocuments({ bookingStatus: "Pending" });
    const confirmed = await Booking.countDocuments({ bookingStatus: "Confirmed" });
    const cancelled = await Booking.countDocuments({ bookingStatus: "Cancelled" });
    const revenue   = await Booking.aggregate([
      { $match: { bookingStatus: { $ne: "Cancelled" } } },
      { $group: { _id: null, total: { $sum: "$totalPrice" } } }
    ]);
    res.json({ total, pending, confirmed, cancelled, totalRevenue: revenue[0]?.total || 0 });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PATCH update booking status
router.patch("/bookings/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    // Accept both casings from the frontend
    const statusMap = { pending: "Pending", confirmed: "Confirmed", cancelled: "Cancelled" };
    const bookingStatus = statusMap[status?.toLowerCase()];
    if (!bookingStatus)
      return res.status(400).json({ message: "Invalid status. Use: pending | confirmed | cancelled" });

    const booking = await Booking.findByIdAndUpdate(req.params.id, { bookingStatus }, { new: true });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Status updated", booking });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;