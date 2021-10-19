import { Escena } from './interfaces';
import { Character, Origin, ScaleComp, AreaComp } from 'kaboom';
import { miHistoria } from "./miHistoria";
import { scenesId, textConfigs } from './stylesAndConfigs';
import { getGridPositionFunction, positionInGrid } from './gridSystem';



declare function origin(pos: Origin): void

/**
 * Pone la escena en un formato con este layout
    Layout imaginario (grid(5,4))
        "  x  ",
        "     ",
        " A B ",
        " C D ",
    Donde la x, es el mensaje de la escena
    Y las letras son las opciones
  
 * @param escena Escena
 */
export function setUpSceneWithGrid(
    escena: Escena
): void {

    const rows = 4
    const cols = 5

    const grid = vec2(rows, cols)

    const putInGrid = getGridPositionFunction<Character<AreaComp & ScaleComp>>(grid)



    putInGrid(vec2(2, 0), [
        text(escena.mensaje, textConfigs.prompt)
    ], "top")


    let counter = 0


    for (let j = cols - 2; j < cols; j++) {
        for (let i = 1; i < rows; i += 2) {

            const opcion = escena.listaOpciones[counter]
            counter++

            if (!opcion)
                break

            const { texto, siguienteEscenaId, escenaAnteriorId } = opcion

            const nextScene = miHistoria.getScene(siguienteEscenaId)
            const siguienteEscena = nextScene?.esFinal ? scenesId.final : scenesId.escena

            const boton = putInGrid(vec2(i, j), [
                text(texto, textConfigs.option),
                area({ cursor: "pointer" })
            ], "center")

            boton.clicks(() => {
                go(siguienteEscena, nextScene, escenaAnteriorId)
            })

            boton.hovers(() => {
                boton.scale = vec2(1.2)
            }, () => {
                boton.scale = vec2(1)
            })


        }

    }

}

