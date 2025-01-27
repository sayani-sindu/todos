const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://sindusayani:SinduSayani@cluster0.xpt5q.mongodb.net/?tls=true")
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

conn();
