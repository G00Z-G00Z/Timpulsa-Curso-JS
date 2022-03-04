[Ir al índice](indice.md)

# Comentarios

Los comentarios sirven para poder dejar información adicional en el código. Solamente es _texto_, no se interpreta y no afecta al rendimiento del programa. Es solamente para dejar una guía al programador.

Por ejemplo:

**Código confuso**

```javascript
let b = 10,
	h = 20;
let a = b * h;

console.log(a);
```

---

**Código con comentarios**

```javascript
/*
    Código para encontrar el área de un rectángulo
*/
let b = 10; // Donde b es la base
let h = 20; // Donde h es la altura
let a = b * h; // Donde a es el área

console.log(a);
```

## Sintaxis de un comentario

**Comentario de una linea**

```javascript
// Hola, soy un comentario
```

**Comentario de varias lineas**

```javascript
// Todo lo que esté dentro de /* ... */ es comentario

/*
__________________
< Hola, soy un comentario >
 ------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
*/
```

[Go to the top](#comentarios)
