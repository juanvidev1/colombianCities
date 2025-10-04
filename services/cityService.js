const colombiaData = require("../colombia_completa.json");
// const CityNormalizer = require("./cityNormalizer");
const Client = require("../Client");

class CityService {
  constructor() {
    // this.cityNormalizer = new CityNormalizer();
    // No se necesita Client ni this.cities
  }

  normalizeName(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  }


  // Devuelve todas las ciudades como un array plano de objetos {departamento, municipio, codigo, provincia}
  getAllCities() {
    return colombiaData.departamentos.flatMap(dept =>
      dept.municipios.map(mun => ({
        departamento: dept.nombre,
        municipio: mun.nombre,
        codigo: mun.codigo,
        provincia: mun.provincia
      }))
    );
  }


  async findCitiesByName(cityName) {
    const normalizedCityName = this.normalizeName(cityName);
    const allCities = this.getAllCities();
    const matchingCities = allCities.filter(city =>
      this.normalizeName(city.municipio).includes(normalizedCityName)
    ).map(city => ({
      province: city.departamento,
      name: city.municipio,
      code: city.codigo,
      provincia: city.provincia,
      value: this.normalizeName(city.municipio)
    }));
    return { data: matchingCities };
  }


  async getCitiesByProvince(provinceName) {
    const normalizedProvince = this.normalizeName(provinceName);
    const allCities = this.getAllCities();
    const matchingCities = allCities.filter(city =>
      this.normalizeName(city.departamento).includes(normalizedProvince)
    ).map(city => ({
      name: city.municipio,
      code: city.codigo,
      province: city.departamento,
      provincia: city.provincia,
      value: this.normalizeName(city.municipio)
    }));
    return matchingCities;
  }


  async getProvinces() {
    // Devuelve los departamentos únicos
    return colombiaData.departamentos.map((dept, idx) => ({
      id: dept.id,
      name: dept.nombre,
      value: this.normalizeName(dept.nombre),
      code: dept.codigo // No hay código DANE de departamento en el JSON, se puede agregar si es necesario
    }));
  }
}

module.exports = CityService;
