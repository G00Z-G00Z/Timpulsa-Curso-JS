[Ir al índice](indice.md)

# Objetos

Los objetos son un tipo primitivo en `Javascript`. Sirve para guardar variables en un _hash map_ o en otras palabras, en _key-value_ pair. Es como un arreglo, pero en vez de índices numéricos, pueden ser palabras.

Los objetos sirven mucho para guardar información de manera un poco más ordenada, y para acceder información sobre algo de manera rápida.

Al igual que un arreglo, tu puedes guardar lo que sea en el objeto (inlcuso otros objetos!!).

## Ejemplo

```javascript
const persona = {}; // Creacion de un objeto

persona["nombre"] = "Marcelo"; // Se puede usar como si fuera un arreglo
persona.edad = 12; // Se puede escribir directamente la palabra
persona["pasatiempos"] = ["videojuegos", "deportes"];
persona.tieneMascota = false;

console.log(persona);
/* Resultado del console.log
	{
		nombre: 'Marcelo', 
		edad: 12, 
		pasatiempos: ['videojuegos', 'deportes'], 
		tieneMascota: false
	}
*/
```

Opcionalmente, también se puede declarar los objetos de la siguiente manera:

```javascript
const persona = {
	nombre: "Marcelo",
	edad: 12,
	pasatiempos: ["videojuegos", "deportes"],
	tieneMascota: false,
};
```

Adicionalmente de guardar información en parejas, es muy fácil acceder a la información:

```javascript
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona["tieneMascota"]);
console.log(persona.telefono); // Ojo que no se ha declarado el telefono de una persona

/*
	"Marcelo"
	12
	false
	undefined
*/
```

> A las llaves, también se les puede llamar _atributos_ o _propiedades_

> Cuando se accede un atributo que no ha sido declarado, siempre regresa `undefined` por lo que es muy sencillo saber si un objeto tiene o no un atributo.

# Funciones en objetos

Como se había mencionado antes, los objetos pueden guardar cualquier tipo de cosas como atributos, inclusive _funciones_:

```javascript
const persona = {
	nombre: "Marcelo",
	saludar() {
		console.log("Hola comom estas?");
	},
};

persona.saludar(); // "Hola como estas"
```

A parte de tener funciones, esas funciones pueden referenciar al objeto mismo con la keyword `this`:

```javascript
const persona = {
	nombre: "Marcelo",
	saludar() {
		console.log(`Hola, soy ${this.nombre}`);
	},
};

persona.saludar(); // "Hola, soy Marcelo"
```

Como se puede ver en el ejemplo, la palabra `this` hace referencia al mismo objeto, entonces puedes usar sus atributos dentro de si mismo.

```javascript
const persona = {
	nombre: "Marcelo",
	edad: 12,
	crecer() {
		this.edad++;
	},
	decirEdad() {
		console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
	},
};

persona.decirEdad(); // Hola, soy Marcelo y tengo 12 años
persona.crecer();
persona.decirEdad(); // Hola, soy Marcelo y tengo 13 años
```

# For in

Los objetos, son interables, pero a diferencia de los arreglos, se tiene que usar un ciclo _for in_ como se muestra:

```javascript
for (const key in object) {
	const value = object[key];
}
```

# Fábricas de objetos

A veces, hay la necesidad de crear muchos objetos similares. Por ejemplo:

```javascript
const persona1 = {
	nombre: "Marcelo",
	edad: 12,
	crecer() {
		this.edad++;
	},
	decirEdad() {
		console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
	},
};
const persona2 = {
	nombre: "Gabriela",
	edad: 13,
	crecer() {
		this.edad++;
	},
	decirEdad() {
		console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
	},
};
const persona3 = {
	nombre: "Sam",
	edad: 12,
	crecer() {
		this.edad++;
	},
	decirEdad() {
		console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
	},
};
```

Pero esto es mucho código repetido. Por eso, usualmente se usa lo que se le llama _Fábrica de objetos_.

> Una _Fábrica de objetos_ es una función se encarga de la creación de un objeto.

En otras palabras, hacemos una función que reciba los parámetros para hacer un objeto.

```javascript

// Fabrica de personas
fabricaPersonas(nombre, edad){
	const persona = {
		nombre : nombre,
		edad : edad,
		crecer() {
        	this.edad++;
    	},
    	decirEdad() {
        	console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    	},
	}

	return persona
}

const persona1 = fabricaPersonas("Marcelo",12)

const persona2 = fabricaPersonas("Gabriela",13)

const persona3 = fabricaPersonas("Sam",12)


```

## Pasar objetos por referencia

Los objetos pueden ser parámetros de una función. Sin embargo, los objetos que se pasan a como parámetros, se pasan _por referencia_.

Esto significa, que puedes cambiar el objeto dentro de la función.

```javascript
const miPersona = {
	nombre: "Eduardo",
	edad: 21,
};

function cambiarNombre(persona, nombreNuevo) {
	persona.nombre = nombreNuevo;
}

function agregarMascotaPerro(persona, nombreMascota) {
	persona.mascota = {
		nombre: nombreMascota,
		tipo: "Perro",
	};
}

cambiarNombre(miPersona, "Javier");

agregarMascotaPerro(miPersona, "Lea");

console.log(miPersona);
/*
	{
		nombre: "Javier", 
		edad : 21, 
		mascota: {
			nombre: "Lea", 
			tipo : "Perro"
		}
	}

*/
```

## Ejemplo

_Has un programa donde guardes la información de 2 personas, y luego la despliegues en pantalla_

```javascript
const prompt = require("prompt-sync")();
// Ejemplo sin objeto
const nombre1 = prompt("Dame tu nombre");
const edad1 = prompt("Dame tu edad");

console.log(`Tu nombre es ${nombre1} y tu edad es ${edad1}`);

const nombre2 = prompt("Dame tu nombre");
const edad2 = prompt("Dame tu edad");

console.log(`Tu nombre es ${nombre2} y tu edad es ${edad2}`);
```

```javascript
const prompt = require("prompt-sync")();
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

---

> Hacer un programa que cuente cuantas letras hay de cada tipo, en un string

_Ejemplo_

```javascript
const frase = "Hola como estas?";

console.log(countCharacters(frase));
/*
{
  H: 1,
  o: 3,
  l: 1,
  a: 2,
  ' ': 2,
  c: 1,
  m: 1,
  e: 1,
  s: 2,
  t: 1,
  '?': 1
}
*/
```

**Solución**

```javascript
function countCharacters(frase) {
	/**
	 * Donde las llaves son el tipo de letras, y el valor es cuantas veces aparecio
	 */
	const listaLetras = {};

	for (let i = 0; i < frase.length; i++) {
		const letra = frase[i];

		if (listaLetras[letra]) listaLetras[letra]++;
		else listaLetras[letra] = 1;
	}

	return listaLetras;
}
```

# Referencias

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

[Go to the top](#objetos)
