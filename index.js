const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.nextdns.io/...');  // Substitua pelo endpoint correto da API
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Erro ao carregar os dados');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
