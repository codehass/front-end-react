const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

app.get("/", (req, res) => {
	res.send("hello from ExpressJS Server!");
});

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
