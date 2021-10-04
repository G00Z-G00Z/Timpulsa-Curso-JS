import kaboom, { KaboomConf, TextCompConf } from "kaboom";
import { miHistoria } from './miHistoria';
import { Escena } from './interfaces';
import { OriginComp } from 'kaboom';

kaboom();

loadSprite("bean", "sprites/bean.png")

const addBackground = (layerId: string) => {
    add([
        rect(width(), height()),
        color(0, 0, 0),
        layer(layerId)
    ])
}


layers([
    "background",
    "ui"
], "ui")

const textConfig: TextCompConf = {
    size: width() * .04,
    width: width() * .9
}


scene("escena", (escena: Escena) => {

    if (escena.esFinal)
        go("endScreen", escena)

    addBackground("background")

    add([
        text(escena.mensaje, textConfig),
        pos(vec2(width() * .1, 0)),

    ])



})

scene("endScreen", (escena: Escena) => {
    add([
        text(escena.mensaje)
    ])
})

go("escena", miHistoria[1])