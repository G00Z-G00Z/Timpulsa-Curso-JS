import { Vec2 } from 'kaboom';
import { FabricaGrid } from './interfaces';

/**
 * Crea un grid, con las dimensiones del vector. 
 * Luego, puedes obtener las coordenadas en la pantalla, en base a una coordenada del grid, con la función de getPositionFromCoordinates. 
 * @param grid Vec2
 * @returns Grid
 */
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