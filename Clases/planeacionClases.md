[Ir a página principal][pagina_principal]

# Planeación de las clases

Aqui se van a poner los temas y como se pueden dividir las clases y dinámicas

> **Total de clases** : 16 (pero las últimas va a ser para que desarrollen un proyecto)

**Clases de enseñanza** : 12~13 clases

Se va a dividir en **3** partes:

- Intro a `javascript` (4 clases)
- Intro a `kaboom` (2 clases)
- Desarrollo con Kboom (6 clases)

## Intro a `Javascript`

A continuación, se muestran los temas de `javascript`. En el [indice de `javascript`][indice_js] se encuentran a detalle los temas.

### Introducción

1. Que es un lenguaje de programación
2. Que es `Javascript`
3. Diferencias entre `javascript` y `scratch`
4. Ambiente de desarrollo

### Familiarizarnos con `javascript`

1. Primitivos y variables
1. console
1. Comentarios
1. Operadores
1. Inputs del usuario
1. Condicionales

### Funciones y ciclos

1. Funciones
1. Loops
1. Arreglos
1. Strings in depth

### Objetos

1. Objetos
1. Imports & Exports

## Intro a `kaboomjs`

A continuación, se muestran los temas de las clases de Intro a `Kaboomjs`. _Ojo_, no se entrará tanto a fondo, porque en teoría, la enseñanza de los videojuegos va a ser lo que les enseñe a usar `kaboom`, pero esto es para que no entren en ceros. Comoquiera, se todos los temas se encuentran el [indice de kaboom][indice_kaboom]

### Inciando en `kaboomjs`

1. ¿Como agregar "cosas" a la pantalla?

   - Puede ser que hagamos un videojuego donde podamos poner texto y figuras para formar algo estático
   - **Micro videojuego**: Hacer un videojuego en el que se agreguen cosas a la pantalla (Propositos demostrativos, no tiene que tener una temática, pero debe de usar algunas funciones de aqui abajo)
   - Funciones que podemos usar:
     - add
     - color
     - pos
       - width
       - height
       - origin
     - text
     - rect
     - circle
     - sprite
     - vec2

1. ¿Como hacer que el usuario interactue con el videojuego?
   - **Micro videojuego**: Videojuego que demuestre las funciones aqui vistas
   - Enseñar eventos del mouse y del teclado
   - Funciones que podemos usar
     - keyDown / press
     - onClick
     - onHover
     - area()
     - body()
     - move
     - moveTo
1. ¿ Como hacer niveles y que las cosas interactuen entre sí?
   - **Micro videojuego** : Videojuego que muestre como hacer niveles y quiza alguno donde se muevan las cosas
   - Add level
   - add scene
   - moveTo
   - move
   - on collide
   - destroy()
   - loops

### Videojuegos

Si están marcados con [x], significa que ya están listos para el desarrollo

- [x] Choose Your Own Adventure
- [x] Snake Game
- [ ] Cookie Clicker
- [ ] Doodle Jump
- [ ] Platformer

<!-- Definiciones para paths -->

[indice_js]: ..\TemarioJs\indice.md
[indice_kaboom]: ..\kaboomjs\indice.md
[pagina_principal]: ../README.md
