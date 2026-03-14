import express from "express";
import cors from "cors";
import PredioRutas from "./src/routes/predio.routes.js";

// aplicacion principal
const app = express();

//middlewares
app.use(cors());
app.use(express.json())


//Rutas
app.use("/api", PredioRutas);

export default app;