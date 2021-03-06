# 🐍 Snake Game

Este es el [juego de la serpiente][game_url]. El jugador es una serpiente que vive en un grid. Aparecen aleatoreamente frutas que la serpiente puede comer. Cuando la serpiente come, se hace más grande, y si la serpiente llega a chocar con sigo misma, pierde.

# Link del juego

El juego de la serpiente está en [Replit][game_url]

# Temas en relación al curso

- [ ] Grid positions
- [ ] Events
- [ ] Layout
- [ ] Point system

# Programación y conceptos importantes

La "Serpiente" es solo un bloque.

Lo que podemos hacer, es que los demás bloques sigan a la cabeza y así

Para poder hacer que se sigan, podemos hacer un update de la posición del final al principio

## Juego basado en Eventos

En el juego ocurren los siguientes eventos

- Moverse
  - Moverser: Cada frame dependiendo de la velocidad
- Comer
  - Colisión: Cabeza - Comida
- Chocar con la cola
  - Colision: Cabeza - Cuerpo

## Grid

La posición de una serpiente, puede ser un grid, entonces convendría hacer un grid

# Comentarios generales

- El movimiento va a tener que ser con render, para que sea más sencillo
- Cuando se actualiza el movimiento de la serpiente, tiene que usarse un Vec2.clone(), ya que como es un objeto, se pasa por _referencia_. Entonces se necesita el clone, para que se pase por value
- Las colisiones son muy precisas. Detectan incluso si están adyacentes. Entonces es mejor hacer un collision detection manual

# Ideas de otros lugares y links

- [https://www.edureka.co/blog/snake-game-with-pygame/](https://www.edureka.co/blog/snake-game-with-pygame/)
- [https://www.youtube.com/watch?v=QTcIXok9wNY](https://www.youtube.com/watch?v=QTcIXok9wNY)

[game_url]: https://replit.com/@EduardoGmez1/SnakeGame3#code/main.js
