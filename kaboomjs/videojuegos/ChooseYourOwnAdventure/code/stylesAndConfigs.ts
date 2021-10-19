import { TextCompConf } from "kaboom";


const layersId: {
    background: string,
    ui: string
} = {
    background: "background",
    ui: "ui"
}


export const scenesId: {
    escena: string,
    final: string
} = {
    escena: "escena",
    final: "ending"
}

export const getLayers = () => {
    layers([
        layersId.background,
        layersId.ui,
    ], layersId.ui)
}


export const addBackground = () => {
    add([
        rect(width(), height()),
        color(0, 0, 0),
        layer(layersId.background)
    ])
}

export const textConfigs: {
    prompt: TextCompConf,
    option: TextCompConf
} = {
    prompt: {
        size: vec2(width()).x,
        width: vec2(width()).x
    },
    option: {
        size: vec2(width()).x,
        width: vec2(width()).x
    }
}
