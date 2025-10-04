# 🇨🇴 Colombia Cities API & Data

![node version](https://img.shields.io/badge/node_version-16.17.1-green) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**API y paquete npm abiertos, profesionales y de uso continuo para toda la comunidad.**

Accede a la base de datos oficial de **departamentos**, **municipios**, **códigos DANE** y **provincias** de Colombia. Ideal para integraciones en sistemas, aplicaciones, bots, análisis de datos y cualquier proyecto que requiera información geográfica confiable y actualizada.

---

## ✨ Características principales

- Acceso libre y sin registro
- Datos oficiales y actualizados
- 33 departamentos y 1,119 municipios
- Códigos DANE y provincias organizadas
- API REST robusta y documentada
- Listo para producción y uso masivo
- Colaborativo y open source

---

## 📦 Instalación y uso como paquete npm

Instala el paquete:
```bash
npm install colombia-cities
```

Ejemplo de uso:
```js
const { getDepartments, getCitiesByDepartment, findCityByCode, searchCities } = require('colombia-cities');

console.log(getDepartments());
console.log(getCitiesByDepartment('Antioquia'));
console.log(findCityByCode('05001'));
console.log(searchCities('medellin'));
```

Esto permite consumir los datos sin depender de la API web, ideal para proyectos offline, scripts, bots o integración directa.

---

## 🚀 Instalación y uso local de la API

Clona el repositorio e instala dependencias:
```bash
git clone https://github.com/juanvidev1/colombianCities.git
cd colombianCities
npm install
```

Ejecuta el servidor:
```bash
npm start
# El servidor corre en puerto 5000 por defecto
```

Configura el puerto (opcional):
```bash
# Crea un archivo .env
PORT=3000
```

---

## 🌐 API REST

### Endpoint base
```
http://localhost:5000/api/v1/cities
```

### Buscar por nombre de ciudad
```
GET /api/v1/cities?cityName=medellin
```

### Buscar por departamento
```
GET /api/v1/cities?department=antioquia
```

### Buscar por provincia
```
GET /api/v1/cities?provincia=oriente
```

### Ejemplo de respuesta
```json
{
  "data": [
    { "department": "Antioquia", "city": "Medellín", "code": "05001", "provincia": "Valle Del Aburra" }
  ]
}
```

---

## 📁 Archivos de datos

- `colombia_completa.json` ⭐ (Recomendado): Datos completos con metadata, departamentos, municipios, códigos DANE y provincias.
- `colombia_con_codigos.json`: Versión simplificada optimizada para aplicaciones web y móviles.

Consulta la documentación completa en [`DOCUMENTACION_COMPLETA.md`](./DOCUMENTACION_COMPLETA.md).

---

## 📂 Estructura del proyecto

```
colombianCities/
├── api-docs/                 # Documentación de la API
├── routes/                   # Rutas de la API REST
├── services/                 # Lógica de negocio
├── colombia_completa.json    # Datos completos con códigos
├── colombia_con_codigos.json # Versión simplificada
├── DOCUMENTACION_COMPLETA.md # Documentación detallada
├── index.js                  # Servidor principal
└── package.json              # Dependencias
```

---

## 🤝 Contribuciones

Este proyecto es open source y agradece cualquier contribución:

1. Haz un fork del repositorio
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`)
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para más detalles.

---

*API y datos oficiales de Colombia, listos para uso profesional y continuo. Actualizado Octubre 2025.* 🇨🇴

Prueba este servicio web y solo envíame un correo a juanvidev1@gmail.com si deseas colaborar para agregar más países y ciudades o si tienes algún consejo para mejorar este servicio.

Eso es todo por ahora.

¡Gracias!


<p align=center>
    💙 🦸‍♂️ 💛💛💙❤️
</p>