const express = require('express');
const app = express();
const port = 3000;

const usuarioRouter = require('./routers/usuario.router');

app.use(express.json());
app.use('/usuarios', usuarioRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});