import express from "express"
import cors from "cors"
import taskRoutes from "./routes/taskRoutes.js"



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

//Esta es una prueba de que esta corriendo la app
app.get("/", (req, res) => {
  res.send("API corriendo sin problema")
});

export default app;