# 🤠Choose your own adventure

[ChooseYourOwnAdventure](https://replit.com/@EduardoGmez1/Choose-your-own-adventure#README.md) es un videojuego en el que los alumnos escriban una historia en un objeto, desplegarla en un videojuego donde sea un aventura con múltiples finales. Tiene enfasis en los scenes de `kaboomjs` y como moverse en las escenas con argumentos.

Created: September 29, 2021 8:10 PM

# 👩‍🏫Temas en relación al curso de `javascript`

- Scenes
- if else
- hash maps
- buttons and mouse events

# 🔺Diseño

[Diseño en Figma](https://www.figma.com/file/Nm2E9wGuLxU3vOeQhHCrzS/Choose-your-own-adventure?node-id=0%3A1)

# ⌨Programación y conceptos importantes

- El cambio de escena tienen que estar dentro de un `action`
- El objeto de `historia` usa la keyword `this`
- Las escenas se pasan argumentos para cambiar de escena

## 🏥Interfaces del proyecto

Aunque `javascript` no tiene “interfaces”, en `typescript` se usan para organizar las variables.

```tsx
/*
Opcion dentro de una escena
*/
export interface Opcion {
	texto: string;
	siguienteEscenaId: string;
	escenaAnteriorId?: string;
}

/*
Información de una Escena
*/
export interface Escena {
	mensaje: string;
	id: string;
	listaOpciones: Opcion[];
	esFinal: boolean;
}

/*
Este es un objeto que guarda las escenas 
*/
export interface Historia {
	listaEscenas: {
		[key: string]: Escena;
	};
	readonly startingSceneId: string;
	addScene(escena: Escena): void;
	getScene(id: string | number): Escena | undefined;
}
/**
 * Funcion que fabrica escenas
 */
export type fabricaEscena = (
	escenaId: string,
	mensaje: string,
	listaOpciones: Opcion[]
) => Escena;

/**
 * Funcion que fabrica escenas
 */
export type fabricaEnding = (escenaId: string, mensaje: string) => Escena;

/**
 * Funcion que fabrica opciones
 */
export type fabricaOpcion = (
	texto: string,
	siguienteEscenaId: string
) => Opcion;

/**
 * Es un objeto que devuelve un objeto de historia
 */
export type fabricaHistoria = (startingSceneId: string) => Historia;
```

# 🛠Comentarios generales sobre el compilador de `typescript`

El compilador de `Typescript`, sirve para tener un sistema de tipado en `Javascript`. Esto ayuda a que no se cometan errores de tipo. Las configuraciones del compilador se encuentran en `tsconfig.json`. Esta configurado para que compile a `nodejs` moderno y acepta código de `javascript`.

_Por propósitos de enseñanza_ : Evitar usar features de `typescript` que no existan en `javascript`. Por ejemplo:

- Enum
- Visibility in classes

> Estos compilan en código anormal en javascript, y no se enseñarán en el curso.

## 🧐Para poder usar el compilador

1. Installar `typescript` de manera local o global.
2. En la terminal escribir los comandos:
   - `tsc` : para compilar todo el proyecto
   - `tsc -w` : para poner el compilador en _watchmode_ y que recompile cada vez que hace un cambio.

# 👨‍🎓Ideas de otros lugares y links

- https://www.fantasy-magazine.com/fm/fiction/choose-your-own-adventure/
