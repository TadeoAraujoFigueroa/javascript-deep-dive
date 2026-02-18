//Práctica de métodos de arrays en JavaScript
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 },
    { id: 5, name: 'Eve', age: 45 },
    { id: 6, name: 'Frank', age: 50 },
    { id: 7, name: 'Grace', age: 55 }
];

//Ejemplo de uso de map para obtener un array con los nombres de los usuarios
//Funciona igual que el método Select() en C#, trayendo solo la propiedad que queremos del objeto, en este caso el nombre.
const userNames = users.map(user => user.name);
console.log(userNames); // Salida: ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace']

//Ejemplo de uso de filter para obtener un array con los usuarios mayores de 30 años
//Funciona igual que el método Where() en C#, filtrando los objetos del array según una condición, en este caso la edad mayor a 30.
const usersOver30 = users.filter(user => user.age > 30);
console.log(usersOver30); // Salida: [{ id: 3, name: 'Charlie', age: 35 }, { id: 4, name: 'David', age: 40 }, { id: 5, name: 'Eve', age: 45 }, { id: 6, name: 'Frank', age: 50 }, { id: 7, name: 'Grace', age: 55 }]

//Ejemplo de uso de find para obtener el primer usuario con el nombre 'David'
//Funciona igual que el método FirstOrDefault() en C#, buscando el primer objeto del array que cumpla una condición, en este caso el nombre sea 'David'.
const userDavid = users.find(user => user.name === 'David');
console.log(userDavid); // Salida: { id: 4, name: 'David', age: 40 }

//Ejemplo de uso de reduce para obtener la suma de las edades de los usuarios
//Basicamente, aplica la función que le pasamos a cada elemento del array, y va acumulando el resultado en el primer parámetro (sum), que inicia con el valor que le pasamos al final (0).
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
//El ultimo parámetro (0) es el valor inicial de sum, que en este caso es 0 porque queremos sumar las edades. Si no le pasamos un valor inicial, sum empezaría con el valor del primer elemento del array, lo cual no es lo que queremos en este caso.
console.log(totalAge); // Salida: 280

//Ejemplo de uso de some para verificar si hay algún usuario menor de 30 años
//Funciona igual que el método Any() en C#, verificando si al menos un objeto del array cumple una condición, en este caso la edad menor a 30.
const hasUsersUnder30 = users.some(user => user.age < 30);
console.log(hasUsersUnder30); // Salida: true

//Ejemplo de uso de every para verificar si todos los usuarios son mayores de 20 años
//Funciona igual que el método All() en C#, verificando si todos los objetos del array cumplen una condición, en este caso la edad mayor a 20.
const allUsersOver20 = users.every(user => user.age > 20);
console.log(allUsersOver20); // Salida: true

//Ejemplo de uso de forEach para convertir los nombres de los usuarios a mayúsculas
//Funciona igual que el método ForEach() en C#, ejecutando una función para cada elemento del array, en este caso modificando la propiedad name de cada objeto para convertirla a mayúsculas.
users.forEach(user => user.name = user.name.toUpperCase());
