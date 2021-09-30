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

## Formato de una historia

```tsx
interface Opcion {
	texto: string;
	siguienteEscenaId: string;
}

interface Escena {
	id: string;
	mensaje: string;
	listaOpciones: Opcion[];
}
```

---

# Comentarios generales

---

# Ideas de otros lugares y links
