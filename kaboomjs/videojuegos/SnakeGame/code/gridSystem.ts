import { Vec2 } from 'kaboom';
import { FabricaGrid } from './interfaces';


export const newGrid: FabricaGrid = (grid: Vec2) => {

    return {
        maxColumns: grid.x,
        maxRows: grid.y,
        blockDimensions: {
            height: height() / grid.y,
            width: width() / grid.x
        },
        getPositionFromCoordinates(coordinates: Vec2) {

            return vec2(
                this.blockDimensions.width * coordinates.x,
                this.blockDimensions.height * coordinates.y
            )


        }
    }
}