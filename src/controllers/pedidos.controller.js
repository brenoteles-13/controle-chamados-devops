const pedidos = require("../data/pedidos");

// listar pedidos
exports.listar = (req, res) => {
  res.json(pedidos);
};

// criar pedido
exports.criar = (req, res) => {
  const { cliente, item } = req.body;

  const novoPedido = {
    id: pedidos.length + 1,
    cliente,
    item,
    status: "RECEBIDO"
  };

  pedidos.push(novoPedido);

  res.status(201).json(novoPedido);
};

// atualizar status
exports.atualizarStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const pedido = pedidos.find(p => p.id == id);

  if (!pedido) {
    return res.status(404).json({ erro: "Pedido não encontrado" });
  }

  pedido.status = status;

  res.json(pedido);
};

// deletar pedido
exports.deletar = (req, res) => {
  const { id } = req.params;

  const index = pedidos.findIndex(p => p.id == id);

  if (index === -1) {
    return res.status(404).json({ erro: "Pedido não encontrado" });
  }

  pedidos.splice(index, 1);

  res.json({ mensagem: "Pedido removido" });
};