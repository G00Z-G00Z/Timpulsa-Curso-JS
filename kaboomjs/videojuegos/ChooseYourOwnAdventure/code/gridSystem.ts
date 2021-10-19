import { Vec2, Character, CompList, Origin } from 'kaboom';


declare function origin(o: Origin): void

/**
 * Positions a caracter exactly where you say in the grid (Considering an origin)
 * @param grid [number, number]
 * @param coordinate [number, number]]
 * @param configs Normal configs
 * @returns Character
 */
export function positionInGrid<T>(grid: Vec2, coordinate: Vec2, configs: CompList<any>, originInObj: Origin = "center"): Character<T> {

    const position = pos(
        (width() / grid.x) * ((coordinate.x)),
        (height() / grid.y) * ((coordinate.y))
    )

    configs.push(origin(originInObj))
    configs.push(position)

    const elemento = add(configs)

    return elemento
}

/**
 * Factory of grid functions
 * @param grid Grid in screen
 * @returns Shorten function to use grid
 */
export function getGridPositionFunction<T>(grid: Vec2): (coordinate: Vec2, configs: CompList<any>, originInObj?: Origin) => Character<T> {

    return (coordinate: Vec2, configs: CompList<any>, originInObj: Origin = "center") => {
        return positionInGrid<T>(grid, coordinate, configs, originInObj)
    }

}

