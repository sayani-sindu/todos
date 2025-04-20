const mongoose = require("mongoose");

const conn = async () => {
    try {
        const connStr = await mongoose.connect("mongodb://localhost:27017/todoDB")
        console.log("Connected to MongoDB");
        console.log(connStr);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

conn();
