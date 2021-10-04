import { Vec2, Character } from "kaboom"
import { Opcion } from './interfaces';

/**
 * Entrega un boton que puedes modificar
 * @param message string
 * @param position Vec2
 * @param callback () => void
 * @returns Character
 */
export function addButton(message: string, position: Vec2, callback: () => void): Character {

    const btn = add([
        text(message),
        pos(position),
        area({ cursor: "pointer" }),
        scale(1),
    ])

    btn.clicks(callback)

    return btn
}



export function displayButtons(listOptions: Opcion[], gridHeigth: number, gridWidth: number, initialPos: Vec2) {

    /*
    Una cuadricula con un height, y width, con una posicion inicial en la esquina superior izquierda
    ********************
    *        *         *
    *        *         * 
    *        *         * 
    ******************** 
    *        *         * 
    *        *         * 
    ********************

    */




}