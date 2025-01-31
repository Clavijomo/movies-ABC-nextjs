# Movies ABC

Movies ABC es una aplicación web para explorar y buscar películas utilizando la API de TMDB. La aplicación permite a los usuarios ver películas populares, mejor calificadas, en cartelera y próximas, así como buscar películas específicas y agregar películas a sus favoritos.

## Características

- Ver películas populares, mejor calificadas, en cartelera y próximas.
- Seleccionar diferentes categorías de las películas
- Buscar películas por título.
- Ver detalles de una película, incluyendo recomendaciones relacionadas.
- Agregar y eliminar películas de la lista de favoritos.
- Diseño responsivo y optimizado para dispositivos móviles.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web.
- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- [TMDB API](https://www.themoviedb.org/documentation/api) - API para obtener información sobre películas.
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript.
- [CSS Modules](https://github.com/css-modules/css-modules) - Técnica para modularizar y encapsular CSS.

## Instalación y configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/movies-abc.git
   cd movies-abc

2. Instala dependencias:
    ```bash
    npm install
    # o
    yarn install
    # o
    bun install

3. Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    # o
    yarn dev
    # o
    bun dev

### Estructura del proyecto
La nomenclatura y estructura del proyecto está organizado según Documentación Oficial de Next.js para enrutador, páginas, vistas y más.

```
├── app
│   ├── components                          ### Componentes
│   │   ├── shared                          ### Componentes que se reutilizan en toda la app
│   │   │   ├── Header.tsx
│   │   │   ├── SideMenu.tsx
│   │   │   └── ...
│   ├── home                                ### Punto de entrada de la app y alojamiento de todas las vistas, routers
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── _MovieDetail.tsx
│   │   └── ...  
│   ├── hooks                                ### Hooks personalizados para seperación de lógica, reutilización y modularización
│   │   └── useFetchingMovies.ts
│   ├── provider                            ### Estados Globales de la App.
│   │   ├── CategorizedMoviesContext.tsx
│   │   ├── FavoritesContext.tsx
│   │   ├── SearchContext.tsx
│   │   └── ...
│   ├── styles                              ### Hoja de estilos de la App (Mediaquery)
│   │   ├── header.css
│   │   ├── home.css
│   │   └── ...
│   ├── api                        ### Alojamiento de las Request y configuración del Cliente tmdb
│   │   ├── api.ts
│   │   └── tmdbClient.ts
├── .env.local                              ### Variables de entorno
├── package.json
```

### API Requests
Las solicitudes a la API de TMDB están centralizadas en el archivo ```API.ts``` dentro de la carpeta ```/api```. Este archivo contiene funciones que realizan solicitudes HTTP a diferentes endopoints de la API de TMDB utilizando un cliente HTTP previamente configurado en ```tmdbClient.ts```

- ##### getMovieDetails.
    Obtiene los detalles de una película por su ID.
- ##### getRecommendations
    Obtiene recomendaciones por películas basadas en una película específica
- ##### searchMovies
    Busca películas por el título
    

### Recursos adicionales
##### Nextjs 
https://nextjs.org/docs

##### Documentación Oficial de TMDB
https://developer.themoviedb.org/docs/getting-started

### Créditos
Este proyecto y aplicativo fue realizado por Jonathan Clavijo, Desarrollador Frontend. Su uso es para fines demostrativos de una prueba técnica.

Fecha de realización: ```viernes 31 de enero de 2025```