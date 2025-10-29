const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();

app.use(cors());
app.use(express.json());

// Health
app.get('/', (req, res) => res.json({ message: 'DSMeventos Events Service OK' }));

// Routes
app.use('/events', eventRoutes);

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;