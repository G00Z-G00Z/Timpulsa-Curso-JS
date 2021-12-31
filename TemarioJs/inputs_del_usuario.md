[Ir al índice](indice.md)

# Inputs usuario

Cuando se ejecuta un programa, puede que el programa no tenga toda la información para ejecutarse. Puede que tenga un menu que esté esperando una opción del usuario. Puede que deba calcular algo en base a la respuesta de un usuario.

En otras palabras, hay veces que el programa necesita ser capaz de obtener información del usuario.

Para eso, se debe poder comunicar con el usuario, y recibir información del usuario.

## Outputs

Para sacar información a consola, la función `console.log()` sirve para escribir en la consola.

```javascript
console.log("Hola mundo"); // Hola mundo
```

## Inputs

Se puede de 2 maneras.

### Sin dependencias

De manera "nativa" que no requiere ninguna dependencia, pero es un poco complicado. Se necesita crear una interface para que se pueda leer los argumentos de consola, y luego se necesitan callbacks para poder acceder a la información.

```javascript
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question("Who are you?", (name) => {
	console.log(`Hey there ${name}!`);
	readline.close();
});
```

### Con dependencias

Se tiene que instalar la librería de `prompt-sync` para poder usar prompts de manera sencilla. Pero `node` lo instala de manera automática, entonces no hay problema:

```javascript
const prompt = require("prompt-sync")();

const name = prompt("What is your name?");
console.log(`Hey there ${name}`);
```

# Ejercicio

> Has un programa en el usuario ponga su peso y su estatura y calcule su bmi

```javascript
const prompt = require("prompt-sync")();

const peso = getNumber("Dame tu peso en kg: ");
const estatura = getNumber("Dame tu estatura en cm: ");

const bmi = peso / (estatura / 100) ** 2;

console.log(`Tu bmi es ${bmi}`);

function getNumber(message) {
	const n = prompt(message);
	return Number(n);
}
```

# Referencias

- https://www.codecademy.com/articles/getting-user-input-in-node-js
