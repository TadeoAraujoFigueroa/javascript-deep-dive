//EJERCICIO PRACTICO DE PROMESAS

function fakeRequest(data, delay = 1000, shouldFail = false)
{

    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {   
            if(shouldFail)
            {
                reject(new Error("La solicitud ha fallado"));
            }
            else
            {
                resolve(data);
            }
        }, delay);
    }
    );
}
    fakeRequest("User data").then((data) => 
        {
            console.log("Solicitud exitosa:", data);
            return fakeRequest("Acount data", 1000, true);
        }).then((accountData) =>
        {
            console.log("Solicitud exitosa:", accountData);
            return fakeRequest("Payment data");
        }).then((paymentData) =>
        {
            console.log("Solicitud exitosa:", paymentData);
        }).catch((error) =>
        {
            console.error("Error en la solicitud:", error);
        });
    // Salida
    // Solicitud exitosa: User data
    // Error en la solicitud: Error: La solicitud ha fallado
    //UTILIZANDO ASYNC/AWAIT
    async function fetchData()
    {
        try
        {
                const userData = await fakeRequest("User data");
                console.log("Solicitud exitosa:", userData);
                const accountData = await fakeRequest("Acount data", 1000, true);
                console.log("Solicitud exitosa:", accountData);
                const paymentData = await fakeRequest("Payment data");
                console.log("Solicitud exitosa:", paymentData);
                
        }
        catch(error)
        {
            console.log("Error en la solicitud:", error);

        }

       
    }

//Podemos obserar el mencionado 'Azúcar sintáctico' que hace que el código sea más legible y fácil de entender, ya que se asemeja a un código síncrono, aunque en realidad está manejando operaciones asíncronas de manera eficiente.
// Entendemos entonces que el funcionamiento de async/await esconde el manejo de promesas encadenadas y el uso de microtasks, lo que hace que el código sea más limpio y fácil de seguir, especialmente cuando se tienen múltiples operaciones asíncronas que dependen unas de otras.

async function test()
{
    console.log("Start test");

    fakeRequest("A").then(() => console.log("Then A"));

    await fakeRequest("B");

    console.log("After B");

}

test();
// Salida:
// Start test
// Then A
// After B
// En este ejemplo, aunque la función test es async y utiliza await para esperar 
// la resolución de la promesa de fakeRequest("B"), el callback de fakeRequest("A") 
// se ejecuta antes que el código después del await, 
// lo que demuestra cómo las promesas y el event loop interactúan en JavaScript
// Ejemplo claro de la transformación de async/await en promesas encadenadas y viceversa.
async function f()
{
    await algo();    
    // Código que se ejecuta después de que algo() se resuelve
}

// Es igual a:

function f()
{

    return Promise.resolve(algo()).then(() =>
    {
        // Código que se ejecuta después de que algo() se resuelve
    })  ;
}

async function test()
{
    return 10    
}

console.log(test())

//Salida:
