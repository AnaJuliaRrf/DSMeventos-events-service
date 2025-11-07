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
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Rota padrão apenas para teste
app.get("/", (req, res) => {
  res.send("API DSMEventos rodando com sucesso!");
});

// Rotas principais
app.use("/events", eventRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});
