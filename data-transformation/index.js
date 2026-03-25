//Database
const users = [
    {id: 1, name: "Tadeo", active: true},
    {id: 2, name: "Alejandra", active: true},
    {id: 3, name: "Zarina", active: true},
    {id: 4, name: "Eduardo", active: false},
];

//creating an indexed data structure form an existing collection
//now we can search specific users faster
const usersById = users.reduce((acc, user)=>
    {
        acc[user.id] = user;
        return acc;
    }, {})

//and we can do the same with products
const products = [
    {id: 1, name: 'Keyboard', price: 100},
    {id: 2, name: 'Guitar', price: 200},
    {id: 3, name: 'Bass', price: 300},
    {id: 4, name: 'Drums', price: 400},
    {id: 5, name: 'Flute', price: 500},
    {id: 6, name: 'Oboe', price: 600},
];

const productsById = products.reduce((acc, product)=> {
    acc[product.id] = product;
    return acc;
}, {});

const orders = [
    {id: 1, userId: 1, productsIds: [1, 2], paid: true},
    {id: 2, userId: 3, productsIds: [3, 4], paid: true},
    {id: 3, userId: 2, productsIds: [6, 5, 3], paid: true},
    {id: 4, userId: 4, productsIds: [1, 6, 4], paid: true},
    {id: 5, userId: 2, productsIds: [2, 5], paid: true},
    {id: 6, userId: 3, productsIds: [3, 5], paid: true},
    {id: 7, userId: 4, productsIds: [2, 4], paid: true},
    {id: 8, userId: 3, productsIds: [6, 3, 2], paid: true},
    {id: 9, userId: 2, productsIds: [1, 5], paid: true},
    {id: 10, userId: 1, productsIds: [6, 3], paid: true},
];

//Getting active users
const active_users = users.filter(user => user.active == true);
console.log("Active users: ",active_users);

//Getting only products names
const products_names = products.map(product => product.name);
console.log("Products names: ", products_names);

//Searching for a particular user by their ID
const particular_user = users.find(user => user.id === 1);
console.log("Particular user: ", particular_user);

//Checking the status of the orders
const all_paid = orders.every(order => order.paid === true);
console.log("¿Are all the orders paid? ", all_paid);

//Checking the users status
const is_there_an_inactive_user = users.some(user => user.active === false);
console.log("¿Is there an inactive user? ", is_there_an_inactive_user);

//Calculating the total price of an order
const order = orders.find(order => order.id === 1);
const product_orders = [];
for(var i = 0; i < order.productsIds.length; i++)
    {
        const product = products.find(product => product.id == order.productsIds[i]);
        product_orders.push(product);
    }

const total = product_orders.reduce((acc, product) => acc + product.price,0);
console.log("Total: ", total);
//Using map
const product_orders_2 = order.productsIds.map(pId => products.find(p => p.id == pId));
const total_2 = product_orders_2.reduce((acc, p) => acc + p.price, 0);
console.log("Total: ", total_2);

//Changing the orders format
const new_orders = orders.map(o => {

    const user = usersById[o.userId];
     
    const orderProducts = o.productsIds.map(pId => productsById[pId]);

    return {
        id: o.id,
        user: user.name,
        products: orderProducts.map(p => p.name),
        total: orderProducts.reduce((acc, p) => acc + p.price, 0),
        paid: o.paid
    }

})

console.log(new_orders);

//Calculating total billing for paid orders
const total_billing = new_orders.filter(no => no.paid == true).reduce((acc, no) => acc + no.total, 0);
console.log("Total billing for paid orders: ", total_billing);

//Create a copy of the user and add a property to it (using 'spread')
const enriched_user = {...particular_user, mail: 'taeoaraujof@gmail.com' };
console.log("New enriched user: ", enriched_user);

//Using 'destructuring'
const {id, name, mail} = enriched_user;
console.log("Enriched user destructuring data: ", "Id: " + id + " Name: " + name + " Mail: " + mail);