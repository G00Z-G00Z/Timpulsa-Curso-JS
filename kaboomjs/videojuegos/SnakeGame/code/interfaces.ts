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

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Snake {
    direction: Direction,
    body: Vec2[],
    grow(): void
    move(coordinates: Vec2): void
}

export type FabricaSnake = (grid: Grid, initialCoords: Vec2) => Snake

export type FabricaGrid = (grid: Vec2) => Grid