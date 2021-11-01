import kaboom from "kaboom";
import { newGrid } from './gridSystem';
import { Origin } from 'kaboom';
import { newSnake, SnakeTags } from './Snake';
import { newRandomFood, FoodTags } from './randomFood';
import { Direction } from './interfaces';
kaboom();


declare function origin(o: Origin): any

scene("game", () => {
    const grid = newGrid(vec2(40, 18))

    add([
        rect(width(), height()),
        color(rgb(0, 0, 0))
    ])

    let SNAKE_DIRECTION: Direction = "up"

    const { height: bHeight, width: bWidth } = grid.blockDimensions

    const snake = newSnake(grid, vec2(5, 5))
    snake.grow()
    snake.move(SNAKE_DIRECTION)

    let food = newRandomFood(grid, snake)

    // Updates the game state
    loop(.1, () => {
        snake.move(SNAKE_DIRECTION)

        // Check if snake is eating food

        if (snake.body[0][0].isTouching(food)) {
            snake.grow()
            food.destroy()
            food = newRandomFood(grid, snake)
        }

        const headCoords = snake.body[0][1]

        // Check if snake is eating itself
        for (let i = 1; i < snake.body.length; i++) {

            if (headCoords.eq(snake.body[i][1])) {
                go("gameOver")
            }

        }

    }
    )



    keyDown("left", () => {
        SNAKE_DIRECTION = "left"
    })
    keyDown("right", () => {
        SNAKE_DIRECTION = "right"
    })
    keyDown("down", () => {
        SNAKE_DIRECTION = "down"
    })
    keyDown("up", () => {
        SNAKE_DIRECTION = "up"
    })


})


scene("gameOver", () => {
    add([
        text("Muerto"),
        pos(width() / 2, height() / 2)
    ])
})

go("game")