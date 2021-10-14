import { Escena } from "./interfaces";
import { LevelConf, TextCompConf, Origin, Character, AreaComp, Vec2 } from 'kaboom';
import { miHistoria } from "./miHistoria";



declare function origin(pos: Origin): void


export const setUpScene = (escena: Escena,
    textConfiguration: TextCompConf): void => {

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
        const texto = escena.listaOpciones[i].texto

        layOutConfig[letra] = () =>
            [
                text(texto, textConfiguration),
                area({ cursor: "pointer" }),
                origin("center"),
                letra, // Esto es el tag de la opcion
            ]

    }

    // Agregar el nivel
    addLevel(layout, layOutConfig)


    // Agregar opciones para las letras
    for (let i = 0; i < escena.listaOpciones.length; i++) {

        const letra = optionLetters[i]
        const tag = letra
        const nextScene = escena.listaOpciones[i].siguienteEscenaId
        const prevScene = escena.listaOpciones[i].escenaAnteriorId

        clicks(tag, () => {
            go("escena", miHistoria.getScene(nextScene), prevScene)
        })

        hovers(tag, (btn) => {
            btn.scale = vec2(1.2)
        })


    }



}




