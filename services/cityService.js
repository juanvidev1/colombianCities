const citiesOfColombia = require("../colombiaCities.json");

class CityService {

    getCityByName(cityName, departmentName = '') {
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
        departmentName = departmentName.toLowerCase();
        const department = citiesOfColombia.filter(cityObj => {
            return cityObj.departamento.toLowerCase() === departmentName;
        });
        console.log(department[0]);
        
        if (department[0] != null) {
            console.log(department[0].ciudades);
        } else {
            console.log('El departamento no existe');
        }

        // let response = department[0].ciudades;

        // return response;
    }
 

}

module.exports = CityService;