import kaboom, { KaboomConf, Level, LevelConf, Origin, TextCompConf } from "kaboom";
import { miHistoria } from './miHistoria';
import { Escena } from './interfaces';
import { getPromptScreenWithConfiguration } from "./promtScreen";


kaboom();

// Declaration of origin function
declare function origin(pos: Origin): void

loadSprite("bean", "sprites/bean.png")

const addBackground = (layerId: string) => {
    add([
        rect(width(), height()),
        color(0, 0, 0),
        layer(layerId)
    ])
}






const textConfig: TextCompConf = {
    size: width() * .04,
    width: width() * .9,

}




scene("escena", (escena: Escena) => {

    layers([
        "background",
        "ui",
    ], "ui")


    addBackground("background")
    if (escena.esFinal)
        go("endScreen", escena)
    getPromptScreenWithConfiguration(escena, textConfig)





    // add([
    //     text(escena.mensaje, textConfig),
    //     pos(vec2(width() * .1, 0)),

    // ])



})

scene("endScreen", (escena: Escena) => {
    add([
        text(escena.mensaje)
    ])
})

go("escena", miHistoria[1])