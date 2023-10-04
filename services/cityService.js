const citiesOfColombia = require("../colombiaCities.json");
const CityNormalizer = require('./cityNormalizer');

class CityService {

    constructor () {
        this.cities = citiesOfColombia;
        this.cityNormalizer = new CityNormalizer();
    }

    findCitiesByName(cityName) {
        const normalizedCityName = this.cityNormalizer.normalizeCityName(cityName);
        // console.log(cityName);
        const matchingCities = [];

        this.cities.forEach(province => {
            const provinceName = province.departamento;
            province.ciudades.forEach(city => {
                const normalizedCity = this.cityNormalizer.normalizeCityName(city);
                if (normalizedCity.includes(normalizedCityName)) {
                    matchingCities.push({
                        province: provinceName,
                        city: city
                    });
                }
            });
        });

        const result = {
            data: matchingCities
        }

        return result;
    }

    getCitiesByProvince(provinceName) {
        const normalizedprovinceName = this.cityNormalizer.normalizeCityName(provinceName);
        const matchingCities = [];

        this.cities.forEach(province => {
            const normalizedprovince = this.cityNormalizer.normalizeCityName(province.departamento);
            if (normalizedprovince.includes(normalizedprovinceName)) {
                matchingCities.push(...province.ciudades);
            } 
        });

        const result = {
            data: matchingCities
        }

        return result;
    }
 

}

module.exports = CityService;