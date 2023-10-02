require('dotenv').config();
const express = require('express');
const router = express.Router();
const colombiaCitiesList = require('./colombiaCities.json');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req, res) => {
    res.json(
        {
            message: "Bienvenido a Mi Servicio de Ciudades",
            version: "1.0.0",
            description: "Un servicio web para consultar información sobre ciudades y departamentos.",
            documentation: "https://example.com/documentation",
            github_repository: "https://github.com/tu-usuario/tu-repositorio"
        }
    );
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

