[Ir al índice](indice.md)

# Arreglos

## Introducción

> El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.
>

### Crear un array

```javascript
let frutas = ["Manzana", "Banana"];
console.log(frutas.length)
// 2
```

### Acceder a un elemento de Array mediante su índice.

```javascript
let primero = frutas[0]
// Manzana

let ultimo = frutas[frutas.length - 1]
// Banana      
```

### Recorrer un Array
```javascript
for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i]); 
    //toma como indice el valor de i, el cual comienza en 0 y termina en el ultimo calor del arreglo
}      
```

### Añadir un elemento al final de un Array
```javascript
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"] 
```

### Eliminar el último elemento de un Array
```javascript
let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]
```

## Acceso a elementos de un array

> Los índices de los arrays de JavaScript comienzan en cero, es decir, el índice del primer elemento de un array es 0, y el del último elemento es igual al valor de la propiedad length del array restándole 1.

```javascript
let arr = ['este es el primer elemento', 'este es el segundo elemento', 'este es el último elemento']
console.log(arr[0])              // escribe en consola 'este es el primer elemento'
console.log(arr[1])              // escribe en consola 'este es el segundo elemento'
console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'
     
```

## Ejercicios y solución

 Crea un arreglo que contenga 3 números, despues imprime el segundo elemento.

**Solución**

```javascript
let arreglo = [0, 5, 2];

console.log(arreglo[1]); // 5
```

---

 Agrega dos nuevos valores al arreglo del ejercicio anterior, despés imprímelo

**Solución**

```javascript
let arreglo = [0, 5, 2];
arreglo.push(9);
arreglo.push(15);
console.log(arreglo[3]); // 9
console.log(arreglo[4]); //15
```
---
Utilizando el código del problema anterior, elimina el ultimo valor del arreglo, despues haz un recorrido e imprime los valores restantes del arreglo.

**Solución**

```javascript
let arreglo = [0, 5, 2];
arreglo.push(9);
arreglo.push(15);

arreglo.pop();
for(let i = 0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}
/*
    Resultado:
    0
    5
    2
    9
*/
```

## Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

[Go to the top](#Arreglos)