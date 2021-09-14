# Temario de kaboom

Esta es la lista de conceptos y de funciones importantes en Kaboom js
Comoquiera toda la información necesaria está en la [documentación de Kaboom js](https://kaboomjs.com)

## Inicialización
- kaboom()
    ```javascript
    kaboom({
    width: 640, // width of canvas
    height: 480, // height of canvas
    canvas: document.getElementById("game"), // use custom canvas
    clearColor: [0, 0, 1, 1], // background color (default is a checker board background)
    fullscreen: true, // if fullscreen
    debug: false, // debug mode
    global : true, // Para que importen todas las funciones
    plugins: [ asepritePlugin, ], // load plugins
    });

    ```
## Loading assets
- loadRoot() : carga una raíz para todas las importanciones
- loadSprite(id: string, src: SpriteLoadSrc, conf?: SpriteLoadConf) : Es para cargar imagenes
- loadSound(id: string, src: string)

## Object related concepts
- add() : sirve para añadir un objeto al juego. Puedes añadir texto, imagenes, rectangulos, etc
  - Ejemplo: 
   ```javascript
    const player = add([
    // a 'sprite' component gives it the render ability
    sprite("froggy"),
    // a 'pos' component gives it a position
    pos(100, 100),
    // a 'body' component makes it fall and gives it jump()
    body(),
    // raw strings are tags
    "player",
    "killable",
    // custom fields are assigned directly to the returned obj ref
    {
        dir: vec2(-1, 0),
        dead: false,
        speed: 240,
    },
    ]);
   ```
    
- obj.action() : Le das una acción , que corre cada frame
- obj.is(tag : string) : Con esto puedes preguntar si un objeto tiene un certain tag
- obj.destroy() : destruye al referencia al objeto
- get(tag : string) : regresa un arreglo de elementos con el mismo tag
- every(tag : string, callback(obj)) : por cada objeto con el tag, hace algo   
- tags : son string que le da un identificador a un objeto

## Components
- pos : posicion x, y
- scale : factor de escalamiento
- color : color rgb
- text : texto
- rect : rectangulo
- origin : le pone un origen al objeto (por ejemplo, si quieres empezar a contar desde el centro, o desde la esquina etc)
- area : Le agrega un area rectangular a un objeto, para que pueda detectar colosiones
- solid : Hace que el objeto, no se pueda atravesar, si el objeto tiene area y se le pone un pushallout. Ejemplo: 
    ```javascript
    const obj = add([
    sprite("wall"),
    solid(),
    ]);

    // need to call pushOutAll() (provided by 'area') to make sure they cannot move past solid objs
    player.action(() => {
        player.pushOutAll();
    });
    ```
- body: Hace que el componente sea afectado por la gravedad (También que pueda saltar)
- origin : pone el objeto en un origen. Ejemplo: "topleft", "left", "center"
- layer : hace layers en el ui, para que los objetos no se sobrelapen. El layer más abajo, se dibuja primero

## Events
- action() : cada frame, llama esta acción
- collides() : detecta la colisiones entre las cosas
- on() : agrega algun "middleware" cuando llamas las acciones de ciertos tags. Ejemplo: 
    ```javascript
    // called when objs with tag "enemy" is added to scene
    on("add", "enemy", (e) => {
        console.log("run!!");
    });

    // per frame (action() is actually an alias to this)
    on("update", "bullet", (b) => {
        b.move(100, 0);
    });

    // per frame but drawing phase if you want custom drawing
    on("draw", "bullet", (e) => {
        drawSprite(...);
    });

    // when objs get 'destroy()'ed
    on("destroy", "bullet", (e) => {
        play("explosion");
    });
    ```

## inputs 
Pone los comandos a las teclas, con esto puedes manipular el juego 
- keyDown
- keyPress
- mouseDown
- mouseClick 
- ...

## Timer
- wait: Espera un número de segundos (puede ser async)
- loop : Repite el callback cada tantos segundos

## Audio
- play : pone un sonido
- volume : maneja el volumen del sonido 
 
## Math
- vec2 : hace un vector
- rgba : crea un color
- rand : genera un número random

## Level
- addLevel : Aqui puedes diseñar un nivel, de manera visual 

## Storage
- getData() : guarda un dato en el juego
- setData() : cambia el valor de un dato en el juego

## Scene
- go() : se mueve a una escena
- Scene() : aqui es donde pones la lógica de una escena. Cada escena es independiente de la otra. Funciona como una función, entonces le puedes pasar datos entre escenas

## Debug
- Debug() : Modo de debug. Este modo te deja manipular más cosas del juego como: 
  - pausa
  - inspect (te deja ver el area de los objetos)
  - timeScale
  - showLog
  - logMax
  - fps
  - objCount
  - stepFram()
  - clearLog()
  - log
  - error