import { fabricaEscena, fabricaOpcion, fabricaEnding, fabricaHistoria, Escena } from './interfaces';
import { Opcion } from './interfaces';

/**
 * Con esto se puede crear una escena de manera rapida
 * @param mensaje string
 * @param listaOpciones Opcion[]
 * @returns Escena
 */
export const newEscena: fabricaEscena = (escenaId: string, mensaje: string, listaOpciones: Opcion[]) => {

    listaOpciones.forEach((opcion, i) => {
        listaOpciones[i].escenaAnteriorId = escenaId
    });

    return {
        id: escenaId,
        mensaje,
        listaOpciones,
        esFinal: false
    }

}

/**
 * Regresa un final, que debe ser tratado de manera diferente al resto
 * @param mensaje Mensaje final
 * @returns Escena
 */
export const newEnding: fabricaEnding = (escenaId: string, mensaje: string) => {
    return {
        id: escenaId,
        mensaje,
        listaOpciones: [],
        esFinal: true
    }
}

/**
 * Genera una opcion
 * @param texto string
 * @param siguienteEscenaId string
 * @returns Opcion
 */
export const newOpcion: fabricaOpcion = (texto: string, siguienteEscenaId: string) => {
    return {
        texto,
        siguienteEscenaId
    }
}

/**
 * Regresa una historia vacía
 * @returns Historia
 */
export const newHistoria: fabricaHistoria = (startingSceneId: string) => {
    return {
        listaEscenas: {},
        startingSceneId,
        addScene(escena: Escena) {
            this.listaEscenas[escena.id] = escena
        },
        getScene(id: string | number) {

            return this.listaEscenas[id]
        }
    }
}