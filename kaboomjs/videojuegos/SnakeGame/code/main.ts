import kaboom from "kaboom";
import { newGrid } from './gridSystem';
import { Origin } from 'kaboom';
kaboom();


declare function origin(o: Origin): any

scene("game", () => {
    const grid = newGrid(vec2(2, 2))

    add([
        rect(grid.blockDimensions.width, grid.blockDimensions.height),
        pos(grid.getPositionFromCoordinates(vec2(0, 1)))
        , outline(10, rgb(10, 12, 200)),
        origin("topleft")
    ])












})

go("game")