// Colombian Cities NPM package entry point
const colombiaData = require('../colombia_completa.json');

/**
 * Obtiene todos los departamentos
 */
function getDepartments() {
  return colombiaData.departamentos.map(d => ({
    id: d.id,
    nombre: d.nombre,
    totalMunicipios: d.totalMunicipios
  }));
}

/**
 * Obtiene todos los municipios de un departamento
 * @param {string} departamentoNombre
 */
function getCitiesByDepartment(departamentoNombre) {
  const dept = colombiaData.departamentos.find(d => d.nombre.toLowerCase() === departamentoNombre.toLowerCase());
  return dept ? dept.municipios : [];
}

/**
 * Busca municipio por código DANE
 * @param {string} codigo
 */
function findCityByCode(codigo) {
  for (const dept of colombiaData.departamentos) {
    const mun = dept.municipios.find(m => m.codigo === codigo);
    if (mun) {
      return { ...mun, departamento: dept.nombre };
    }
  }
  return null;
}

/**
 * Busca municipios por nombre (parcial, insensible a mayúsculas)
 * @param {string} nombre
 */
function searchCities(nombre) {
  const term = nombre.toLowerCase();
  return colombiaData.departamentos.flatMap(dept =>
    dept.municipios.filter(m => m.nombre.toLowerCase().includes(term)).map(m => ({
      ...m,
      departamento: dept.nombre
    }))
  );
}

module.exports = {
  getDepartments,
  getCitiesByDepartment,
  findCityByCode,
  searchCities
};
