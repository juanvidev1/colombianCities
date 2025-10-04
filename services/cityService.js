const colombiaData = require("../colombia_completa.json");
// Eliminado CityNormalizer, ya no es necesario
const Client = require("../Client");

class CityService {
  constructor() {}


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


  // Normaliza para búsqueda insensible a tildes y mayúsculas
  normalize(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  async findCitiesByName(cityName) {
    const term = this.normalize(cityName);
    const allCities = this.getAllCities();
    const matchingCities = allCities.filter(city =>
      this.normalize(city.municipio).includes(term)
    ).map(city => ({
      province: city.departamento,
      city: city.municipio,
      code: city.codigo,
      provincia: city.provincia
    }));
    return { data: matchingCities };
  }


  async getCitiesByProvince(provinceName) {
    const term = this.normalize(provinceName);
    const allCities = this.getAllCities();
    const matchingCities = allCities.filter(city =>
      this.normalize(city.departamento).includes(term)
    ).map(city => ({
      name: city.municipio,
      code: city.codigo,
      province: city.departamento,
      provincia: city.provincia,
      value: this.normalize(city.municipio)
    }));
    return matchingCities;
  }


  async getProvinces() {
    // Devuelve los departamentos únicos
    return colombiaData.departamentos.map((dept, idx) => ({
      id: dept.id,
      name: dept.nombre,
      value: this.normalize(dept.nombre),
      code: dept.id // No hay código DANE de departamento en el JSON, se puede agregar si es necesario
    }));
  }
}

module.exports = CityService;
