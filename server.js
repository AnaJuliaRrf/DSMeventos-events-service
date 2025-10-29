// Importa o dotenv para carregar as variáveis de ambiente (como a JWT_SECRET e a PORT)
require('dotenv').config();

// Importa a instância do Express configurada em src/app.js
const app = require('./src/app');

// Importa a função de conexão com o banco de dados
const connectDB = require('./src/config/db');

// Define a porta, usando a variável de ambiente PORT ou 3000 como fallback
const PORT = process.env.PORT || 3000;

/**
 * Função principal para conectar ao banco de dados e iniciar o servidor.
 */
async function startServer() {
    try {
        // Conecta ao MongoDB
        await connectDB();

        // Inicia o servidor Express
        app.listen(PORT, () => {
            console.log(`\n======================================================`);
            console.log(`✅ DSMeventos Events Service rodando na porta: ${PORT}`);
            console.log(`📚 Documentação (Swagger): http://localhost:${PORT}/docs`);
            console.log(`======================================================\n`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error.message);
        // Em caso de erro grave, encerra o processo
        process.exit(1);
    }
}

// Iniciar
startServer();