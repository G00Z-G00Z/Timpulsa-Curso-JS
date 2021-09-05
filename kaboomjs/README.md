# 💥Kaboom JS 💥

Para enseñar el desarrollo de videojuegos en Js, usaremos la librería de **kaboom js**. Esta es una librería para principiantes para hacer videojuegos en js. Es ligera y sencilla.

Para más información, [documentación de Kaboom js](https://kaboomjs.com/https://)
Para ver el temario del curso [Temario del curso](Temario.md)

## **¿Cómo desarrollar?**

### Para VsCode

Necesitas hacer una carpeta con la siguiente estructura:

```
videojuego
|   index.html
|   index.js
└── assets
└── sprites
|   |   sprite1.png
|   |   sprite2.png
|   |   ...
└── sounds
|   |   sound1.mp3
|   |   sound2.mp3
|   |   ...
...


```

En `index.js`

```javascript
// initialize kaboom context
kaboom();

// add a text of size 32 at position (100, 100)
add([
    text("oh hi", 32),
    pos(100, 100),
]);
```

En el `index.html`

```html
...
<script src="https://unpkg.com/kaboom@next/dist/kaboom.js"></script>
<script src="./index.js" type="module" ></script>
...
```

---

### Para Replit

En Replit, viene la opción de empezar un proyecto con Kaboom (Elegir la opción de beta)
