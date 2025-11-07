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

// Rota raiz (evita Cannot GET /)
app.get("/", (req, res) => {
  res.send("API DSMEventos rodando com sucesso ✅");
});

// Rotas principais
app.use("/events", eventRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
