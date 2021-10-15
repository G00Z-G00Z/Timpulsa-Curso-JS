import { Escena } from "./interfaces";
import { LevelConf, Origin, TextCompConf } from 'kaboom';
import { miHistoria } from "./miHistoria";
import { scenesId, textConfigs } from './stylesAndConfigs';



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

        hovers(letra, (btn) => {
            btn.scale = vec2(1.2)
        })

    }


    return { layout, layOutConfig }
}




