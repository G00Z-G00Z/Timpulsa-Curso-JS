import { Escena } from "./interfaces";
import { LevelConf, TextCompConf, Origin, Character, AreaComp, Vec2 } from 'kaboom';
import { miHistoria } from "./miHistoria";



declare function origin(pos: Origin): void


export const setUpScene = (escena: Escena,
    textConfiguration: TextCompConf): {
        layout: string[],
        layOutConfig: LevelConf
    } => {

    // Opciones disponibles para elegir un camino
    const optionLetters = ["A", "B", "C", "D"]

    const layout = [
        "    x    ",
        "         ",
        "  A   B  ",
        "  C   D  ",
    ]

    // Height del layout
    const layoutBlockHeight = height() / layout.length ?? 10,
        layoutBlockWidth = width() / layout[0].length ?? 10

    const layOutConfig: LevelConf = {
        height: layoutBlockHeight,
        width: layoutBlockWidth,
        /**
         * Esta funcion, es para que cuando no haya nada, ponga nada
         */
        any: (s: string) => undefined,
        "x": () => [
            text(escena.mensaje, textConfiguration),
            origin("top")
        ]
    }

    // Set up de las letras para el layout
    for (let i = 0; i < escena.listaOpciones.length; i++) {

        const letra = optionLetters[i]

        const { texto, siguienteEscenaId, escenaAnteriorId } = escena.listaOpciones[i]


        layOutConfig[letra] = () =>
            [
                text(texto, textConfiguration),
                area({ cursor: "pointer" }),
                origin("center"),
                letra, // Esto es el tag de la opcion
            ]

        clicks(letra, () => {
            go("escena", miHistoria.getScene(siguienteEscenaId), escenaAnteriorId)
        })

        hovers(letra, (btn) => {
            btn.scale = vec2(1.2)
        })

    }


    return { layout, layOutConfig }
}




