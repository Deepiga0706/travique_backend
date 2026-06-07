const Package = require("../Models/PackageModel");


const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();

        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllPackages
};