require('dotenv').config();
const express = require('express');
const router = express.Router();
const colombiaCitiesList = require('./colombiaCities.json');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

