# themoviedb-search

## https://themoviedb-search-all.up.railway.app/

## Valoraciones

El guardado de la información he decidido hacerlo con useContext prescindiendo de useReducer debido a que la mayoría de los estados de la aplicación los voy a gestionar con React Query.

Para evitar problemas de rerenders provocados por React Context he decidido aislar cada estado global en lugar de tener un único Context para todos ellos, en caso de haber tenido que getionar una cantidad mayor de estos estados, habría optado por otra solución.

Para el testing he decidido usar React Testing Library cambiando su test runner por defecto de Jest a Vitest.

Los test que he realizado los he hecho para testear funcionalidades básicas por página (ruta), me hubiera gustado hacer tests más específicos sobre funcionalidades secundarias, otros componentes o incluso algún hook de forma aislada.

Para la ejecución de los tests he decidico utilizar un componente específico llamado PageWrapper para poder montar solo la página que realmente quiero testear y evitar tener que renderizar la App entera.

También me hubiera gustado tener un mayor control sobre errores y excepciones.

En el formulario para añadir la valoración de una película, habría estado bien controlar la obtención de valores, eventos sobre inputs, validaciones, etc. Mediante el uso de algún custom hook o alguna librería para la gestión de formularios como React Hook Form o Formik.

Haber entrado más a fondo sobre la customización del tema de Mantine y la configuración de React Query para tratar cosas como el refetching, etc.

Debería haber sido más estricto a la hora de definir types o interfaces y así haber evitado tener que utilizar cosas como el optional chaining para el acceso a esos valores y propiedades.

## Instalación

Añadir la variable de entorno VITE_TMDB_API_KEY con la API KEY de https://api.themoviedb.org

Lanzar la aplicación en modo desarrollo con el comando npm run dev
