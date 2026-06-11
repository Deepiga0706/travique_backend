const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
    day: Number,
    title: String,
    details: String
}, { _id: false });

const PackageSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },

    category: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    destination: {
        type: String
    },

    price: {
        type: Number,
        required: true
    },

    duration: {
        type: String
    },

    description: {
        type: String
    },

    image: {
        type: String
    },

    inclusions: [String],

    exclusions: [String],

    highlights: [String],

    itinerary: [itinerarySchema]
},
{
    timestamps: true
});

module.exports = mongoose.model("Package", PackageSchema);