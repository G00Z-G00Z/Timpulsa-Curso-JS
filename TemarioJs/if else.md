[Ir al índice](indice.md)

# if_else

## Introducción

> Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.

### Ejemplo

```javascript
/**
 * condición que revisa si una persona es mayor de edad
 */
if (edad>=18)
   console.log("Es mayor de edad");
else
   console.log("Es menor de edad");
```

> Para ejecutar varias sentencias en una cláusula, use una sentencia block ({ ... }) para agruparlas. Generalmente, es una buena práctica usar siempre sentencias block, especialmente en código que incluya sentencias if anidadas

```javascript

if (edad>=18){
   console.log("Es mayor de edad");
    mayor = true;
}
else{
   console.log("Es menor de edad");
    mayor = false;
}
```

> Para colocar multiples condiciones dentro de un solo if, deben utilizarse las operaciones AND y OR (&& y ||).
> AND (&&) = ambas condiciones deben cumplirse.
> OR (||) = solo una de las condiciones debe cumplirse.

# AND
```javascript 
//Materia debe ser matemáticas y la calificación mayor a 70
if(calif>=70 && materia=="matematicas")
    console.log("aprobado")
```
# OR
```javascript 
//Materia puede ser matemáticas o español
if(materia=="español" || materia=="matematicas")
    console.log("Es un curso básico")

```

---
## Ejercicios y solución

> Escribe una condición en la que se guarde en una variable llamada estado en la que, si un estudiante aprobó el examen, se guarde el string "aprobado" en caso contrario debe guardarse el string "reprobado". La calificación mínima aprobatoria es 70.

**Solución**

```javascript
let estado;
if(calif>=70)
    estado = "aprobado";
else
    estado = "reprobado";
```

---

> Escribe una condición en la que se imprima si una persona es:
> - "Adulto Mayor" si es mayor a 60 años.
> - "Mayor de edad" si se encuentra entre 18 y 59 años.
> - "Menor de edad" si es menor a 18 años.


**Solución**

```javascript
if(edad>=60)
    console.log("Adulto Mayor");
else if(edad>=18 && edad<60)
    console.log("Mayor de edad");
else if(edad<18 )
    console.log("Menor de edad");
```

## Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

[Go to the top](#if_else)