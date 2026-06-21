const express = require("express");
const app = express();

app.use(express.json());

const pedidosRoutes = require("./routes/pedidos.routes");

app.use("/pedidos", pedidosRoutes);

app.get("/", (req, res) => {
  res.json({
    projeto: "Sistema de Pedidos da Cantina",
    status: "Funcionando sem Docker"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});