const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

//Rotas CRUD
router.post('/', usuarioController.criar); // Rota para criar um novo usuário
router.get('/', usuarioController.listar); // Rota para obter todos os usuários
router.get('/:id', usuarioController.buscarPorId); // Rota para obter um usuário específico por ID
router.put('/:id', usuarioController.atualizar); // Rota para atualizar um usuário existente
router.delete('/:id', usuarioController.deletar); // Rota para excluir um usuário existente

module.exports = router;
// O código acima define as rotas para o CRUD de usuários.