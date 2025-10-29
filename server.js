import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import eventRoutes from "./src/routes/eventRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com o banco
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

// Rotas principais
app.use("/events", eventRoutes);

app.listen(process.env.PORT, () => {
  console.log(` Servidor rodando na porta ${process.env.PORT}`);
});
