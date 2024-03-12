const express = require('express');
const CityService = require('../services/cityService');


const cityService = new CityService();


const router = express.Router();

router.get('/', async (req, res) => {
    cityName = req.query.cityName;
    provinceName = req.query.provinceName;
    
    if (cityName) {
        result = await cityService.findCitiesByName(cityName, provinceName);
        return res.json(result);
    } else if(provinceName){
        result = await cityService.getCitiesByProvince(provinceName);
        return res.json(result);
    } else {
        result = await cityService.getCities();
        return res.json(result);
    }
});

module.exports = router;