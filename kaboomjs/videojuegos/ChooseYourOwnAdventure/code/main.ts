import kaboom from "kaboom";
import { miHistoria } from './miHistoria';
import { Escena } from './interfaces';
import { setUpSceneWithGrid } from "./setUpScenes";
import { addBackground, getLayers, textConfigs, scenesId } from './stylesAndConfigs';
import { addClickableText } from "./ClickableText";



kaboom();

// Definición de una escena
scene(scenesId.escena, (escena: Escena, previousScene: string) => {


    getLayers()
    addBackground()

    setUpSceneWithGrid(escena)

})

// Definición de la pantalla final de un ending
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

// Inicialización del videojuego
go("escena", miHistoria.getScene(miHistoria.startingSceneId))

