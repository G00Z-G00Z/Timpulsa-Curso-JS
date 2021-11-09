import { TextCompConf } from "kaboom";

/**
 * Id de los layers
 */
const layersId: {
    background: string,
    ui: string
} = {
    background: "background",
    ui: "ui"
}

/**
 * Nombres de las escenas
 */
export const scenesId: {
    escena: string,
    final: string
} = {
    escena: "escena",
    final: "ending"
}


/**
 * Funcion que agrega los layers
 */
export const getLayers = () => {
    layers([
        layersId.background,
        layersId.ui,
    ], layersId.ui)
}

/**
 * Funcion que agrega el fondo
 */
export const addBackground = () => {
    add([
        rect(width(), height()),
        color(0, 0, 0),
        layer(layersId.background)
    ])
}

/**
 * Configuraciones de los textos
 */
export const textConfigs: {
    prompt: TextCompConf,
    option: TextCompConf
} = {
    prompt: {
        size: 16,
        width: 500
    },
    option: {
        size: 16,
        width: 200
    }
}
