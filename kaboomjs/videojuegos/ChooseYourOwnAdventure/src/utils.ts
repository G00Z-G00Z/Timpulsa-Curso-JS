import { fabricaEscena, fabricaOpcion } from './interfaces';
import { Opcion } from '../dist/interfaces';

/**
 * Con esto se puede crear una escena de manera rapida
 * @param mensaje string
 * @param listaOpciones Opcion[]
 * @returns Escena
 */
export const newEscena: fabricaEscena = (mensaje: string, listaOpciones: Opcion[]) => {
    return {
        mensaje,
        listaOpciones
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