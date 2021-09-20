## Entrega Modulo 3 Opcional Lemoncode Master Frontend

### Prerequisitos:

- Node v14
- Para abrir los artefactos en modo produccion, usar el paquete `live-server` de npm en la carpeta `dist`. Esto es debido a que al importar el archivo JSX como `type="module"` para Parcel, se nos aplica CORS, por lo que no podemos abrir el archivo html desde el sistema de ficheros en el navegador

Comandos:

### Webpack

- `npm run build`: Compila la aplicación en modo producción, guardando los artefactos en la carpeta dist.
- `npm start`: Compila la aplicación en modo desarrollo y lanza la aplicación en el navegador, haciendo uso de webpack-dev-server para la detección de cambios de código automática.
- `npm run bundle-analyzer`: Muestra un grafico representando todos los bundles y dependencias de la aplicación, representando el tamaño de cada uno de éstos.

### Parcel

- `npm run build-parcel`: Compila la aplicación en modo producción, guardando los artefactos en la carpeta dist.
- `npm runn start-parcel`: Compila la aplicación en modo desarrollo y lanza la aplicación en el navegador, haciendo uso de webpack-dev-server para la detección de cambios de código automática.
- `npm run bundle-analyzer-parcel`: Muestra un grafico representando todos los bundles y dependencias de la aplicación, representando el tamaño de cada uno de éstos.
