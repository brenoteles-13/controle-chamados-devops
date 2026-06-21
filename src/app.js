const express = require("express");

const app = express();

app.use(express.json());

// Página inicial
app.get("/", (req, res) => {
    res.json({
        projeto: "Sistema de Pedidos da Cantina",
        disciplina: "Manutenção de Software e DevOps",
        status: "Funcionando"
    });
});

// Lista temporária de pedidos
let pedidos = [];

// Criar pedido
app.post("/pedidos", (req, res) => {

    const novoPedido = {
        id: pedidos.length + 1,
        cliente: req.body.cliente,
        item: req.body.item,
        quantidade: req.body.quantidade,
        status: "RECEBIDO"
    };

    pedidos.push(novoPedido);

    res.status(201).json(novoPedido);
});

// Listar pedidos
app.get("/pedidos", (req, res) => {
    res.json(pedidos);
});

// Atualizar status
app.put("/pedidos/:id/status", (req, res) => {

    const id = parseInt(req.params.id);

    const pedido = pedidos.find(p => p.id === id);

    if (!pedido) {
        return res.status(404).json({
            erro: "Pedido não encontrado"
        });
    }

    pedido.status = req.body.status;

    res.json(pedido);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});