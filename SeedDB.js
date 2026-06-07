require("dotenv").config();
const mongoose = require("mongoose");

const Package = require("./Models/PackageModel");
const packages = require("./SeedPackages");

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected");
    console.log("Packages found:", packages.length);

    await Package.deleteMany();

    const result = await Package.insertMany(packages);

    console.log("Inserted:", result.length);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedData();