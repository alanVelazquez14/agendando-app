import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import turnosRoutes from "./routes/turnos.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/turnos', turnosRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

export default app;
