import { fabricaEscena, fabricaOpcion, fabricaEnding } from './interfaces';
import { Opcion } from './interfaces';

/**
 * Con esto se puede crear una escena de manera rapida
 * @param mensaje string
 * @param listaOpciones Opcion[]
 * @returns Escena
 */
export const newEscena: fabricaEscena = (mensaje: string, listaOpciones: Opcion[]) => {
    return {
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
export const newEnding: fabricaEnding = (mensaje: string) => {
    return {
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