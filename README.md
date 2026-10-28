# Pizzería Mamma Mía – Hito 2

Segunda etapa del proyecto **Pizzería Mamma Mía**, desarrollado con **React** como parte del módulo de React. En este hito se agregan los formularios de **Register** y **Login**, aplicando **estado de los componentes (`useState`)** y **eventos** (`onChange`, `onSubmit`, `onClick`). Se mantiene todo lo construido en el Hito 1.

## Demo en línea
https://hito2-react-pizzeria-mamma-mia.vercel.app/

## Descripción

La aplicación muestra una página de inicio de una pizzería con:

- Una barra de navegación con botones de sesión y el total de la compra.
- Un encabezado con imagen de fondo, título y descripción.
- Tres tarjetas de pizzas generadas a partir de un mismo componente.
- Un pie de página con los derechos reservados.

Por ahora los botones no tienen funcionalidad: el objetivo de este hito es construir y organizar la interfaz.

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- JavaScript (ES6+), JSX y CSS

## Estructura del proyecto

```
src/
├── assets/
│   └── img/              → imágenes (fondo del Header y pizzas)
├── components/
│   ├── CardPizza.jsx     → tarjeta reutilizable de una pizza
│   ├── Footer.jsx        → pie de página
│   ├── Header.jsx        → encabezado con imagen de fondo
│   ├── Home.jsx          → página principal (Header + CardPizza)
│   └── Navbar.jsx        → barra de navegación
├── utils/
│   └── formatNumber.js   → función para formatear números (separador de miles)
├── App.css               → estilos propios de la aplicación
├── App.jsx               → componente raíz
├── index.css
└── main.jsx              → punto de entrada de la aplicación
```

## Novedades del Hito 2

### `Register`
Formulario con **Email**, **Contraseña** y **Confirmar contraseña**. Al enviar valida que:

1. Ningún campo esté vacío.
2. La contraseña tenga al menos 6 caracteres.
3. La contraseña y su confirmación sean iguales.

Si algo falla muestra un mensaje de error; si todo está correcto, un mensaje de éxito.

### `Login`
Formulario con **Email** y **Contraseña**. Valida que no haya campos vacíos y que la contraseña tenga al menos 6 caracteres, mostrando mensaje de error o de éxito.

### `App` y `Navbar`
`App` guarda en un estado (`vista`) qué pantalla se muestra (`home`, `login` o `register`) y los botones del `Navbar` lo cambian mediante el evento `onClick`.

### Conceptos aplicados
`useState`, inputs controlados (`value` + `onChange`), `onSubmit` con `e.preventDefault()`, renderizado condicional (`&&`) y paso de funciones por props.

## Componentes del Hito 1

### `App`
Componente raíz. Muestra `Navbar`, `Home` y `Footer`, en ese orden.

### `Navbar`
Barra de navegación con Bootstrap. Contiene dos variables simuladas:

- `total`: número que representa el total de la compra. Se muestra con separador de miles (por ejemplo `25.000`).
- `token`: booleano que simula si el usuario inició sesión. Se usa un **operador ternario** para mostrar:
  - `token = true` → botones **Profile** y **Logout**
  - `token = false` → botones **Login** y **Register**

Los botones **Home** y **Total** se muestran siempre, sin importar el valor de `token`.

### `Home`
Página principal. Incluye el componente `Header` y utiliza `CardPizza` tres veces, pasándole los datos de cada pizza mediante props. Las tarjetas se distribuyen con la grilla de Bootstrap (tres por fila en pantallas medianas y grandes, una por fila en pantallas pequeñas).

### `Header`
Muestra un título y una descripción sobre una imagen de fondo con una capa oscura semitransparente para que el texto se lea bien.

### `CardPizza`
Tarjeta reutilizable que recibe las siguientes **props**:

| Prop | Tipo | Descripción |
|---|---|---|
| `name` | string | Nombre de la pizza |
| `price` | number | Precio de la pizza |
| `ingredients` | array | Lista de ingredientes |
| `img` | string | Imagen de la pizza |

Muestra la imagen, el nombre, los ingredientes, el precio formateado y los botones **Ver Más** y **Añadir** (sin funcionalidad por ahora).

### `Footer`
Pie de página con el texto: *© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados*.

## Conceptos de React aplicados

- Creación de **componentes funcionales** y su composición (componentes dentro de componentes).
- **JSX** y uso de expresiones de JavaScript con `{ }`.
- Paso de datos entre componentes mediante **props** y desestructuración.
- **Renderizado condicional** con operador ternario.
- Importación de **imágenes locales** como módulos.
- Estilos con **Bootstrap** y CSS propio.
- Organización del código en carpetas (`components`, `utils`, `assets`).

## Instalación y uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Sahadia88/hito2_REACT-pizzeria_mamma_mia.git
   ```

2. Entra a la carpeta del proyecto:

   ```bash
   cd hito2_REACT-pizzeria_mamma_mia

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Previsualiza la versión de producción |
| `npm run lint` | Revisa el código con ESLint |
