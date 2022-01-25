import { Origin, Vec2 } from 'kaboom'
import { SnakeTags } from './tags'
import {
  FabricaSnake,
  Grid,
  Snake,
  Direction,
  GameMovableElement,
} from "./interfaces";

declare function origin(o: Origin): void;

/**
 * Crea una serpiente, que no se sale del grid determinado
 * @param grid Grid
 * @param initialCoords Vec2
 * @returns Snake
 */
export const newSnake: FabricaSnake = (grid: Grid, initialCoords: Vec2) => {
  // Esta es la cabeza, tiene el tag de la cabeza de la serpiente
  const head: GameMovableElement = add([
    rect(grid.blockDimensions.width, grid.blockDimensions.height),
    area(),
    pos(grid.getPositionFromCoordinates(initialCoords)),
    color(rgb(0, 255, 0)),
    outline(1, rgb(0, 0, 0)),
    SnakeTags.head,
    origin("center"),
  ]);

  const snake: Snake = {
    direction: "up",
    hasGrown: false,
    /**
     * El cuerpo de la serpiente es un arreglo de arreglos.
     * [SnakeBodyPart, Coords]
     *
     * Las coordenadas son un Vec2
     */
    body: [[head, initialCoords]],
    grow() {
      // Con esto, se logra que cuando crezca la serpiente, no detecte que se está comiendo a sí misma
      this.hasGrown = true;

      const lastPositionCoords = this.body[this.body.length - 1][1];

      const newBody: GameMovableElement = add([
        rect(grid.blockDimensions.width, grid.blockDimensions.height),
        area(),
        pos(grid.getPositionFromCoordinates(lastPositionCoords)),
        color(rgb(0, 255, 0)),
        outline(1, rgb(0, 0, 0)),
        SnakeTags.body,
        origin("center"),
      ]);

      this.body.push([newBody, lastPositionCoords]);
    },
    move(direction: Direction) {
      // Prevents the snake for going backwards
      switch (direction) {
        case "up":
          if (this.direction === "down") direction = "down";
          break;
        case "down":
          if (this.direction === "up") direction = "up";
          break;
        case "left":
          if (this.direction === "right") direction = "right";
          break;
        case "right":
          if (this.direction === "left") direction = "left";
          break;
      }

      this.direction = direction;

      /**
       * Este indice indica desde donde crece la serpiente.
       *
       * Si está creciendo (hasGrown == true), la última coordenada no se debe de mover (porque en ese momento, la última y penúltima posición estarían en la misma posición)
       *
       * Una vez que ya deje de crecer, la serpiente empieza desde hasta atrás a crecer
       */
      const firstIndex = this.hasGrown
        ? this.body.length - 2
        : this.body.length - 1;

      // Goes backwards in the snake's body and updates position
      for (let i = firstIndex; i > 0; i--) {
        this.body[i][1] = this.body[i - 1][1].clone(); // Tiene que ser clone, porque este es un objeto, entonces se pasa por referencia
        this.body[i][0].moveTo(
          grid.getPositionFromCoordinates(this.body[i][1])
        );
      }

      // Le dice a la serpiente que ya deje de crecer
      this.hasGrown = false;

      // Move head
      switch (this.direction) {
        case "up":
          this.body[0][1].y--;
          break;

        case "down":
          this.body[0][1].y++;
          break;

        case "left":
          this.body[0][1].x--;
          break;

        case "right":
          this.body[0][1].x++;
          break;
        default:
          break;
      }

      //Check boundaries and reset if needed
      if (this.body[0][1].x < 0) {
        this.body[0][1].x = grid.maxColumns - 1;
      }
      if (this.body[0][1].x > grid.maxColumns - 1) {
        this.body[0][1].x = 0;
      }
      if (this.body[0][1].y < 0) {
        this.body[0][1].y = grid.maxRows - 1;
      }
      if (this.body[0][1].y > grid.maxRows - 1) {
        this.body[0][1].y = 0;
      }

      this.body[0][0].moveTo(grid.getPositionFromCoordinates(this.body[0][1]));
    },
    /**
     * Destruye la serpiente, y todo su cuerpo
     */
    kill() {
      for (let i = 0; i < this.body.length; i++) {
        const block = this.body[i];
        block[0].destroy();
      }

      this.body = [];
    },
  };

  return snake;
};
