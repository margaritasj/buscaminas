# BUSCAMINAS

El juego de buscaminas funciona de la siguiente forma:

Se muestra una tabla donde se encuentran celdas vacías, con número o con minas. En caso de oprimir una mina entonces el juego termina, si se oprimen lugares sin minas (vacía o de número), el juego continúa.

![IMAGE](https://lh4.googleusercontent.com/c4jnMEV2CirXxh8CRzP1y6_VSqfPOLNQnTGyv2uKyPzEMfa42ztBClyMCigW7K3dJqNWacIJDjaj-kfVDFWtQbHySxNhSSRBPVnf2Q2SbHK3MUkWD0WMpsVyXeUAfrI11ya9heW5lng)

## Tips

Para esto deberás crear el tablero directamente en el archivo html y la funcionalidad se desarrollará mediante uso del DOM.

## Preguntas guía

- ¿Cómo puedes estructurar el tablero en el navegador? (pista: HTML)
- ¿Cómo puedes diferenciar una bomba de un número o de una celda vacía en el HTML?
- ¿Qué evento necesitas para captar el click del usuario?
- Una vez que el usuario haga click sobre la "celda", ¿qué tiene que pasar?
- ¿Cómo podemos hacer que elementos aparezcan y desaparezcan en el HTML?
- ¿Cómo hacemos para que ya no se puedan ingresar clicks del usuario? (pista: removeEventListener)

## Requerimientos

- Mostrar una tabla de 4 x 4 (con bombas, celdas vacías y números en posición fija)
- Al dar clic en una celda vacía, cambiar de color de la celda.
- Al dar clic en una celda con bomba, terminar el juego (no debo poder clickear más celdas) y mostrar mensaje: “Esto ha explotado”
- Al dar clic en una celda con un número, mostrar el número que tiene.
- Crear un botón Reiniciar que comience de nuevo el juego.

##### Puntos extra

- Al dar clic fuera de la tabla mostrar mensaje: “Sigue jugando”. (inner html o alert).
- Preguntar el tamaño de la tabla al usar.
- Preguntar el nivel de dificultad deseada (fácil o difícil y significa el número de bombas que tendrá)
- Llenar de manera automática todo (bombas, celdas vacías y números)

## Entregables

Debes entregar **un repositorio de GitHub** que contenga:

1. Carpeta **`assets`** que contenga el otros archivos utiles para la página web .
2. Carpeta **`css`** que contenga el archivo **`style.css`** .
    - Archivo **`style.css`** con los estilos que se aplican al HTML.
3. Carpeta **`js`** que contenga el archivo **`app.js`** .
    - Archivo **`app.js`** con el **código** de tu solución.
4. Archivo **`index.html`** vinculado a **`style.css`** y **`app.js`**.
5. Archivo **`README.md`** que explique el programa.