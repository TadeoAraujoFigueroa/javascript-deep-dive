import {fakeApi} from "../utils/fakeApi.js";

export async function getUser()
{
    const user = await fakeApi({id: 1, name: 'Tadeo'});
    return user;
}