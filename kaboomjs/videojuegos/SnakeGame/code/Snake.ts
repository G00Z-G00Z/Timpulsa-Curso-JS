import { FabricaSnake, Grid, Snake, Direction } from './interfaces';
import { Vec2, Character, AreaComp } from 'kaboom';

export const SnakeTags = {
    head: "head",
    body: "body",
}


export const newSnake: FabricaSnake = (grid: Grid, initialCoords: Vec2) => {

    const head: Character<AreaComp & { moveTo(v: Vec2): void }> = add([
        rect(grid.blockDimensions.width, grid.blockDimensions.height),
        area(),
        pos(grid.getPositionFromCoordinates(initialCoords)),
        color(rgb(0, 255, 0)),
        SnakeTags.head
    ])

    const snake: Snake = {
        direction: 'up',
        body: [
            [head, initialCoords]
        ],
        grow() {

            const lastPositionCoords = this.body[this.body.length - 1][1]

            const newBody: Character<AreaComp & { moveTo(v: Vec2): void }> = add([
                rect(grid.blockDimensions.width, grid.blockDimensions.height),
                area(),
                pos(grid.getPositionFromCoordinates(lastPositionCoords)),
                color(rgb(0, 255, 0)),
            ])

            this.body.push([newBody, lastPositionCoords])

        },
        move(direction: Direction) {

            for (let i = this.body.length - 1; i > 0; i++) {

                this.body[i][1] = this.body[i - 1][1]
                this.body[i][0].moveTo(grid.getPositionFromCoordinates(this.body[i][1]))
            }

            this.body[0][1].x++
            this.body[0][0].moveTo(grid.getPositionFromCoordinates(this.body[0][1]))


        }
    }


    return snake;
}



