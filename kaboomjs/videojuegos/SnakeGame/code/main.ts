import kaboom from "kaboom";
import { newGrid } from './gridSystem';
import { Origin } from 'kaboom';
import { newSnake } from "./Snake";
kaboom();


declare function origin(o: Origin): any

scene("game", () => {
    const grid = newGrid(vec2(40, 18))

    add([
        rect(width(), height()),
        color(rgb(0, 0, 0))
    ])

    const { height: bHeight, width: bWidth } = grid.blockDimensions

    const snake = newSnake(grid, vec2(5, 5))

    let isGrow = false

    loop(1, () => {
        isGrow && snake.grow()
        isGrow = !isGrow
        snake.move(snake.direction)
    }
    )


    keyDown("left", () => {
        snake.direction = "left"
    })
    keyDown("right", () => {
        snake.direction = "right"
    })
    keyDown("down", () => {
        snake.direction = "down"
    })
    keyDown("up", () => {
        snake.direction = "up"
    })


})

go("game")