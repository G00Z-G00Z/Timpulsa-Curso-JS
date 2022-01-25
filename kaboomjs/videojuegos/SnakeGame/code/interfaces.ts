import { AreaComp, Character, Vec2 } from 'kaboom'

/**
 * Kaboom element, that has the function "moveTo"
 */
export type GameMovableElement = Character<
  AreaComp & { moveTo(v: Vec2): void }
>;

/**
 * In game grid. Lets you determine the position of a cell in the grid.
 */
export interface Grid {
  /**
   * Max number of rows
   */
  readonly maxRows: number;
  /**
   * Max number of columns
   */
  readonly maxColumns: number;
  /**
   * Get the dimensions of the grid's cell
   */
  readonly blockDimensions: {
    readonly height: number;
    readonly width: number;
  };
  /**
   * Given a set of coordinates, returns the position vector on the screen
   * @param coordinates Vec2
   */
  getPositionFromCoordinates(coordinates: Vec2): Vec2;
}

/**
 * Directions that the snake can move in.
 */
export type Direction = "up" | "down" | "left" | "right";

/**
 * Definición de una serpiente.
 */
export interface Snake {
  /**
   * Direction where snake is moving
   */
  direction: Direction;
  /**
   * Coords of the body of the snake
   */
  body: [Character<AreaComp & { moveTo(v: Vec2): void }>, Vec2][];
  /**
   * Adds a new block to the snake
   */
  grow(): void;
  /**
   * Moves the snake in the direction it is facing
   * @param direction Direction where snake is moving
   */
  move(direction: Direction): void;

  // Is the snake eating itself
  isEatingItself(): boolean;

  // Gets the snake's head
  getSnakeHead(): GameMovableElement;

  // indicates if the snake has just gotten a new block
  hasGrown: boolean;

  // Destroys the snake
  kill(): void;
}

/**
 * Creates a new snake, using a grid to determine the position of the snake
 */
export type FabricaSnake = (grid: Grid, initialCoords: Vec2) => Snake;

/**
 * Creates a new grid
 */
export type FabricaGrid = (grid: Vec2) => Grid;
