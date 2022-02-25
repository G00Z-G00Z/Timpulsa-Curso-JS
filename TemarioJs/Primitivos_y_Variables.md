[Ir al índice](indice.md)

# Primitivos_&_Variables

## Qué es una variable

> Una variable es un contenedor para un valor, como un número que podríamos usar en una suma, o una cadena que podríamos usar como parte de una oración.
> Los valores de una variable pueden cambiar.

```javascript
let nombre = "Eduardo";
nombre = "Manuel";
```
---
## Declarar una variable
> Para utilizar una variable, debe declararse utilizando la palabra clave var o let seguida del nombre con el que deseas llamar a tu variable.

```javascript
let miNombre;
let miEdad;
```
> Actualmente no tienen ningún valor, son contenedores vacíos.

> También se pueden declarar variables constantes, con la particularidad de que estas no se pueden cambiar por medio de la reasignación.

```javascript
const edad = 15;
```

---

## Iniciar una variable

> Una vez que hayas declarado una variable, la puedes iniciar con un valor. Para ello, escribe el nombre de la variable, seguido de un signo igual (=), seguido del valor que deseas darle. Por ejemplo:

```javascript
miNombre = "Jorge";
miEdad = 26;
```
## Tipo de datos

### Number
> Number es un tipo de datos numérico.

```javascript
let num = 15;
let day = 31;
let money = 11.18;
```

### String
> En cualquier lenguaje de programación, un string es una secuencia de caracteres usada para representar el texto.

```javascript
let nombre = "nombre";
let estado = "completado";
let pais = "México"
```

### Boolean
> En ciencias de informática, un boolean es un dato lógico que sólo puede tener los valores true o false.

```javascript
let T = true;
let F = false;
```

> Existen otras cosas que puedes guardar en variables, pero eso lo descubrirás más adelante.

## Ejercicios y solución
> Declara una variable 'nombre' y después iníciala con tu nombre.

*Solución*

```javascript
let nombre;
nombre = "Nombre del alumno" //Debe estar entre comillas
```
--- 
> Crea una variable, asígnale un valor numérico, después asígnale un valor booleano, y al final asígnale un string.

*Solución*

```javascript
let variable;
variable = 15;
variable = true;
variable = "Gato";
```
## Referencias

- https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

[Go to the top](#Primitivos_&_Variables)
