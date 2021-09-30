
interface Opcion {
    texto: string,
    siguienteEscenaId: string
}


interface iEscena {
    id: string,
    mensaje: string,
    listaOpciones: Opcion[]
}