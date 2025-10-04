Po# 🇨🇴 Colombian Cities API & Data

![node version](https://img.shields.io/badge/node_version-16.17.1-green) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**API abierta, profesional y de uso continuo para toda la comunidad.**

Esta API provee acceso libre y permanente a la base de datos oficial de **departamentos**, **municipios**, **códigos DANE** y **provincias** de Colombia. Pensada para integraciones en sistemas, apps, bots, análisis de datos y cualquier proyecto que requiera información geográfica confiable y actualizada.

---

## ✨ Características principales

- **Acceso libre y sin registro**
- **Datos oficiales y actualizados**
- **33 departamentos y 1,119 municipios**
- **Códigos DANE y provincias organizadas**
- **API REST robusta y documentada**
- **Listo para producción y uso masivo**
- **Colaborativo y open source**

---

## 📊 Datos Incluidos

- ✅ **33 departamentos** completos
- ✅ **1,119 municipios** con códigos DANE oficiales
- ✅ **Provincias organizadas** por departamento
- ✅ **API REST** para consultas dinámicas
- ✅ **Archivos JSON** listos para usar

## 🚀 Instalación y Uso

### Clonar e Instalar
```bash
git clone https://github.com/juanvidev1/colombianCities.git
cd colombianCities
npm install
```

### Ejecutar el Servidor
```bash
npm start
# El servidor corre en puerto 5000 por defecto
```

### Configurar Puerto (Opcional)
```bash
# Crear archivo .env
PORT=3000
```

## 📁 Archivos de Datos

- `colombia_completa.json` ⭐ (Recomendado): Datos completos con metadata, departamentos, municipios, códigos DANE y provincias.
- `colombia_con_codigos.json`: Versión simplificada optimizada para aplicaciones web y móviles.

Ver documentación completa en: [`DOCUMENTACION_COMPLETA.md`](./DOCUMENTACION_COMPLETA.md)

## 🌐 API REST

### Endpoint Base
```
http://localhost:5000/api/v1/cities
```

### Buscar por Nombre de Ciudad
```bash
GET /api/v1/cities?cityName=medellin
```

### Buscar por Departamento
```bash
GET /api/v1/cities?provinceName=antioquia
```

### Ejemplo de Respuesta
```json
{
  "data": [
    { "province": "Antioquia", "city": "Medellín", "code": "05001", "provincia": "Valle Del Aburra" },
    ...
  ]
}
```

### Ejemplo de Uso en Node.js
```js
const colombiaData = require('./colombia_completa.json');
const medellin = colombiaData.departamentos
  .flatMap(d => d.municipios)
  .find(m => m.codigo === '05001');
console.log(medellin);
// { nombre: "Medellín", codigo: "05001", provincia: "Valle Del Aburra" }
```

## 📦 Uso como paquete npm

Puedes instalar y usar los datos y utilidades directamente en tu proyecto Node.js:

### Instalación local (desarrollo)
```bash
npm install colombiacitiesapi
```

### Ejemplo de uso
```js
const { getDepartments, getCitiesByDepartment, findCityByCode, searchCities } = require('colombiacitiesapi');

// Listar departamentos
console.log(getDepartments());

// Buscar municipios de un departamento
console.log(getCitiesByDepartment('Antioquia'));

// Buscar municipio por código DANE
console.log(findCityByCode('05001'));

// Buscar municipios por nombre
console.log(searchCities('medellin'));
```

Esto permite consumir los datos sin depender de la API web, ideal para proyectos offline, scripts, bots o integración directa.

## 📂 Estructura del Proyecto

```
colombianCities/
├── 📁 api-docs/           # Documentación de la API
├── 📁 routes/             # Rutas de la API REST
├── 📁 services/           # Lógica de negocio
├── 📄 colombia_completa.json    ⭐ # Datos completos con códigos
├── 📄 colombia_con_codigos.json   # Versión simplificada
├── 📄 DOCUMENTACION_COMPLETA.md   # Documentación detallada
├── 📄 index.js            # Servidor principal
└── 📄 package.json        # Dependencias
```

## 🤝 Contribuciones

Este proyecto es open source y agradece cualquier contribución:

1. Haz un fork del repositorio
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`)
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para más detalles.

---

*API y datos oficiales de Colombia, listos para uso profesional y continuo. Actualizado Octubre 2025.* 🇨🇴

Try this Web Service and just send me an email to juanvidev1@gmail.com if you want to collaborate to add more countries and cities or if you have some advices to make better this WS.

That's all for now.

Thank you!


<p align=center>
    💙 🦸‍♂️ 💛💛💙❤️
</p>