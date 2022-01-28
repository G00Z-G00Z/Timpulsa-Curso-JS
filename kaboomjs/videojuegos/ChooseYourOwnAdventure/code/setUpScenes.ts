import { Escena } from "./interfaces";
import { Character, Origin, ScaleComp, AreaComp } from "kaboom";
import { miHistoria } from "./miHistoria";
import { scenesId, textConfigs } from "./stylesAndConfigs";
import { getGridPositionFunction, positionInGrid } from "./gridSystem";

declare function origin(pos: Origin): void;

/**
 * Pone la escena en un formato con este layout
    Layout imaginario (grid(5,4))
        "  x  ",
        "     ",
        " A B ",
        " C D ",
    Donde la x, es el mensaje de la escena
    Y las letras son las opciones
  
    Usando el grid, se puede poner en cualquiera de estas posiciones
 * @param escena Escena
 */
export function setUpSceneWithGrid(escena: Escena): void {
  const rows = 4,
    cols = 5;

  // Put In Grid function, is a function that puts something in a grid
  const grid = vec2(rows, cols),
    putInGrid = getGridPositionFunction<Character<AreaComp & ScaleComp>>(grid);

  // Prompt text
  putInGrid(vec2(2, 0), [text(escena.mensaje, textConfigs.prompt)], "top");

  // Counter para pasar por todas las opciones
  let counter = 0;

  // Este loop pasa por todas las opciones, y las pone en las coordenadas específicas en la documentación de la función
  for (let j = cols - 2; j < cols; j++) {
    for (let i = 1; i < rows; i += 2) {
      const opcion = escena.listaOpciones[counter];
      counter++;

      if (!opcion) break;

      const { texto, siguienteEscenaId, escenaAnteriorId } = opcion;

      const nextScene = miHistoria.getScene(siguienteEscenaId);
      const siguienteEscena = nextScene?.esFinal
        ? scenesId.final
        : scenesId.escena;

      /**
       * Acciones del boton
       *
       * Estas incluyen:
       *  - Ir a la siguiente escena si se le pica al boton
       *  - Crecer si se hace un hover en el boton
       */
      const boton = putInGrid(
        vec2(i, j),
        [text(texto, textConfigs.option), area({ cursor: "pointer" })],
        "center"
      );

      boton.clicks(() => {
        go(siguienteEscena, nextScene, escenaAnteriorId);
      });

      boton.hovers(
        () => {
          boton.scale = vec2(1.2);
        },
        () => {
          boton.scale = vec2(1);
        }
      );
    }
  }
}
