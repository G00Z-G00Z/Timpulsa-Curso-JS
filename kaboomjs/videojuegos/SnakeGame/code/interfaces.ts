import { Vec2 } from 'kaboom';


export interface Grid {
    readonly maxRows: number,
    readonly maxColumns: number,
    readonly blockDimensions: {
        readonly height: number,
        readonly width: number
    }
    getPositionFromCoordinates(coordinates: Vec2): Vec2
}

export type FabricaGrid = (grid: Vec2) => Grid