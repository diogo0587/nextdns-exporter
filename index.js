const { createServer } = require('http');
const axios = require('axios');

const server = createServer(async (req, res) => {
    try {
        const response = await axios.get('https://api.nextdns.io/...'); // Substitua pelo endpoint correto da API
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response.data));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro ao carregar os dados');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
