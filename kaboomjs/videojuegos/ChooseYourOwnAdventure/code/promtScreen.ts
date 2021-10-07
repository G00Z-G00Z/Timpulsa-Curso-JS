import { Escena } from "./interfaces";
import { LevelConf, TextCompConf, Origin } from 'kaboom';



declare function origin(pos: Origin): void


export const getPromptScreenWithConfiguration = (escena: Escena, textConfiguration: TextCompConf): [string[], LevelConf] => {

    const optionLetters = ["A", "B", "C", "D"]

    const layout = [
        "    x    ",
        "         ",
        "  A   B  ",
        "  C   D  ",
    ]

    const layoutHeight = layout.length ?? 10, layoutWidth = layout[0].length ?? 10

    const layOutConfig: LevelConf = {
        height: height() / layoutHeight,
        width: width() / layoutWidth,
        any: (s: string) => undefined,
        "x": () => [
            text(escena.mensaje, textConfiguration),
            origin("top")
        ]
    }

    for (let i = 0; i < escena.listaOpciones.length; i++) {
        const letra = optionLetters[i]
        const texto = escena.listaOpciones[i].texto

        layOutConfig[letra] = () => [
            text(texto, textConfiguration),
            origin("center")

        ]

    }



    return [layout, layOutConfig]

}




