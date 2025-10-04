const express = require("express");
const CityService = require("../services/cityService");
const { json } = require("body-parser");

const cityService = new CityService();

const router = express.Router();

router.get("/", async (req, res) => {
  cityName = req.query.cityName;
  provinceName = req.query.provinceName;
  getProvinces = req.query.getProvinces;

  if (cityName) {
    result = await cityService.findCitiesByName(cityName, provinceName);
    return res.json(result);
  } else if (provinceName) {
    result = await cityService.getCitiesByProvince(provinceName);
    return res.json(result);
  } else if (getProvinces === "1") {
    result = await cityService.getProvinces();
    return res.json(result);
  } else {
    result = cityService.getAllCities();
    return res.json(result);
  }
});

module.exports = router;
