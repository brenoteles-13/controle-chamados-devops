const express = require("express");
const app = express();

app.use(express.json());

let pedidos = [
  { id: 1, cliente: "Breno", item: "Hamburguer", status: "RECEBIDO" }
];

// Rota principal
app.get("/", (req, res) => {
  res.json({
    projeto: "Sistema de Pedidos da Cantina",
    status: "Funcionando"
  });
});

// Listar pedidos
app.get("/pedidos", (req, res) => {
  res.json(pedidos);
});

// Criar pedido
app.post("/pedidos", (req, res) => {
  const { cliente, item } = req.body;

  const novo = {
    id: pedidos.length + 1,
    cliente,
    item,
    status: "RECEBIDO"
  };

  pedidos.push(novo);

  res.status(201).json(novo);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});