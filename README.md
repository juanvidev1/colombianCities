# 🇨🇴 Colombian Cities API & Data

![node version](https://img.shields.io/badge/node_version-16.17.1-green) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

Servicio web y base de datos completa de **departamentos**, **municipios**, **códigos DANE** y **provincias** de Colombia. Este proyecto proporciona datos actualizados y una API REST para desarrolladores que necesiten información geográfica colombiana.

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

### `colombia_completa.json` ⭐ (Recomendado)
Archivo completo con metadata, departamentos, municipios, códigos DANE y provincias organizadas.

### `colombia_con_codigos.json`  
Versión simplificada optimizada para aplicaciones web y móviles.

Ver documentación completa en: [`DOCUMENTACION_COMPLETA.md`](./DOCUMENTACION_COMPLETA.md)

## 🌐 API REST

### Endpoint Base
```
http://localhost:5000/api/v1/cities
```

### Buscar por Nombre de Ciudad
```bash
GET /api/v1/cities?cityName=medellin

# Respuesta:
{
  "data": [
    {
      "province": "Antioquia",
      "city": "Medellín"
    }
  ]
}
```

### Buscar por Departamento
```bash
GET /api/v1/cities?provinceName=antioquia

# Respuesta:
{
  "data": [
    "Medellín",
    "Bello",
    "Itagüí",
    "..."
  ]
}
```

## 💡 Ejemplos de Uso

### JavaScript/Node.js
```javascript
// Cargar datos completos
const colombiaData = require('./colombia_completa.json');

// Buscar municipio por código DANE
const medellin = colombiaData.departamentos
  .flatMap(d => d.municipios)
  .find(m => m.codigo === '05001');

console.log(medellin);
// { nombre: "Medellín", codigo: "05001", provincia: "Valle Del Aburra" }
```

### Consulta API
```javascript
fetch('http://localhost:5000/api/v1/cities?cityName=bogota')
  .then(response => response.json())
  .then(data => console.log(data));
```

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

Este es un proyecto open source. Las contribuciones son bienvenidas:

1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para más detalles.

---

*Datos oficiales de Colombia actualizados - Octubre 2025* 🇨🇴

Try this Web Service and just send me an email to juanvidev1@gmail.com if you want to collaborate to add more countries and cities or if you have some advices to make better this WS.

That's all for now.

Thank you!


<p align=center>
    💙 🦸‍♂️ 💛💛💙❤️
</p>