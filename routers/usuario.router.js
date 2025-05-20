const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

//Rotas CRUD
router.get('/', usuarioController.getAllUsuarios); // Rota para obter todos os usuários
router.get('/:id', usuarioController.getUsuarioById); // Rota para obter um usuário específico pelo ID
router.post('/', usuarioController.createUsuario); // Rota para criar um novo usuário
router.put('/:id', usuarioController.updateUsuario); // Rota para atualizar um usuário existente
router.delete('/:id', usuarioController.deleteUsuario); // Rota para excluir um usuário existente

module.exports = router;
// O código acima define as rotas para o CRUD de usuários.