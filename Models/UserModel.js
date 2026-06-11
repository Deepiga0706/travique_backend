// backend/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname:       { type: String },
    lastname:        { type: String },
    email:           { type: String, unique: true },
    phone:           { type: String },
    password:        { type: String },
    confirmpassword: { type: String },
    role: {
      type:    String,
      enum:    ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);