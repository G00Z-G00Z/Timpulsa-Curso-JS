
/*
Opcion dentro de una escena
*/
export interface Opcion {
    texto: string,
    siguienteEscenaId: string,
    escenaAnteriorId?: string,
}

/*
Información de una Escena
*/
export interface Escena {
    mensaje: string,
    id: string,
    listaOpciones: Opcion[],
    esFinal: boolean
}

/*
Este es un objeto que guarda las escenas 
*/
export interface Historia {
    listaEscenas: {
        [key: string]: Escena
    },
    addScene(escena: Escena): void,
    getScene(id: string | number): Escena | undefined
}
/**
 * Funcion que fabrica escenas
 */
export type fabricaEscena = (escenaId: string, mensaje: string, listaOpciones: Opcion[]) => Escena

/**
 * Funcion que fabrica escenas
 */
export type fabricaEnding = (escenaId: string, mensaje: string) => Escena

/**
 * Funcion que fabrica opciones
 */
export type fabricaOpcion = (texto: string, siguienteEscenaId: string) => Opcion


/**
 * Es un objeto que devuelve un objeto de historia
 */
export type fabricaHistoria = () => Historia