const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        // Log the URI prefix (masking sensitive info)
        console.log(`Connecting to MongoDB with prefix: ${uri.substring(0, 20)}...`);
        
        await mongoose.connect(uri);
        console.log("✅ Connected to MongoDB!");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;
