import kaboom, { Origin } from "kaboom";
import { miHistoria } from './miHistoria';
import { Escena } from './interfaces';
import { setUpScene } from "./setUpScenes";
import { Vec2 } from 'kaboom';
import { addBackground, getLayers, textConfigs, scenesId } from './stylesAndConfigs';


kaboom();

// Declaration of origin function
declare function origin(pos: Origin): void


scene(scenesId.escena, (escena: Escena, previousScene: string) => {


    getLayers()
    addBackground()

    const { layOutConfig, layout } = setUpScene(escena, textConfigs.prompt, textConfigs.option)
    addLevel(layout, layOutConfig)


})
scene(scenesId.final, (escena: Escena, previousScene: string) => {


    getLayers()
    addBackground()

    add([
        text(escena.mensaje, textConfigs.prompt)
    ])

    addButton("Regresar al inicio?", vec2(width() / 2, height() / 2), () => {
        go(scenesId.escena, miHistoria.getScene(miHistoria.startingSceneId), miHistoria.startingSceneId)
    })
    addButton("Regresar escena anterior", vec2(width() / 2, 3 * height() / 4), () => {
        go(scenesId.escena, miHistoria.getScene(previousScene), miHistoria.startingSceneId)
    })

})

go("escena", miHistoria.getScene(miHistoria.startingSceneId))

function addButton(txt: string, p: Vec2, f: () => void) {

    const btn = add([
        rect(10, 10),
        text(txt, textConfigs.prompt),
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