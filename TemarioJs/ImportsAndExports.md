[Ir al índice](indice.md)

# Imports\_&_Exports

Por el momento, solamente hemos trabajar en un solo archivo a la vez. Ponemos todas las funciones y variables en un solo archivo. Esto, en la práctica, no es recomendable. Se vuelve difícil encontrar funciones y poder resolver problemas.

Adicionalmente, muchas veces hay funciones que son muy similares que podrían estar agrupadas, pero por estar todas en un mismo archivo se pueden perder.

Afortunadamente, en `nodejs` (que es el interprete que se usa en `replit`) permite separar tu código en diferentes archivos de `javascript`.

> En `nodejs` no se les llama _archivos_, si no más bien se les dice _modulos_ (pero escencialmente es lo mismo)

Separar archivos, permite tener una mejor organización de tu código, y que el código se vea mucho más limpio.

## Ejemplo

```javascript
// Programa que hace operaciones matematicas

// Funciones de calculadora
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

// Funciones para el prompt
const prompt = require("prompt-sync")();

function getNumber(message) {
	const n = prompt(message);
	return Number(n);
}

function getOperation() {
	console.log("Que quieres hacer? ");
	console.log("[1] Sumar ");
	console.log("[2] Restar ");
	console.log("[3] Multiplicar ");
	console.log("[4] Dividir ");

	const userAns = getNumber("Dame un numero");

	if (userAns === 1) return sumar;
	if (userAns === 2) return restar;
	if (userAns === 3) return multiplicar;
	if (userAns === 4) return dividir;
}

// Programa

const number1 = getNumber("Dame un numero");
const number2 = getNumber("Dame otro numero");
const operacion = getOperation();

console.log(`Tu resultado es de ${operacion(number1, number2)}`);
```

Como se puede ver, este pequeño programa se puede revolver bastante y es muy complicarlo tenerlo en un solo archivo. Entonces lo que usualmente se hace es separarlo en varios archivos para tener un mejor orden:

**operaciones.js**

```javascript
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const dividir = (a, b) => a / b;
export const multiplicar = (a, b) => a * b;

// Se usa export, para que otros modulos puedan importar la función
```

**userInput.js**

```javascript
// Se usa import, para poder obtener las funciones exportadas de otros modulos
import { sumar, restar, multiplicar, dividir } from "./operations";

// Ojo, si no pones export, otros modulos no podrán ver el objeto
const prompt = require("prompt-sync");

export function getNumber(message) {
	const n = prompt(message);
	return Number(n);
}

export function getOperation() {
	console.log("Que quieres hacer? ");
	console.log("[1] Sumar ");
	console.log("[2] Restar ");
	console.log("[3] Multiplicar ");
	console.log("[4] Dividir ");
	const userAns = getNumber("Dame un numero");
	if (userAns === 1) return sumar;
	if (userAns === 2) return restar;
	if (userAns === 3) return multiplicar;
	if (userAns === 4) return dividir;
}
```

**main.js**

```javascript
import { getNumber, getOperation } from "./userInput";

const number1 = getNumber("Dame un numero");
const number2 = getNumber("Dame otro numero");
const operacion = getOperation();

console.log(`Tu resultado es de ${operacion(number1, number2)}`);
```

Como se puede ver, usar `import` y `export` permite organizar mejor tu código para que sea más fácil de
entender

> Usualemente por convención, el modulo donde se tiene que iniciar el programa se llama `index.js` o `main.js`.
> Puedes exportar cualquier tipo de cosas (funciones, variables, etc)

[Go to the top](#Imports_&_Exports)
