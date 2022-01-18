import { GameMovableElement, Grid, Snake } from './interfaces';
import { Vec2, Character, AreaComp, Origin } from 'kaboom';
import { FoodTags } from './tags';


declare function origin(o: Origin): void

/**
 * 
 * @param grid Grid
 * @param snake Snake
 * @returns Food
 */
export function newRandomFood(grid: Grid, snake: Snake): GameMovableElement {

    let foodCoord: Vec2
        , isOverlap: boolean;

    // Loop que pone la comida en una posición aleatoria, sin chocar con la serpiente
    do {
        foodCoord = randomPosition(grid);
        isOverlap = false

        for (let i = 0; i < snake.body.length; i++) {
            if (snake.body[i][1].eq(foodCoord)) {
                isOverlap = true
                break
            }
        }
    } while (isOverlap)

    const food: GameMovableElement = add([
        area(),
        pos(grid.getPositionFromCoordinates(randomPosition(grid))),
        color(rgb(255, 0, 0)),
        FoodTags.food,
        rect(grid.blockDimensions.width, grid.blockDimensions.height),
        origin("center")
    ])

    return food

}


/**
 * Generates a Random Position in a grid
 * @param grid Grid
 * @returns Vec2
 */
function randomPosition(grid: Grid): Vec2 {
    const x = Math.floor(Math.random() * grid.maxColumns)
        , y = Math.floor(Math.random() * grid.maxRows);
    return vec2(x, y);
}