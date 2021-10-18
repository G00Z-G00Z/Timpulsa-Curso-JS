import { Escena, Opcion } from './interfaces';
import { Character, LevelConf, Origin, TextCompConf, TextComp, AreaComp, Vec2 } from 'kaboom';
import { miHistoria } from "./miHistoria";
import { scenesId, textConfigs } from './stylesAndConfigs';
import { positionInGrid } from "./gridSystem";



declare function origin(pos: Origin): void


export const setUpScene = (escena: Escena, textConfigForPrompt: TextCompConf, textConfigForOption: TextCompConf): {
    layout: string[],
    layOutConfig: LevelConf
} => {

    // Opciones disponibles para elegir un camino
    const optionLetters = ["A", "B", "C", "D"]

    // Como se va a ver la pantalla
    const layout = [
        "    x    ",
        "         ",
        "  A   B  ",
        "  C   D  ",
    ]

    // Height del layout
    const layoutBlockHeight = height() / layout.length ?? 10,
        layoutBlockWidth = width() / layout[0].length ?? 10

    // Configuracion del grid
    const layOutConfig: LevelConf = {
        height: layoutBlockHeight,
        width: layoutBlockWidth,
        /**
         * Esta funcion, es para que cuando no haya nada, ponga nada. Se puede omitir
         */
        any: (s: string) => undefined,
        "x": () => [
            text(escena.mensaje, textConfigForPrompt),
            origin("top")
        ]
    }

    // Set up de las letras para el layout
    for (let i = 0; i < escena.listaOpciones.length; i++) {

        const letra = optionLetters[i]

        const { texto, siguienteEscenaId, escenaAnteriorId } = escena.listaOpciones[i]


        layOutConfig[letra] = () =>
            [
                text(texto, textConfigForOption),
                area({ cursor: "pointer" }),
                origin("center"),
                letra, // Esto es el tag de la opcion
            ]

        const nextScene = miHistoria.getScene(siguienteEscenaId)
        const siguienteEscena = nextScene?.esFinal ? scenesId.final : scenesId.escena

        clicks(letra, () => {
            go(siguienteEscena, nextScene, escenaAnteriorId)

        })

    }


    return { layout, layOutConfig }
}



export function setUpSceneWithGrid(
    escena: Escena
): void {


    const layout = [
        "  x  ",
        "     ",
        " A B ",
        " C D ",
    ]

    const rows = 4
    const cols = 9

    const grid = vec2(rows, cols)

    positionInGrid(grid, vec2(2, 1), [
        text(escena.mensaje, textConfigs.prompt)
    ])

    let opcion: Opcion

    opcion = escena.listaOpciones[0]

    if (opcion) {
        const { siguienteEscenaId, texto, escenaAnteriorId } = opcion


        const elemento: Character<AreaComp & { scale: Vec2 }> = positionInGrid(grid, vec2(r, c),
            [
                text(texto, textConfigs.option),
                area({ cursor: "pointer" })
            ])


        const nextScene = miHistoria.getScene(siguienteEscenaId)
        const siguienteEscena = nextScene?.esFinal ? scenesId.final : scenesId.escena

        elemento.clicks(() => {
            go(siguienteEscena, nextScene, escenaAnteriorId)
        })

        elemento.hovers(() => {
            elemento.scale = vec2(1)
        }, () => {
            elemento.scale = vec2(2)
        })
    }

    let counter = 0
    for (let r = rows - 2; r < rows; r++) {
        for (let c = 1; c < cols; c += 2) {

            const opcion = escena.listaOpciones[counter]
            counter++
            if (!opcion)
                break

            const { siguienteEscenaId, texto, escenaAnteriorId } = opcion


            const elemento: Character<AreaComp & { scale: Vec2 }> = positionInGrid(grid, vec2(r, c),
                [
                    text(texto, textConfigs.option),
                    area({ cursor: "pointer" })
                ])


            const nextScene = miHistoria.getScene(siguienteEscenaId)
            const siguienteEscena = nextScene?.esFinal ? scenesId.final : scenesId.escena

            elemento.clicks(() => {
                go(siguienteEscena, nextScene, escenaAnteriorId)
            })

            elemento.hovers(() => {
                elemento.scale = vec2(1)
            }, () => {
                elemento.scale = vec2(2)
            })



        }


    }


}

