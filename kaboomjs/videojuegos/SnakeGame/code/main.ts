import kaboom from "kaboom";
import { newGrid } from './gridSystem';
import { Origin, TextComp, Character } from 'kaboom';
import { newSnake } from './Snake';
import { newRandomFood } from './randomFood';
import { Direction } from './interfaces';
import { LayersId, ScenesId, scoreId } from './tags';
import { getLayers } from './utils';
import { addButton } from './buttons';
kaboom();


declare function origin(o: Origin): any

scene(ScenesId.main, () => {

    // Layers and background
    getLayers()
    add([
        rect(width(), height()),
        color(rgb(0, 0, 0)),
        layer(LayersId.background)
    ])

    // Grid 
    const grid = newGrid(vec2(40, 18))

    // Score variables and text
    setData(scoreId, 0)


    const scoreText: Character<TextComp> = add([
        text("0"),
        pos(grid.getPositionFromCoordinates(vec2(0, 0))),
        layer(LayersId.ui)
    ])




    // Snake Variables to manage snake actions
    let SNAKE_DIRECTION: Direction = "up"

    const snake = newSnake(grid, vec2(5, 5))
    snake.grow() // Initial grow
    snake.move(SNAKE_DIRECTION) // Initial Movement

    // Food
    let food = newRandomFood(grid, snake)


    // Updates the game state (Game Loop)
    loop(.1, () => {
        snake.move(SNAKE_DIRECTION)

        // Check if snake is eating food

        if (snake.body[0][0].isTouching(food)) {
            snake.grow()
            food.destroy()
            food = newRandomFood(grid, snake)
            setData(scoreId, (getData(scoreId) as number) + 1)
        }

        const headCoords = snake.body[0][1]

        // Check if snake is eating itself
        for (let i = 1; i < snake.body.length; i++) {

            if (headCoords.eq(snake.body[i][1])) {
                shake(16)
                snake.kill()
                go(ScenesId.end)
            }
        }

        // Updates score
        scoreText.text = getData(scoreId)

    }
    )

    // Keyboard controls

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


scene(ScenesId.end, () => {

    // Layers and background
    getLayers()
    add([
        rect(width(), height()),
        color(rgb(0, 0, 0)),
        layer(LayersId.background)
    ])

    // Texts
    add([
        text(`Puntos ${getData(scoreId)}`, {
            size: 50
        }),
        pos(vec2(width() / 2, height() / 2)),
        origin("center"),
        layer(LayersId.ui)
    ])

    addButton("Reintentar ?", vec2(width() / 2, 2 * height() / 3), () => { go(ScenesId.main) })
})

go("game")