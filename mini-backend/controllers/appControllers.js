import {getUser} from "../services/user-services.js";
import {getOrder} from "../services/order-service.js";
import {totalProcessing} from "../services/payment-service.js"

export async function runApp()
{
    try{
        const user = await getUser();
        if(!user) throw new Error("user not found");
        console.log("User:", user.name);

        const orders = await getOrder(user.id);
        const ids = orders.map(order => order.id);
        ids.forEach(id => console.log(id));

        const total = totalProcessing(orders);
        console.log("Total:", total);

    }
    catch(error)
    {
        console.log("Error in App", error);
    } 
}