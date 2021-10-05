[Ir al índice](indice.md)

# Loops

## Introducción

> Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.
>

### Ejemplo

```javascript
for (let step = 0; step < 5; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  console.log('Camina un paso hacia el este');
}
```

> Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción varias veces.
> La diferencia es como cada bucle determina el inicio y la condición de terminación y se pueden utilizar en diferentes situaciones.

# Declaración for

> Un ciclo for se repite hasta que una condición especificada se evalúe como false

> La estructura es la siguiente

```javascript
for (let a = 0; a < 10; a++)    //  for(expresiónInicial ; condición; actualizarVariable )
    console.log("Hola");        //  Instrucción       
```
---
1. Se ejecuta la expresión de iniciación expresiónInicial, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. Esta expresión también puede declarar variables.
2. Se evalúa la expresión expresiónCondicional. Si el valor de expresiónCondicional es verdadero, se ejecutan las instrucciones del bucle. Si el valor de condición es falso, el bucle for termina. (Si la expresión condición se omite por completo, se supone que la condición es verdadera).
3. Se ejecuta la instrucción. Para ejecutar varias instrucciones, usa una declaración de bloque ({ ... }) para agrupar esas declaraciones.
4. Si está presente, se ejecuta la expresión de actualización expresiónDeActualización.
5. El control regresa al paso 2.
 

# Declaración while

> El while repite una serie de instrucciones hasta que una condición se evalúe como falsa.

> El do...while siempre se ejecuta una vez antes de que se verifique la condición. (Para ejecutar varias instrucciones, usa una declaración de bloque ({ ... }) para agrupar esas declaraciones).

```javascript
while(x!=0)                      //  while(condición) En este caso que x sea diferente de 0
    console.log("Hola");         //  Instrucción     
    
do{
     console.log("Hola");       //  Instrucción   
}while(x!=0)                    //  while(condición) En este caso que x sea diferente de 0
     
```
---

## Ejercicios y solución

> Crea un ciclo while que imprima 5 veces un mensaje en la consola.

**Solución**

```javascript
let i = 0;
while(i<4){
    console.log("Hola");
    i++;
}

```

---

> Crea un ciclo for que divida un valor a la mitad 5 veces.

**Solución**

```javascript
let num = 35;
for(let i = 0; i<5; i++){
    num=num/2;
}
```
---
> Crea un ciclo que duplique un valor mientras este sea mayor a 100. Imprime cuantas veces se duplicó el valor

**Solución**

```javascript
let i = 0;
let num = 0;
while(i<100){
    i*=2; // Alternativa: i = i*2;
    num++;
}
console.log(num);

```

## Referencias

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

[Go to the top](#Loops)