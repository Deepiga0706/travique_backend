const express = require("express");
const router = express.Router();
const Package = require("../Models/PackageModel");

// GET ALL PACKAGES
router.get("/", async (req, res) => {
    try {
        const { category, destination } = req.query;
        let query = {};
        if (category) {
            query.category = { $regex: new RegExp(category, 'i') };
        }
        if (destination) {
            query.destination = { $regex: new RegExp(destination, 'i') };
        }
        const packages = await Package.find(query);
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// TEST ROUTE (optional)
router.get("/test-packages", async (req, res) => {
    const packages = await Package.find();
    res.json(packages);
});
router.get("/:slug", async (req, res) => {
    try {
        const package = await Package.findOne({
            slug: req.params.slug
        });

        if (!package) {
            return res.status(404).json({
                message: "Package not found"
            });
        }

        res.json(package);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
module.exports = router;