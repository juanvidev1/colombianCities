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
        return res.json({
            message: "You haven't passed any parameter",
            mensaje: "No has pasado ningún parámetro"
        })
    }
});

module.exports = router;