import { Vec2, Character, CompList, Origin } from 'kaboom';


declare function origin(o: Origin): void

/**
 * Positions a caracter exactly where you say in the grid
 * @param grid [number, number]
 * @param coordinate [number, number]]
 * @param configs Normal configs
 * @returns Character
 */
export function positionInGrid<T>(grid: Vec2, coordinate: Vec2, configs: CompList<any>): Character<T> {

    const position = pos(
        (width() / grid.x) * ((coordinate.x + .5)),
        (height() / grid.y) * ((coordinate.y + .5))
    )

    configs.push(origin("center"))
    configs.push(position)

    const elemento = add(configs)

    return elemento
}

const congigs = [
    sprite("bean"),
    pos(80, 40),
]

positionInGrid(vec2(2, 2), vec2(2, 2), congigs)

