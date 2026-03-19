//Comportamiento asíncrono en JavaScript
// El event loop es un mecanismo que permite a JavaScript manejar operaciones asíncronas, 
// como eventos, timers y solicitudes de red, sin bloquear el hilo principal de ejecución. Esto se logra mediante una cola de tareas (task queue) y una pila de llamadas (call stack). Cuando una operación asíncrona se completa, su callback se coloca en la cola de tareas, y el event loop se encarga de ejecutar las tareas en orden cuando la pila de llamadas está vacía. Esto permite que JavaScript siga respondiendo a eventos y realizando otras tareas mientras espera que las operaciones asíncronas se completen.
// Ejemplo de stack básico
function primeraFuncion()
{
    console.log("Primera función");
    segundaFuncion();
    console.log("Fin de la primera función");
}
function segundaFuncion()
{
    console.log("Segunda función");
}

primeraFuncion();
// Salida:
// Primera función
// Segunda función
// Fin de la primera función
// En este caso, el último console.log representa el fin del stack de la primera función, y se ejecuta después de que la segunda función haya terminado su ejecución. 
// Esto demuestra cómo el stack maneja las llamadas a funciones de manera secuencial, es decir, en el orden que aparecen.
// Ejemplo de event loop con setTimeout
console.log("Inicio del programa");

b();

a();

function a()
{
    setTimeout(() => console.log("OPERACIÓN ASÍNCRONA)", 0));
    console.log("Función A");

}

function b()
{

    console.log("Función B");
}

console.log("Fin del programa");
// Salida:
// Inicio del programa
// Función B
// Función A
// OPERACIÓN ASÍNCRONA
// Fin del programa
// En este ejemplo, aunque el setTimeout tiene un tiempo de espera de 0 milisegundos, su callback se coloca en la cola de tareas (Task Queu) y se ejecuta después de que el código sincrónico haya terminado. 
// Esto demuestra cómo el event loop permite que las operaciones asíncronas se ejecuten sin bloquear el hilo principal, incluso si tienen un tiempo de espera de 0.
// Ejemplo de event loop con Promesas
// Las promesas son una forma de manejar operaciones asíncronas en JavaScript. 
// Cuando una promesa se resuelve, su callback se coloca en la cola de tareas (Microtask Queue) y se ejecuta después de que el código sincrónico haya terminado. 
// Esto permite que las promesas se manejen de manera eficiente sin bloquear el hilo principal.
// Tienen prioridad sobre las tareas de setTimeout, lo que significa que se ejecutan antes que los callbacks de setTimeout, incluso si ambos tienen un tiempo de espera de 0 milisegundos.
console.log("Inicio del programa");

b();

a();

function a()
{
    Promise.resolve().then(() => console.log("PROMESA RESUELTA"));
    console.log("Función A");   
}

function b()
{   
    console.log("Función B");
    setTimeout(() => console.log("OPERACIÓN ASÍNCRONA)", 0));
}
console.log("Fin del programa");
// Salida:
// Inicio del programa
// Función B
// Función A
// Fin del programa
// PROMESA RESUELTA
// OPERACIÓN ASÍNCRONA
// En este ejemplo, la promesa se resuelve y su callback se coloca en la cola de tareas (Microtask Queue), 
// lo que hace que se ejecute después de que el código sincrónico haya terminado, pero antes de los callbacks de setTimeout.

// Ejemplo de event loop con async/await
// Las funciones async/await son una forma de manejar operaciones asíncronas en JavaScript de manera más legible y estructurada (Azúcar sintáctico).
// Cuando una función async se ejecuta, su código se ejecuta de manera sincrónica hasta que encuentra una expresión await. 
// En ese momento, la función se pausa y el control se devuelve al event loop, lo que permite que otras tareas se ejecuten mientras espera que la operación asíncrona se complete. 
// Una vez que la operación asíncrona se completa, la función async se reanuda y continúa ejecutándose desde donde se pausó.
console.log("Inicio del programa");

async function a()
{

    console.log("COMIENZO DE FUNCIÓN A");

    await new Promise(resolve => setTimeout(resolve, 0), reject => console.error("ERROR EN LA PROMESA"));

    console.log("FIN DE FUNCIÓN A");
}

function b()
{
    console.log("Función B");
}

a();
b();

console.log("Fin del programa");

// Salida:
// Inicio del programa
// COMIENZO DE FUNCIÓN A
// Función B
// Fin del programa
// FIN DE FUNCIÓN A
// En este ejemplo, la función async 'a' se ejecuta y se pausa en la expresión await, lo que permite que la función 'b' y el console.log("Fin del programa") se ejecuten mientras espera que la operación asíncrona (el setTimeout) se complete. 
// Una vez que el setTimeout se completa, la función 'a' se reanuda y continúa ejecutándose, demostrando cómo el event loop maneja las operaciones asíncronas de manera eficiente sin bloquear el hilo principal.
//EJERCICIOs DE EVENT LOOP
console.log("1");
setTimeout(() => console.log("2)", 0));

Promise.resolve().then(() => 
    {
      console.log("3");
      return Promise.resolve();  
    }   
).then(() => console.log("4"));

console.log("5");

// Salida:
// 1
// 5
// 3
// 4
// 2

console.log("1");

setTimeout(() => console.log("4"), 0);

Promise.resolve().then(() => 
    {

        console.log("3");
        setTimeout(() => console.log("5"), 0);
    }
    )

console.log("2");
// Salida:
// 1
// 2
// 3
// 4
// 5