[Ir a página principal][pagina_principal]

# 💥Kaboom JS 💥

Para enseñar el desarrollo de videojuegos en Js, usaremos la librería de **kaboom js**. Esta es una librería para principiantes para hacer videojuegos en js. Es ligera y sencilla.

- Para más información, [documentación de Kaboom js][kaboom.com]
- Para ver el temario del curso [Temario del curso](Temario.md)
- Para vel el [e-book de kaboomjs][ebook] con ejemplos de videojuegos

> Se recomienda ampliamente hacer el [tutorial en kaboomjs.com][tutorial_kaboom] en vez de leer el temario. Ya que este entra en detalle y tiene un ejemplo mucho más completo. Sin embargo, se hizo [un resumen](Tutorial.md) en este repositorio como apoyo.

## **¿Cómo desarrollar?**

### Para Replit

En [replit](https://replit.com/), viene la opción de empezar un proyecto con `kaboomjs`. Esta es **la mejor opción** para este curso, ya que es un IDE online y gratis. Adicionalmente, como ya viene todo configurado, no se necesita hacer configuraciones extras.

### Para VsCode (No recomendado para este curso)

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
add([text("oh hi", 32), pos(100, 100)]);
```

En el `index.html`

```html
...
<script src="https://unpkg.com/kaboom@next/dist/kaboom.js"></script>
<script src="./index.js" type="module"></script>
...
```

[pagina_principal]: ../README.md
[kaboom.com]: https://kaboomjs.com/
[tutorial_kaboom]: https://kaboomjs.com/doc/intro
[ebook]: https://makejsgames.com/
