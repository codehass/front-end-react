const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("mongoDB connected");
	} catch (error) {
		console.error("MongoDB connection failed:", error.mongoose);
	}
};

module.exports = connectDB;
