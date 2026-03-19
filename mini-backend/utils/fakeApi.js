export function fakeApi(data, delay = 1000, shouldFail = false)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldFail){
                reject('API ERROR');
            }
            else{
                resolve(data);
            }
        }, delay);
    })
}