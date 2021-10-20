import { Vec2, Character, CompList, Origin } from 'kaboom';


declare function origin(o: Origin): void

/**
 * Positions a caracter exactly where you say in the grid (Considering an origin)
 * Por ejemplo, si le dices que hay un grid de 4 x 4, divide la pantalla en 4 x 4
 * Se empieza a contar desde el 0 (entonces, de posiciones en x van del 0 - 3)
 * Las configs, son lo que se va a pasar a la función "add"
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
 * Si le das un grid, genera una función que ya tiene configurado un grid, para que no tengas que estar pasandole el grid cada vez que la invoques
 * @param grid Grid in screen
 * @returns Shorten function to use grid
 */
export function getGridPositionFunction<T>(grid: Vec2): (coordinate: Vec2, configs: CompList<any>, originInObj?: Origin) => Character<T> {

    return (coordinate: Vec2, configs: CompList<any>, originInObj: Origin = "center") => {
        return positionInGrid<T>(grid, coordinate, configs, originInObj)
    }

}

