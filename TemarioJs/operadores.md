[Ir al índice](indice.md)

# Operadores

Los operadores permiten hacer operaciones entre datos y variables. Existen varios tipos de operadores básicos en `javascript`:

- Aritméticos
- Asignación
- Lógicos
- Comparación

## Aritméticos

Los operadores aritméticos, sirven para hacer matemáticas. Los operadores artiméticos son los siguientes:

| Operador           | Explicación                                                            | Ejemplo       |
| ------------------ | ---------------------------------------------------------------------- | ------------- |
| Suma(+)            | Suma 2 variables                                                       | 4 + 2 = 6     |
| Resta(-)           | Resta 2 variables                                                      | 4 - 2 = 2     |
| Multiplicación(\*) | Multiplicación 2 variables                                             | 4 \* 2 = 8    |
| División(/)        | División 2 variables                                                   | 4 / 2 = 2     |
| Incremento(++)     | Incremento de una variable en uno. (`x = x + 1` es lo mismo que `x++`) | x++           |
| Decremento(--)     | Incremento de una variable en uno. (`x = x - 1` es lo mismo que `x--`) | x--           |
| Modulo(%)          | Obtiene el residuo de la división entre 2 números                      | 4 % 2 = 0     |
| Exponente(\*\*)    | Eleva el primer número a la potencia del segundo                       | 4 \*\* 2 = 16 |

# Asignación

Estos operadores sirve para asignar un valor a una variable. Por ejemplo:

```javascript
let x = 10; // asigna el número 10, a la variable x
```

El más básico es el `=`, que asigna un valor a una variable. Pero existen expresiones más cortas para asignar un valor. Se presentan de la forma siguiente:

**Forma normal**

> variable = variable _operador_ valor

**Forma corta**

> variable _operador_= valor

**Ejemplo**

```javascript
let x = 10;

x = x + 3;

// Es equivalente a

x += 3;
```

> Este se puede hacer con todos los operadores aritméticos

## Lógicos

Estos sirven para evaluar expresiones booleanas

### AND &&

Solamnete da verdadero si ambos valores son verdaderos

| x1    | x2    | x1 && x2 |
| ----- | ----- | -------- |
| false | false | false    |
| false | true  | false    |
| true  | false | false    |
| true  | true  | true     |

### OR ||

Da verdadero si cualquiera de los valores es verdadero

| x1    | x2    | x1 \|\| x2 |
| ----- | ----- | ---------- |
| false | false | false      |
| false | true  | true       |
| true  | false | true       |
| true  | true  | true       |

### NOT !

Niega el valor booleano (lo invierte)

| x     | !x    |
| ----- | ----- |
| true  | false |
| false | true  |

## Comparacion

Sirve para evaluar expresiones y entregar un resultado booleano

| Operador | Explicación                            | Ejemplo           |
| -------- | -------------------------------------- | ----------------- |
| ===      | Evalua si ambos valores son iguales    | 10 === 10 (true)  |
| !==      | Evalua si ambos valores son diferentes | 10 !== 10 (false) |
| <        | Menor que                              | 1 < 10 (true)     |
| <=       | Menor o igual que                      | 10 <= 10 (true)   |
| \>       | Mayor que                              | 1 > 10 (false)    |
| <=       | Mayor o igual que                      | 10 >= 10 (true)   |

# Orden de operaciones

El orden de operaciones es en que orden `javascript` hace el orden de las operaciones:

_Ejemplo_

```javascript
4 * 5 + 5 / 5 - 2 ** 2; // ??

// Respuesta = 17
```

`Javascript` sigue un orden de operaciones **PEMDAS**

1. **P** : Parentesis
2. **E** : Exponentes
3. **M** : Multiplicación
4. **D** : División
5. **A** : Adición (Suma)
6. **S** : Substracción (Resta)

Entonces para poder manipular el orden de operaciones, puedes usar paréntesis:

```javascript
(4 * (5 + 5)) / 5 - 2 ** 2; // Con esto puedes cambiar el orden de operaciones
//  Respuesta = 4
```

> También puedes afectar el orden de las operaciones booleanas

# Referencias

- https://www.uv.es/jac/guia/jscript/javascr04.htm

[Go to the top](#operadores)
