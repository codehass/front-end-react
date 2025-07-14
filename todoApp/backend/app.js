const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hello from express!");
});

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
