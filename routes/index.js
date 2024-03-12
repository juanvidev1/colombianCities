const express = require('express');
const citiesRouter = require('./citiesRouter');


const routerApi = (app) => {
    router = express.Router();
    app.use('/api/v1', router);
    router.use('/cities', citiesRouter);
}

module.exports = routerApi;