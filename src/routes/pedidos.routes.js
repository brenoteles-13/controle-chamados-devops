const express = require("express");
const router = express.Router();

const controller = require("../controllers/pedidos.controller");

router.get("/", controller.listar);
router.post("/", controller.criar);
router.put("/:id", controller.atualizarStatus);
router.delete("/:id", controller.deletar);

module.exports = router;