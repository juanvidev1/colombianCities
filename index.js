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
            message: "Bienvenido al Servicio de Ciudades Colombianas",
            version: "1.0.0",
            description: "Un servicio web para consultar información sobre ciudades y departamentos de Colombia.",
            autor: "Juan Vcente Reyes - juanvidev1",
            documentation: "En proceso",
            github_repository: "https://github.com/juanvidev1/colombianCities"
        }
    );
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

