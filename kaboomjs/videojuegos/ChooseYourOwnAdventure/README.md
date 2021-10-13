# Choose your own adventure

Created: September 29, 2021 8:10 PM

# Link al videojuego

[Link al videojuego](https://replit.com/@EduardoGmez1/Choose-your-own-adventure#README.md)

---

## Temas en relación al curso

- [ ] Scenes
- [ ] if else
- [ ] hash maps
- [ ] buttons and mouse events

# Idea

El videojuego es que los alumnos escriban una historia en Json, y después, desplegarla en un videojuego donde sea un aventura. Tiene enfasis en los scenes de `kaboomjs` y como moverse en las escenas.

---

[Progreso](https://www.notion.so/7ba8ff82db8d40b88b84cb639cb3071a)

---

# Diseño

[](https://www.figma.com/file/Nm2E9wGuLxU3vOeQhHCrzS/Choose-your-own-adventure?node-id=0%3A1)

---

# Programación y conceptos importantes

- El cambio de escena tienen que estar dentro de un `action`

## Formato de una historia

```tsx
/*
Opcion dentro de una escena
*/
export interface Opcion {
	texto: string;
	siguienteEscenaId: string;
}

/*
Información de una Escena
*/
export interface Escena {
	mensaje: string;
	listaOpciones: Opcion[];
	esFinal: boolean;
}

/*
Donde la llave, es el id de la escena
*/
export interface Historia {
	[key: string]: Escena;
}
/**
 * Funcion que fabrica escenas
 */
export type fabricaEscena = (
	mensaje: string,
	listaOpciones: Opcion[]
) => Escena;

/**
 * Funcion que fabrica escenas
 */
export type fabricaEnding = (mensaje: string) => Escena;

/**
 * Funcion que fabrica opciones
 */
export type fabricaOpcion = (
	texto: string,
	siguienteEscenaId: string
) => Opcion;
```

---

# Comentarios generales

Para poder generar el código a javascript, simplemente usa el compilador de `typescript`. Luego se genera una carpeta `dist/` con los archivos en formato de `nodejs`. Comoquiera, el compilador está configurado para que también acepte `javascript`, entoncecs se puede escribir código de javascript sin problema.

---

# Ideas de otros lugares y links
