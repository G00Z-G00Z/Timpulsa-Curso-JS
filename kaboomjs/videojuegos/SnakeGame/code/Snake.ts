import { FabricaSnake, Grid, Snake } from './interfaces';
import { Vec2 } from 'kaboom';

export const newSnake: FabricaSnake = (grid: Grid, initialCoords: Vec2) => {


    const snake: Snake = {
        direction: 'up',
        body: [
            grid.getPositionFromCoordinates(initialCoords),
        ],
        grow() {

        },
        move(coordinates: Vec2) {

        }
    }


    return snake;







}

