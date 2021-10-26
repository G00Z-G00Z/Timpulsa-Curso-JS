import kaboom from "kaboom";
import { newGrid } from './gridSystem';
import { Origin } from 'kaboom';
kaboom();


declare function origin(o: Origin): any

scene("game", () => {
    const grid = newGrid(vec2(2, 2))

    // add([
    //     rect(grid.blockDimensions.width, grid.blockDimensions.height),
    //     pos(grid.getPositionFromCoordinates(vec2(0, 1)))
    //     , outline(10, rgb(10, 12, 200)),
    //     origin("topleft")
    // ])


    const { height: bHeight, width: bWidth } = grid.blockDimensions

    const block = add([
        rect(bWidth, bHeight),
        pos(grid.getPositionFromCoordinates(vec2(0, 0))),
        origin("topleft"),
        color(rgb(10, 12, 200)),
        scale(1),
    ])

    const moveSpeed = {
        hotizontal: grid.blockDimensions.width,
        vertical: grid.blockDimensions.height
    }

    keyDown("left", () => {
        block.move(vec2(-moveSpeed.hotizontal, 0))
    })

    keyDown("right", () => {
        block.move(vec2(moveSpeed.hotizontal, 0))
    })

    keyDown("up", () => {
        block.move(vec2(0, -moveSpeed.vertical))
    })

    keyDown("down", () => {
        block.move(vec2(0, moveSpeed.vertical))
    })













})

go("game")