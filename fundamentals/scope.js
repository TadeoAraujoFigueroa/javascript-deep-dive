// DIFERENCIAS ENTRE VAR, LET Y CONST EN JAVASCRIPT
// HOISTING (ELEVACIÓN)

console.log(a)  
var a = 10;
// Salida: Undefined
// Explicación: Debido al 'hoisting', la declaración de la variable 'a' se mueve al principo del 'scope', pero no su asignación. Por lo tanto, cuando intentamos acceder a 'a' antes de su asignación, obtenemos 'undefined'.
console.log(b)
let b = 20;

// Salida: ReferenceError: No podemos acceder a 'b antes de su inicialización
// Explicación: La variable 'b' también es elevada por el 'hositing', pero se encuentra en una "zona muerta temporal" (TDZ) hasta que su declaración sea evaluada. Esto significa que no puedes acceder a 'b' antes de que sea declarada, resultando en un ReferenceError.

console.log(c);
const c = 30;
// Salida: ReferenceError: No podemos acceder a 'c' antes de su inicialización
// Explicación: Similar a 'b', la variable 'c' también es elevada por el 'hoisting', pero se encuentra en una "zona muerta temporal" (TDZ). No puedes acceder a 'c' antes de su declaración, lo que resulta en un ReferenceError.

test();

function test() {
    console.log(c);
    var c = 30;
    // Salida: undefined
}

// Explicación: La función 'test' es elevada por completo, por lo tanto puede ser llamada antes de su definición. Dentro de la función, la variable 'c' también es elevada, pero su asignación no lo es. Por lo tanto, cuando intentamos acceder a 'c' dentro de la función antes de su asignación, obtenemos undefined.
// Esto nos demuestra como el uso de var puede llevar a resultados inesperados debido al 'hoisting', mientras que let y const ayudan a evitar estos problemas al no permitir el acceso a las variables antes de su declaración, ya que pensandolo, en que momento quisieramos acceder a una variable no inicializada? 
// Esto hace que let y const sean opciones más seguras para declarar variables en JavaScript, ya que ayudan a prevenir errores relacionados con el 'hoisting' y la "zona muerta temporal" (TDZ).

// SCOPE (ÁMBITO)
function scopeTest() {
    var x = 10; 
    let y = 20;
    const z = 30;
    for (var i = 0; i < 1; i++) {
        var x = 100; // La variable 'x' es redeclarada y reasignada dentro del bucle, lo que afecta a la variable 'x' en el ámbito de la función.
        let y = 200; // La variable 'y' es declarada dentro del bloque del bucle, por lo que no afecta a la variable 'y' en el ámbito de la función.
        console.log(y); // Salida: 200 
        const z = 300; // La variable 'z' es declarada dentro del bloque del bucle, por lo que no afecta a la variable 'z' en el ámbito de la función.
        console.log(z); // Salida: 300
        //Podemos ver la diferencia de alcance entre var, let y const en este ejemplo. La variable 'x' es redeclarada y reasignada dentro del bucle, lo que afecta a la variable 'x' en el ámbito de la función. En cambio, las variables 'y' y 'z' son declaradas dentro del bloque del bucle, por lo que no afectan a las variables 'y' y 'z' en el ámbito de la función.
        //Let y const tienen un alcance de bloque, mientras que var tiene un alcance de función.
    }
    console.log(x); // Salida: 100
    console.log(y); // Salida: 20
    console.log(z); // Salida: 30
}       

//REASIGNACIÓN DE VARIABLES
var a = 10;
a = 20;
console.log(a); // Salida: 20

let b1 = 30;
b1 = 40;
console.log(b1); // Salida: 40

const c1 = 50;
// c1 = 60; // Esto generará un error porque no se puede reasignar una variable declarada con const.
console.log(c1); // Salida: 50
