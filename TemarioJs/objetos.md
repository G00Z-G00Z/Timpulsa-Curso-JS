[Ir al índice](indice.md)

# Objetos

Los objetos son un tipo primitivo en javascript. Sirve para guardar variables en un _hash map_ o en otras palabras, en _key-value_ pair. Es como un arreglo, pero en vez de ínices numéricos, pueden ser palabras.

## Ejemplo

_Has un programa donde guardes la información de 2 personas, y luego la despliegues en pantalla_

```javascript
// Ejemplo sin objeto
const nombre1 = prompt("Dame tu nombre");
const edad1 = prompt("Dame tu edad");

console.log(`Tu nombre es ${nombre1} y tu edad es ${edad1}`);

const nombre2 = prompt("Dame tu nombre");
const edad2 = prompt("Dame tu edad");

console.log(`Tu nombre es ${nombre2} y tu edad es ${edad2}`);
```

```javascript
// Ejemplo con objeto
const persona1.nombre = prompt("Dame tu nombre");
const persona1.edad = prompt("Dame tu edad");

console.log(`Tu nombre es ${persona1.nombre} y tu edad es ${persona1.edad}`);

const persona2.nombre = prompt("Dame tu nombre");
const persona2.edad = prompt("Dame tu edad");

console.log(`Tu nombre es ${persona2.nombre} y tu edad es ${persona2.edad}`);
```

```javascript
function getDatosPersona() {
	const persona = {};

	persona.nombre = prompt("Dame tu nombre");
	persona.edad = prompt("Dame tu edad");
	return persona;
}
// Ejemplo con objeto
const persona1 = getDatosPersona();

console.log(`Tu nombre es ${persona1.nombre} y tu edad es ${persona1.edad}`);

const persona2 = getDatosPersona();

console.log(`Tu nombre es ${persona2.nombre} y tu edad es ${persona2.edad}`);
```

```javascript
function getDatosPersona() {
	const persona = {};

	persona.nombre = prompt("Dame tu nombre");
	persona.edad = prompt("Dame tu edad");
	return persona;
}

for (let i = 0; i < 2; i++) {
	const persona = getDatosPersona();
	console.log(`Tu nombre es ${persona.nombre} y tu edad es ${persona.edad}`);
}
```

# Referencias

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

[Go to the top](#objetos)
