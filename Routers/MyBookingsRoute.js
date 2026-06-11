const express = require('express');
const router = express.Router();
const Booking = require('../Models/BookingModels');
const CustomTrip = require('../Models/CustomTripModel');
const { protect } = require('../middleware/Authmiddleware');

// GET /api/my-bookings
// Returns regular bookings + custom trips for the logged-in user.
// Queries by userId first; also matches by email as fallback for
// bookings created before userId was being stored.
router.get('/', protect, async (req, res) => {
  try {
    const userId = req.user._id;
    const userEmail = req.user.email?.toLowerCase();

    // Query bookings by userId OR by email (covers legacy bookings without userId)
    const bookingQuery = userEmail
      ? { $or: [{ userId }, { email: userEmail }] }
      : { userId };

    const [bookings, customTrips] = await Promise.all([
      Booking.find(bookingQuery).sort({ createdAt: -1 }).lean(),
      CustomTrip.find({ userId }).sort({ createdAt: -1 }).lean(),
    ]);

    // Shape bookings to match what Bookings.jsx expects
    const shapedBookings = bookings.map((b) => ({
      _id:               b._id,
      bookingId:         b._id,
      packageTitle:      b.packageName || '',
      packageImage:      b.packageImage || '',
      destination:       b.packageName || '',
      duration:          '',
      numberOfTravelers: b.adults || 1,
      totalAmount:       b.totalPrice || 0,
      travelDate:        b.travelDate,
      bookingDate:       b.createdAt,
      status:            b.bookingStatus?.toLowerCase() || 'confirmed',
    }));

    res.json({ bookings: shapedBookings, customTrips });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
