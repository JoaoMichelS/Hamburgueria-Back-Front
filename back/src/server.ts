import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/client";
import hambRoutes from "./routes/hamb";
import cors from 'cors';

mongoose.connect("mongodb://127.0.0.1:27017/atividade");

// Constantes
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

// Rotas para o controle de clientes
app.use(userRoutes);
// Rotas para o controle de hamburgueres
app.use(hambRoutes);

app.listen(port, () => {
  console.log(`server runnig on http://localhost:${port}`);
});
