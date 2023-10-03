const citiesOfColombia = require("../colombiaCities.json");

class CityService {

    getCityByName(cityName) {
        cityName = cityName.toLowerCase();
        console.log(cityName);

        const cities = citiesOfColombia.filter(cityObj => {
            return cityObj.ciudades.some(city => city.toLowerCase().includes(cityName));
        });

        
        let foundDepartment = '';
        let foundCity = '';
        for (let i = 0; i < cities.length; i++) {

            for (let j = 0; j < cities[i].ciudades.length; j++) {
                if (cities[i].ciudades[j].toLowerCase() === cityName) {
                    foundDepartment = cities[i].departamento;
                    foundCity = cities[i].ciudades[j];
                    break;
                } else {
                    foundDepartment = 'El departamento no existe';
                    foundCity = 'La ciudad no existe';
                }
            }
        }

        const response = {
            department: foundDepartment,
            city: foundCity
        }

        return response;
    }

    getCitiesByDepartment(departmentName) {
        let response = '';
        departmentName = departmentName.toLowerCase();
        const department = citiesOfColombia.filter(cityObj => {
            return cityObj.departamento.toLowerCase() === departmentName;
        });
        
        if (department[0] != null) {
            response = {
                cities: department[0].ciudades
            };
        } else {
            response = {
                error: 'El departamento no existe'
            };
        }

        return response;
    }
 

}

module.exports = CityService;