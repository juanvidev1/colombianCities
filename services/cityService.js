// const citiesOfColombia = require("../colombiaCities.json");
const CityNormalizer = require("./cityNormalizer");
const Client = require("../Client");

class CityService {
  constructor() {
    this.cities;
    this.cityNormalizer = new CityNormalizer();
    this.client = new Client("https://www.datos.gov.co/");
  }

  async getCities(limit, offset) {
    let path = "";
    if (limit && offset) {
      path = `resource/xdk5-pm3f.json?$limit=${limit}&$offset=${offset}`;
    } else if (limit) {
      path = `resource/xdk5-pm3f.json?$limit=${limit}`;
    } else if (offset) {
      path = `resource/xdk5-pm3f.json?$offset=${offset}`;
    } else {
      path = `resource/xdk5-pm3f.json?$limit=1350`;
    }
    this.cities = await this.client.getCities(path);
    return this.cities;
  }

  async findCitiesByName(cityName) {
    // console.log(cityName);
    this.cities = await this.getCities();
    const normalizedCityName = this.cityNormalizer.normalizeCityName(cityName);
    // console.log(cityName);
    const matchingCities = [];
    this.cities.forEach((city) => {
      const normalizedCity = this.cityNormalizer.normalizeCityName(
        city.municipio
      );
      if (normalizedCity.includes(normalizedCityName)) {
        matchingCities.push({
          province: city.departamento,
          city: city.municipio,
          code: city.c_digo_dane_del_municipio.replaceAll(".", ""),
        });
      }
    });

    console.log(matchingCities);
    const result = {
      data: matchingCities,
    };

    return result;
  }

  async getCitiesByProvince(provinceName) {
    this.cities = await this.getCities(1350);
    const matchingCities = this.cities.filter((item) =>
      this.cityNormalizer
        .normalizeCityName(item.departamento)
        .includes(this.cityNormalizer.normalizeCityName(provinceName))
    );

    const cities = matchingCities.map((item) => {
      const cityName = item.municipio;
      const cityCode = item.c_digo_dane_del_municipio.replaceAll(".", "");
      const cityProvinceName = item.departamento;
      return {
        name: cityName,
        code: cityCode,
        province: cityProvinceName,
        value: this.cityNormalizer.normalizeCityName(cityName),
      };
    });

    return cities;
  }

  async getProvinces() {
    this.cities = await this.getCities();
    // console.log(this.cities);
    const provinces = this.cities.map((province) => {
      const dptoName = province.departamento;
      const dptoCode = province.c_digo_dane_del_departamento;
      return {
        name: dptoName,
        code: dptoCode,
      };
    });
    const uniqueProvinces = Array.from(
      new Set(provinces.map(JSON.stringify))
    ).map(JSON.parse);

    const finalProvinces = uniqueProvinces.map((province, idx) => {
      return {
        id: idx + 1,
        name: province.name,
        value: this.cityNormalizer.normalizeCityName(province.name),
        code: province.code,
      };
    });

    return finalProvinces;
  }
}

module.exports = CityService;
