import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv"

dotenv.config();

const URL = process.env.URL || "localhost"

const PORT = process.env.PORT || 5000;

const UrlApiRun = `${URL}:${PORT}`

connectDB();

app.listen(PORT, () => {
	console.log(`El servidor esta corriendo ${UrlApiRun}`);
});