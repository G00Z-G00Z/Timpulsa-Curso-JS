import kaboom, { KaboomConf, Level, LevelConf, Origin, TextCompConf } from "kaboom";
import { miHistoria } from './miHistoria';
import { Escena } from './interfaces';
import { getPromptScreenWithConfiguration } from "./promtScreen";
import { addClickableText } from './ClickableText';
import { Vec2 } from 'kaboom';


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

    getPromptScreenWithConfiguration(escena, textConfig)
    action(() => {
        cursor("default")
        escena.esFinal && go("endScreen", escena)
    })





})



scene("endScreen", (escena: Escena) => {

    addBackground("background")

    add([
        text(escena.mensaje, textConfig)
    ])

    addButton("Regresar al inicio?", vec2(width() / 2, height() / 2), () => {
        go("escena", miHistoria[1])
    })

})

go("escena", miHistoria[1])

function addButton(txt: string, p: Vec2, f: () => void) {

    const btn = add([
        rect(10, 10),
        text(txt, textConfig),
        color(255, 255, 0),
        pos(p),
        area({ cursor: "pointer", }),
        scale(1),
        origin("center"),
    ]);

    btn.clicks(f);

    btn.hovers(() => {
        const t = time() * 10;
        btn.color = rgb(
            wave(0, 255, t),
            wave(0, 255, t + 2),
            wave(0, 255, t + 4),
        );
        btn.scale = vec2(1.2);
    }, () => {
        btn.scale = vec2(1);

    });

}