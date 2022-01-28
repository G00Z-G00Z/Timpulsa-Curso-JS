# Temario de kaboom según el tutorial

En [el tutorial de kaboomjs][webpage] aparece un tutorial muy importante con las siguientes funciones importantes:

- `kaboom()` : inicializa el contexto de kaboom
- `loadSprite(tag, file)` : trae una imagen
- `add()` : funcion para añadir algo a la pantalla. Las siguientes funciones pueden darles propiedades a los objetos que añades:
  - `sprite(tag)` : para añadir un sprite
  - `pos(num, num)` : para añadir algo en la pantalla
  - `outline()` : da una linea que le hace un contorno a la objeto
  - `area()` : hace que el objeto registre collisiones (por ejemplo, si es un fondo, no es necesario que se chequen las colisiones)
  - `body()` : hace que el objeto sea afectado por gravedad (acciones como .`isGrounded()`, .`jump()`, se vuelven disponibles)
  - `solid()` : esto hace que los objetos no lo puedan atravesar (funciona como una pared)
  - `color(num, num, num)` : da un color al objeto
  - `rect(width, height)` : agrega un rectangulo
  - `move(direction, speed)` : lo que hace es hacer que se empiece a mover en esa dirección (esto lo puedes definir después en base a otro tipo de funciones)
  - `origin(originTag)` : Cuando pones un objeto, su origen de coordenas está en la esquina superior izquierda. Lo que significa, que cuando quieres mover el elemento, se movera en base a su esquina. Puedes cambiar ese comportamiento (por ejemplo que el origen sea en el centro) con origin("center").
  - `"texto de tag"` : Le puedes agregar un texto, y este es un tag para el objeto. Cuando estes referenciandolo en otros lugares, puedes usar el tag para llamarlo. **Ejemplo:**
    ```javascript
    bean.onCollide("tree", () => {
      addKaboom(bean.pos);
      shake();
    });
    ```

![imagen explicando como se agregan las cosas](https://kaboomjs.com/site/doc/intro/comps.png)

- `onKeyPress(tag, function)` : función para que haga algo cuando presiones una tecla
  **Ejemplo con un objeto con la propiedad de `body()`**

```javascript
onKeyPress("space", () => {
  if (bean.isGrounded()) {
    bean.jump();
  }
});
```

- `loop(seconds, callback)` : puedes hacer un loop que pase cada tantos segundos. Puede servir para hacer un span de elementos, o puede ser para manejar el tiempo y ritmo del juego
- `wait(seconds)` : funcion que hace que el loop espere tantos segundos
- `scene(tag, callback)` : define una escena, para cambiar de estado. Recuerda que si defines escenas, hasta abajo del código tienes que poner que escena es primero. Adicionalmente, puedes pasarle argumentos entre escenas. Esto puede servir para pasar información, score, formato de nivel, etc
- `shake()` : hace un shake a la pantalla
- `onUpdate()` : función que corre en cada frame

```javascript
scene("game", () => {
  add([sprite("bean")]);
  go("lose", 5);
});

scene("lose", (score) => {
  add([text(`Game Over, your score is ${score}`)]);
});

go("game");
```

Adicionalmente, hay un [video][flappy_bird] de como hacer [Flappy Bird][flappy_bird] en kaboom, que entra muy en fondo de como se crea un videojuego en `kaboomjs`

> Se recomienda ampliamente visitar el tutorial, ya que está mucho mejor explicado.

[webpage]: https://kaboomjs.com/doc/intro
[flappy_bird]: https://www.youtube.com/watch?v=hgReGsh5xVU
