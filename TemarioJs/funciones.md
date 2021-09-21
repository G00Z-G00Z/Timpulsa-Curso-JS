[Ir al índice](indice.md)

# Funciones

- [Introducción](#introducción)
- [Sintaxis](#declaración-de-una-función)
- [Ejemplos](#ejemplos-de-funciones)
- [Ejercicios](#ejercicios)

## Introducción

> Una función, es un bloque de código que hace algo.
> Esta función, se puede _invocar_ o _llamar_ para que haga la función.

### Ejemplo

```javascript
/**
 * Funcion que manda un saludo a la consola
 */
function decirHola() {
	console.log("Hola mundo!!");
}
```

Para llamar a la función, basta con solamente escribir el nombre de la función, seguido de parentesis:

```javascript
decirHola();
```

En la consola aparecería

`Hola mundo!!`

---

La ventaja de tener funciones, es que puedes reutilizar código sin tener que hacer copiar y pegar el bloque de código.

Por ejemplo:

```javascript
// Puedes repetir el código de manera sencilla
decirHola();
decirHola();
decirHola();
```

Adicionalmente, a las funciones se les pueden pasar _argumentos_, para cambiar su comportamiento. También, se pueden regresar _outputs_ (resultados), los cuales pueden ser usados como variables.

```javascript
function suma(a, b) {
	return a + b;
}

const n1 = 1;
const n2 = 2;

const resultado = suma(n1, n2);

console.log(resultado); // Regresa 3
```

## Declaración de una función

En `javascript` puedes la función de dos maneras:

**Declaracion de función tradicional**

```javascript
function nombreDeFuncion(argumento1, argumento2...) {

    return output1, output2 ...
}
```

**Declaracion de un arrow function**

```javascript
const nombreDeFuncion = (argumento1, argumento2...) => {
    return output1, output2...
}
```

| Parte de Función | Descriptción                                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| _function_       | Esta es una palabra clave, que se usa para declarar funciones                                                     |
| argumento        | Argumentos que cambian el comportamiento de las funciones. Se se separan con coma para poner múltiples argumentos |
| output           | El valor de regreso de la función. Es como el resultado. Aunque puede haber funciones que no regresen nada.       |

---

**Ejemplo**

```javascript
function sumar(a, b) {
	const resultado = a + b;
	return resultado;
}

sumar(1, 2); // resultado = 1 +  2 = 3
sumar(10, 20); // resultado = 10 + 20 = 30
sumar(6, 12); // resultado = 6 + 12 = 18
```

_Ojo_: Cuando una función no regresa nada, y se está asignando, siempre regresará `undefined`

```javascript
function noHagoNada() {}

const resultado = noHagoNada(); // resultado = undefined
```

## Ejemplos de funciones

```javascript
/*
 * Funcion que regresa un si un número es par o no es par
 */
function esPar(n) {
	return n % 2 === 0;
}

/**
 * Funcion que saluda una persona
 */
const saludarPersona = (nombre) => {
	console.log(`Hola, ${nombre}!!`);
};
```

## Ejercicios y solución

> Función que sume los números del 1 hasta un número `n`

**Solución**

```javascript
// Solución con iteraciones
function sumarN(n) {
	let total = 0;

	for (let i = 1; i < n + 1; i++) total += i;

	return total;
}

// Solución matemática
function sumarN(n) {
	return (n * (n + 1)) / 2;
}
```

---

> Función que te diga si eres mayor de edad

```javascript
function esMayorDeEdad(edad) {
	return edad >= 18;
}
```

---

> Función que imprima un cuadrado formado por el caractér que le pases, y de tamaño n x n

- Ejemplo

```javascript
imprimirCuadrado("+", 4);
/* Resultado
++++
+  +
+  +
++++
*/
imprimirCuadrado("#", 3);
/* Resultado
###
# #
###
*/
```

**Solución**

```javascript
const imprimirCuadrado = (char, n) => {
	let lineaCompleta = "";

	for (let i = 0; i < n; i++) lineaCompleta += char;

	let lineaEspaciada = "";

	for (let i = 0; i < n; i++)
		if (i === 0 || i + 1 === n) lineaEspaciada += char;
		else lineaEspaciada += " ";

	let resultado = "";

	resultado += lineaCompleta + "\n";

	for (let i = 1; i < n - 1; i++) {
		resultado += lineaEspaciada + "\n";
	}

	resultado += lineaCompleta;

	return resultado;
};
```

## Referencias

- https://www.w3schools.com/js/js_functions.asp#:~:text=A%20JavaScript%20function%20is%20a,invokes%20it%20(calls%20it).

[Go to the top](#funciones)
