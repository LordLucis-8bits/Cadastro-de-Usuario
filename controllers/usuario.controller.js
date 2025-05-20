const db = require('../db');

//CREATE
exports.criar = (req, res) => {
    const { nome, email } = req.body;
    db.query('INSERT INTO usuario (nome, email) VALUES (?, ?)', [nome, email], (error) => {
        if (error) return res.status(500).json(error);
        res.status(201).send('Usuário criado com sucesso!');
    });
};

//READ
exports.listar = (req, res) => {
    db.query('SELECT * FROM usuario', (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
};

//BY ID
exports.buscarPorId = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM usuario WHERE id = ?', [id], (error, results) => {
        if (error) return res.status(500).json(error);
        if (results.length === 0) return res.status(404).send('Usuario não encontrado');
        res.json(results[0]);
    });
};

//UPDATE
exports.atualizar = (req, res) => {
    const id = req.params.id;
    const { nome, email } = req.body;
    db.query('UPDATE usuario SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (error) => {
        if (error) return res.status(500).json(error);
        res.send('Usuário atualizado com sucesso!');
    });
};

//DELETE
exports.deletar = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM usuario WHERE id = ?', [id], (error) => {
        if (error) return res.status(500).json(error);
        res.send('Usuário deletado com sucesso!');
    });
};

