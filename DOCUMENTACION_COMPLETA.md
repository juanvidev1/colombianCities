# 🇨🇴 Colombia - Departamentos, Municipios, Códigos y Provincias

## 📁 Archivos JSON Completos (CON CÓDIGOS Y PROVINCIAS)

### ⭐ **ARCHIVOS PRINCIPALES RECOMENDADOS**

1. **`colombia_completa.json`** 🎯 **(MÁS COMPLETO)**
   - Incluye **códigos de municipio** y **provincias**
   - Estructura completa con metadata
   - 33 departamentos, 1,119 municipios
   - Cada municipio tiene: nombre, código DANE, provincia

2. **`colombia_con_codigos.json`** 🎯 **(VERSIÓN SIMPLIFICADA CON CÓDIGOS)**
   - Versión más limpia con códigos y provincias
   - Estructura optimizada para aplicaciones
   - Incluye toda la información esencial

## 📊 Estructura de Datos Actualizada

### Archivo Completo (`colombia_completa.json`)
```json
{
  "metadata": {
    "totalDepartamentos": 33,
    "totalMunicipios": 1119,
    "fechaProcesamiento": "2025-10-04T03:56:43.579Z",
    "descripcion": "Departamentos, municipios, códigos y provincias de Colombia",
    "fuentes": ["Tabla Municipios-Tabla 1.csv", "Hoja1-Tabla 1.csv"]
  },
  "departamentos": [
    {
      "id": 0,
      "nombre": "Amazonas",
      "totalMunicipios": 11,
      "municipios": [
        {
          "nombre": "El Encanto",
          "codigo": "91263",
          "provincia": "Amazonas"
        }
      ],
      "provincias": [
        {
          "nombre": "Amazonas",
          "totalMunicipios": 11,
          "municipios": [
            {
              "nombre": "El Encanto",
              "codigo": "91263"
            }
          ]
        }
      ]
    }
  ]
}
```

### Archivo Simplificado (`colombia_con_codigos.json`)
```json
[
  {
    "id": 0,
    "departamento": "Amazonas",
    "totalMunicipios": 11,
    "municipios": [
      {
        "nombre": "El Encanto",
        "codigo": "91263",
        "provincia": "Amazonas"
      }
    ],
    "provincias": [
      {
        "nombre": "Amazonas",
        "municipios": [
          {
            "nombre": "El Encanto",
            "codigo": "91263"
          }
        ]
      }
    ]
  }
]
```

## 🏛️ Información por Departamento (con Provincias)

| Departamento | Municipios | Provincias | Ejemplos de Códigos |
|--------------|------------|------------|-------------------|
| **Antioquia** | 125 | 9 | Medellín (05001), Bello (05088) |
| **Cundinamarca** | 116 | 15 | Soacha (25754), Girardot (25307) |
| **Boyacá** | 123 | 13 | Tunja (15001), Duitama (15238) |
| **Santander** | 87 | 6 | Bucaramanga (68001), Girón (68307) |
| **Bolívar** | 45 | 6 | Cartagena (13001), Magangué (13430) |
| **Valle del Cauca** | 42 | 4 | Cali (76001), Palmira (76520) |
| **Nariño** | 64 | 3 | Pasto (52001), Tumaco (52835) |
| **Cauca** | 41 | 3 | Popayán (19001), Santander de Quilichao (19698) |

## 🎯 Casos de Uso

### 1. Buscar municipio por código
```javascript
const data = require('./colombia_completa.json');

function buscarMunicipioPorCodigo(codigo) {
  for (const dept of data.departamentos) {
    const municipio = dept.municipios.find(m => m.codigo === codigo);
    if (municipio) {
      return {
        municipio: municipio.nombre,
        departamento: dept.nombre,
        provincia: municipio.provincia,
        codigo: municipio.codigo
      };
    }
  }
  return null;
}

// Ejemplo: buscarMunicipioPorCodigo("05001") -> Medellín, Antioquia
```

### 2. Obtener municipios por provincia
```javascript
function getMunicipiosPorProvincia(departamentoNombre, provinciaNombre) {
  const dept = data.departamentos.find(d => d.nombre === departamentoNombre);
  if (!dept) return [];
  
  const provincia = dept.provincias.find(p => p.nombre === provinciaNombre);
  return provincia ? provincia.municipios : [];
}
```

### 3. Validar código DANE
```javascript
function validarCodigoDane(codigo) {
  const codigos = data.departamentos
    .flatMap(d => d.municipios)
    .map(m => m.codigo);
  return codigos.includes(codigo);
}
```

## 📋 Códigos DANE

Los códigos DANE siguen el formato estándar colombiano:
- **2 primeros dígitos**: Código del departamento
- **3 últimos dígitos**: Código del municipio dentro del departamento
- **Ejemplo**: `05001` = Departamento 05 (Antioquia), Municipio 001 (Medellín)

### Algunos códigos importantes:
- **11001**: Bogotá D.C.
- **05001**: Medellín, Antioquia
- **76001**: Cali, Valle del Cauca
- **08001**: Barranquilla, Atlántico
- **68001**: Bucaramanga, Santander
- **13001**: Cartagena, Bolívar

## 🔧 Scripts Utilizados

- **`csv_to_json_complete.js`**: Procesador principal con códigos y provincias
- Fuentes: `Tabla Municipios-Tabla 1.csv` y `Hoja1-Tabla 1.csv`
- Total procesado: 1,119 municipios únicos

## ✅ Características de los Archivos

- ✅ **Códigos DANE completos** para todos los municipios
- ✅ **Provincias organizadas** por departamento  
- ✅ **Nombres formateados** correctamente
- ✅ **Sin duplicados** 
- ✅ **Ordenación alfabética** de departamentos y municipios
- ✅ **Metadata completa** con fechas y fuentes
- ✅ **Estructura optimizada** para desarrollo de software

---

*Datos oficiales de Colombia con códigos DANE y provincias - Actualizado Octubre 2025* 🇨🇴