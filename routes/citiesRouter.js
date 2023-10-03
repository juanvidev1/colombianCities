const express = require('express');
const CityService = require('../services/cityService');


const cityService = new CityService();


const router = express.Router();

router.get('/', async (req, res) => {
    cityName = req.query.cityName;
    departmentName = req.query.departmentName;
    if (cityName) {
        result = await cityService.getCityByName(cityName, departmentName);
        return res.json(result);
    } else if(departmentName){
        result = await cityService.getCitiesByDepartment(departmentName);
        return res.json(result);
    } else {
        return res.json({
            message: 'La ciudad o el departamento no existen'
        })
    }
});

module.exports = router;