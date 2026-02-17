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