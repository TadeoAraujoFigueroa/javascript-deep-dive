//Los closures son funciones que encapsulan una serie de variables y definiciones locales que solo pueden ser accedidas si son devueltas con el operador 'return'. Simula un entorno privado, lo que es útil para evitar la contaminación del espacio de nombres global y para crear funciones con estado.
// Esto permite que la función interna "recuerde" el entorno en el que fue creada, lo que es útil para crear funciones con estado o para encapsular datos.
// Nos permite modluarizar nuestro código y acercarnos al concepto de clases, aunque JavaScript no tenga clases en el sentido tradicional, los closures nos permiten crear objetos con métodos y propiedades privadas.
// Los conceptos de 'funciones anidadas' y 'funciones de orden superior' están estrechamente relacionados con los closures, ya que ambos implican la creación de funciones dentro de otras funciones y el acceso a variables del entorno externo. Las funciones anidadas son simplemente funciones definidas dentro de otras funciones, mientras que las funciones de orden superior son funciones que pueden tomar otras funciones como argumentos o devolverlas como resultado. Los closures se utilizan a menudo en ambos casos para mantener el estado y la privacidad de las variables.
const miContador = (
 function()
 {

    let contador = 0; // Variable privada

    function incrementar()
    {
        return contador++;
    }
    function decrementar()
    {
        return contador--;
    }
    function obtenerContador()
    {
        return contador;
    }

    return
    {
        incrementar: incrementar;
        decrementar: decrementar;
        obtenerContador: obtenerContador

    }
 }   
)

// En este ejemplo, la función anónima se ejecuta inmediatamente y devuelve un objeto con tres métodos: incrementar, decrementar y obtenerContador. Estos métodos tienen acceso a la variable contador, que es privada y no puede ser accedida directamente desde fuera del closure. Esto nos permite manipular el contador a través de los métodos proporcionados, manteniendo el estado interno encapsulado.
miContador.incrementar(); // Incrementa el contador a 1
miContador.incrementar(); // Incrementa el contador a 2
console.log(miContador.obtenerContador()); // Salida: 2
miContador.decrementar(); // Decrementa el contador a 1
console.log(miContador.obtenerContador()); // Salida: 1

//Closure simple

function outer()
{

    let count = 0;

    return function inner()
    {
        count++;
        return count;
    }
}

const contadorouter = outer();
console.log(contadorouter()); // Salida: 1
console.log(contadorouter()); // Salida: 2

//Ejemplo práctico: simulación de carrito de compras
const carrito = (
    function()
    {

        let items = []; // Variable privada para almacenar los artículos del carrito

        function agregarItem(item)
        {
            //El item que se envía como parámetro se agrega al array de items utilizando el método push.
            items.push(item);
        }
        function eliminarItem(item)
        {
            //A través de la obtención del índice del item en el array, se utiliza el método splice para eliminarlo del array si se encuentra presente.
            const index = items.indexOf(item);
            //Si el índice es mayor que -1, significa que el item se encuentra en el array y se procede a eliminarlo utilizando splice.
            if (index > -1)
            {
                items.splice(index, 1);
            }
        }
        function obtenerItems()
        {
            //Retornamos los items que posee el carrito.
            return items;
        }

        return
        {
            agregarItem: agregarItem;
            eliminarItem: eliminarItem;
            obtenerItems: obtenerItems
        }
    }
)

//Como dentro de la constante carrito tenemos la ejecución de la función anónima, podemos acceder a los métodos
// Definidos dentro de la misma, lo que nos permite manipular el estado interno del carrito, accediendo al array definido dentro del closure, sin exponerlo directamente al exterior, lo que garantiza la encapsulación de los datos y evita la contaminación del espacio de nombres global.
carrito.agregarItem("Manzana");
carrito.agregarItem("Banana");
console.log(carrito.obtenerItems()); // Salida: ["Manzana", "Banana"]
carrito.eliminarItem("Manzana");
console.log(carrito.obtenerItems()); // Salida: ["Banana"]  
carrito.eliminarItem("Naranja"); // No se encuentra el item, no se elimina nada
console.log(carrito.obtenerItems()); // Salida: ["Banana"]
