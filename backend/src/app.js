import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Esta es una prueba de que esta corriendo la app
app.get("/", (req, res) => {
	res.send("API corriendo sin problema");
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		message: "Something went wrong!",
	});
});

export default app;
