<h1 align="center">Linux Explained</h1>
<p align="center">Construye tu linux</p>

## Contribuir

### Dependencias

- Node.js
- npm/yarn
- 11ty

```bash
npm install @11ty/eleventy --save-dev
```

### Pasos para desarrollar

1. Clonar el repositorio
2. Instalar dependencias
3. Realizar los cambios
4. Una vez que no se va a realizar más cambio, hacer push a la rama principal para que se despliegue

### Advertencias

- Si se va a referenciar un archivo por ruta absoluta, usar {{ basePath }} antes de la ruta. Ejemplo: {{ basePath }}/style.css
- Usar una buena estructura de carpetas dentro de la carpeta `src/content`
- Puedes tener un servidor local para 11ty con:

```bash
npx @11ty/eleventy --serve
```

### Estructura del proyecto

```
├── src/                 # Contiene los archivos fuente del proyecto
│   ├── _includes/       # Plantillas para las páginas
│   ├── content/         # Markdown con las secciones del sitio
│   ├── img/             # Archivos de imagen
│   ├── styles/          # Archivos CSS personalizados
│   └── js/              # Archivos JS 
├── .eleventy.js         # Configuración principal de 11ty
├── package.json         # Dependencias y scripts
└── README.md            # Este archivo
```

## Licencia

Este proyecto está licenciado bajo la [Licencia Pública General de GNU v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

Esto significa que eres libre de:
- **Usar** el proyecto para cualquier propósito.
- **Estudiar y modificar** el código fuente.
- **Distribuir** copias del proyecto o tus modificaciones.

Sin embargo, cualquier trabajo derivado también debe ser licenciado bajo la misma licencia. Consulta el archivo LICENSE para más detalles.

