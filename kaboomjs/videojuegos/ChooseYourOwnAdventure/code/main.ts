import kaboom, { Origin } from "kaboom";
import { miHistoria } from './miHistoria';
import { Escena } from './interfaces';
import { setUpScene } from "./setUpScenes";
import { Vec2 } from 'kaboom';
import { addBackground, getLayers, textConfigs, scenesId } from './stylesAndConfigs';
import { addButton } from "./button";
import { addClickableText } from "./clickableText";



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

    addClickableText("Regresar al principo", textConfigs.option, vec2(width() / 2, height() / 2), () => {
        go(scenesId.escena, miHistoria.getScene(miHistoria.startingSceneId), miHistoria.startingSceneId)
    })
    addClickableText("Regresar escena anterior", textConfigs.option, vec2(width() / 2, 3 * height() / 4), () => {
        go(scenesId.escena, miHistoria.getScene(previousScene), miHistoria.startingSceneId)
    })

})

go("escena", miHistoria.getScene(miHistoria.startingSceneId))

