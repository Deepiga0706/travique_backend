const mongoose = require("mongoose");

const customTripSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fullName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },

    destination: { type: String },
    travelDate: { type: Date },
    numberOfTravelers: { type: Number },
    budgetRange: { type: String },

    accommodationPreference: { type: String },
    travelInterests: {
  type: [String],
  default: [],
},
    modeOfTravel: { type: String },

    additionalRequirements: { type: String },

    status: {
      type: String,
      default: "Pending Review",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.CustomTrip ||
  mongoose.model("CustomTrip", customTripSchema);

