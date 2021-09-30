
/*
Opcion dentro de una escena
*/
export interface Opcion {
    texto: string,
    siguienteEscenaId: string
}

/*
Información de una Escena
*/
export interface Escena {
    mensaje: string,
    listaOpciones: Opcion[]
}

/*
Donde la llave, es el id de la escena
*/
export interface Historia {
    [key: string]: Escena
}
/**
 * Funcion que fabrica escenas
 */
export type fabricaEscena = (mensaje: string, listaOpciones: Opcion[]) => Escena

/**
 * Funcion que fabrica opciones
 */
export type fabricaOpcion = (texto: string, siguienteEscenaId: string) => Opcion
