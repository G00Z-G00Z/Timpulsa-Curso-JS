import kaboom, { KaboomConf, Level, LevelConf, TextCompConf } from "kaboom";
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

declare function origin(pos: string): void
const textConfig: TextCompConf = {
    size: width() * .04,
    width: width() * .9,

}




const levelConfig: LevelConf = ({
    // define the size of each block
    width: width() / 7,
    height: height() / 5,
    // define what each symbol means, by a function returning a comp list (what you'll pass to add())
    "x": () => [
        text("Hola soy un texto de prompt"),
        origin("center")
    ],
    "o": () => [
        text("Soy la opcion 1"),
        origin("center")
    ]

} as unknown) as LevelConf




scene("escena", (escena: Escena) => {

    addLevel([
        "   x   ",
        "       ",
        " o oo ",
        " o o ",
        "       ",
    ], levelConfig);

    if (escena.esFinal)
        go("endScreen", escena)

    addBackground("background")

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