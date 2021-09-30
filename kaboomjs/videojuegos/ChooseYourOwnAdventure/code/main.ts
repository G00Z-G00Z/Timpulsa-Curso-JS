import kaboom from "kaboom";
import { miHistoria } from './miHistoria';

kaboom();

loadSprite("bean", "sprites/bean.png")

layers([
    "background",
    "ui"
], "ui")

scene("start", () => {
    const datos = miHistoria["1"]

    add([
        sprite("bean"),
        pos(80, 40),
        area()
    ])

})

go("start")