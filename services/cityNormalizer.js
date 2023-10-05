
class CityNormalizer {
    normalizeCityNames(colombiaCitiesList) {
        return colombiaCitiesList.map(department => ({
            id: department.id,
            department: department.departmento,
            cities: department.ciudades.map(city => this.normalizeCityName(city))
        }));
    }

    normalizeCityName(cityName) {
        return cityName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ñ/g, "n")
        .toLowerCase();
    }
}

module.exports = CityNormalizer;