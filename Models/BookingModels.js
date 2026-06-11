// backend/models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // ── Package reference ──────────────────
    packageId: {
      type: mongoose.Schema.Types.Mixed,   // accepts ObjectId or slug string
      ref: "Package",
      required: false,
    },
    packageName: {
      type: String,
      required: true,
    },

    // ── Package image ───────────────────────
    packageImage: { type: String, default: '' },

    // ── Customer details ───────────────────
    customerName: { type: String, required: true },
    email:        { type: String, required: true },
    mobile:       { type: String, required: true },
    city:         { type: String },

    // ── Trip details ───────────────────────
    travelDate: { type: Date, required: true },
    adults:     { type: Number, default: 1 },
    children:   { type: Number, default: 0 },
    totalPrice: { type: Number },
    specialRequest: { type: String },

    // ── Optional: logged-in user link ──────
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // ── Status ─────────────────────────────
    bookingStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

// ── Virtual helpers so admin dashboard works ──
// AdminDashboard reads b.status, b.totalAmount, b.customerEmail, b.packageTitle
bookingSchema.virtual("status").get(function () {
  return this.bookingStatus.toLowerCase(); // "pending" | "confirmed" | "cancelled"
});
bookingSchema.virtual("totalAmount").get(function () {
  return this.totalPrice || 0;
});
bookingSchema.virtual("customerEmail").get(function () {
  return this.email;
});
bookingSchema.virtual("packageTitle").get(function () {
  return this.packageName;
});

bookingSchema.set("toJSON",   { virtuals: true });
bookingSchema.set("toObject", { virtuals: true });

module.exports =
  mongoose.models.Booking ||
  mongoose.model("Booking", bookingSchema)