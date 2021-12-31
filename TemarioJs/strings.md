[Ir al índice](indice.md)

# Strings

Como ya se ha visto, los strings son arreglos de caracteres. Ya que son muy comunes, existen varias funciones para poder manipular los strings:

| método                            | explicación                                                                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| length                            | Regresa la longitud del string                                                                                                                                    |
| \[_digito_\]                      | Accede al caracter en la posición _digito_                                                                                                                        |
| toUpperCase()                     | Convierte el string a mayúsculas                                                                                                                                  |
| toLowerCase()                     | Convierte el string a minúsculas                                                                                                                                  |
| includes(_str_)                   | Checa si el string tiene en alguna parte el str                                                                                                                   |
| endsWith(_str_)                   | checa si termina con cirto string                                                                                                                                 |
| startsWith(_str_)                 | Checa si empieza con cierto string                                                                                                                                |
| repeat(_int_)                     | repite el string un número de veces                                                                                                                               |
| substring(_separation_, \[_end_]) | extrae una parte del string, empezando desde el índice de _separación_ y opcionalmente, termina en el índice de _end_ (si no hay indice de _end_, se va al final) |
| repeat(_int_)                     | repite el string un número de veces                                                                                                                               |
| split(_str_)                      | parte el string donde encuentre _str_, y lo convierte en un arreglo                                                                                               |

> Adicionalmente, hay un método para **los arreglos** para generar un string: _arr_.join(_str_) junta un arreglo con un separador _str_ y devuelve un string.

---

# Caractéres especiales

Hay unos caracteres que son especiales, que cumplen con una función específica. Por ejemplo: `\n` sirve para insertar un "enter" en tu texto:

```javascript
const frase = "Hola \nComo estás?";

console.log(frase);

/*
 *Hola
 Como estás?
*/
```

Los más importantes son :

| Caracter | Funcion |
| -------- | ------- |
| \n       | enter   |
| \t       | tab     |

Aqui hay una lista de caractéres especiales

# Template literal `

Los string se pueden concatenar (juntar) con el operador de suma, como se muestra a continuación

```javascript
const comidaFav = "Sushi";
let frase = "Mi comida favorita es: " + comidaFav;
frase += "!!!";

console.log(frase); // Mi comida favorita es Sushi!!!
```

Sin embargo, `javascript` proporciona una manera de acortar el código de arriba, usando "`" (backticks) de la siguiente manera:

```javascript
const comidaFav = "Sushi";
const frase = `Mi comida favorita es ${comidaFav}!!!`;

console.log(frase); // Mi comida favorita es Sushi!!!
```

Dentro de {}, puedes hacer operaciones o cualquier método de `javascript`

```javascript
const perros = 10;
const gatos = 12;

console.log(`Tengo ${perros + gatos} mascotas`); // Tengo 22 mascotas
```

# Strings == Areglos

Los strings, se parecen mucho a los arreglos, ya que puedes acceder por un indice a los caracteres, y puedes hacer iteraciones con ciclos _for of_

```javascript
const frase = "Hola como estas";

for (const char of frase) {
	console.log(char);
}
```

# Ejercicio

> Hacer una funcion que revierta un string en mayúsculas

```javascript
function reverseStr(str) {
	return str.split("").reverse().join("");
}
```

> Dado una lista de profesionistas, determinar si son doctores o ingenieros

> Una lista se podría ver así

```javascript
const lista = ["Ing. Rebeca", "Dr. Manuel", "Dr. María", "Ing. Carlos"];
```

```javascript
function cualProfesion(lista) {
	const prefixDr = "Dr.",
		prefixIng = "Ing.";
	for (const profesionista of lista) {
		if (profesionista.startsWith(prefixDr)) console.log("Es doctor");
		if (profesionista.startsWith(prefixIng)) console.log("Es ingeniero");
	}
}
```

[Go to the top](#strings)

# Referencia

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
