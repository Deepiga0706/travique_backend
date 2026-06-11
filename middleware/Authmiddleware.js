// =============================================
// backend/middleware/authMiddleware.js
// JWT verification + admin role guard
// =============================================

const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

/**
 * protect — verifies the JWT in Authorization header
 * Attaches `req.user` from the DB on success
 */
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorised — no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user without password
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "User not found" });
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};

/**
 * adminOnly — must run AFTER protect
 * Blocks non-admin users with 403
 */
const adminOnly = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
};

module.exports = { protect, adminOnly };