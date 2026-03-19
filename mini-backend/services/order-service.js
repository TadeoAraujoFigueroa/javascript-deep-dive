import {fakeApi} from "../utils/fakeApi.js";

export async function getOrder(userId)
{
    const orders = await fakeApi([
        {id:1 , total: 1000},
        {id:2 , total: 2000}
    ]);
    return orders;
}