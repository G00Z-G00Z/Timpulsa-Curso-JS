import { Grid, Snake } from './interfaces';
import { Vec2, Character, AreaComp, Origin } from 'kaboom';
import { FoodTags } from './tags';

// Function that generates food for the snake, at a random location. It cannot overlap with the snake.


declare function origin(o: Origin): void

export function newRandomFood(grid: Grid, snake: Snake): Character<AreaComp & { moveTo(v: Vec2): void }> {
    let foodCoord: Vec2;
    let overlap;

    do {
        foodCoord = randomPosition(grid);
        overlap = false

        for (let i = 0; i < snake.body.length; i++) {
            if (snake.body[i][1].eq(foodCoord)) {
                overlap = true
                break
            }
        }
    } while (overlap)

    const food: Character<AreaComp & { moveTo(v: Vec2): void }> = add([
        area(),
        pos(grid.getPositionFromCoordinates(randomPosition(grid))),
        color(rgb(255, 0, 0)),
        FoodTags.food,
        rect(grid.blockDimensions.width, grid.blockDimensions.height),
        origin("center")
    ])

    return food

}


// Generate a random positino in a grid 
function randomPosition(grid: Grid): Vec2 {
    let x = Math.floor(Math.random() * grid.maxColumns);
    let y = Math.floor(Math.random() * grid.maxRows);
    return vec2(x, y);
}