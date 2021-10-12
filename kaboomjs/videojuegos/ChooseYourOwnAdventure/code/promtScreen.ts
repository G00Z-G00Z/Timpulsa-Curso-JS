import { Escena } from "./interfaces";
import { LevelConf, TextCompConf, Origin, Character, AreaComp, Vec2 } from 'kaboom';
import { miHistoria } from "./miHistoria";



declare function origin(pos: Origin): void


export const getPromptScreenWithConfiguration = (escena: Escena, textConfiguration: TextCompConf): void => {

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

        layOutConfig[letra] = () =>
            [
                text(texto, textConfiguration),
                area({ cursor: "pointer" }),
                origin("center"),
                `Option_${letra}`,
            ]

    }

    addLevel(layout, layOutConfig)


    for (let i = 0; i < escena.listaOpciones.length; i++) {

        const letra = optionLetters[i]
        const tag = `Option_${letra}`
        const nextScene = escena.listaOpciones[i].siguienteEscenaId

        clicks(tag, () => {
            go("escena", miHistoria[nextScene])
        })

        hovers(tag, (btn) => {
            btn.scale = vec2(1.2)
        })


    }



}




