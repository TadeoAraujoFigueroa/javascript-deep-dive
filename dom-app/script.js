const button = document.getElementById("loadBtn");
const list = document.getElementById("userList");
const status = document.getElementById("status");
const cleanBtn = document.getElementById("cleanBtn");

button.addEventListener("click", loadUsers);
cleanBtn.addEventListener("click", cleanList);

async function loadUsers()
{
    try
    {
    

    status.textContent = "cargando...";

    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
   
    if(!response.ok)
        {
            throw new Error("FAIL");
        }
    
   
    const result = await response.json();

    renderUsers(result);
        
    status.textContent = "usuarios cargados!"

    }
    catch(error)
    {
        status.textContet = "Error: " + error.message;
    }
   
}

function renderUsers(users)
{
    list.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");

        li.textContent = `${user.name}, ${user.mail}, ${user.adress.city}`;
        li.addEventListener("click", () => {
            alert(`Email: ${user.email}`);
        });

        list.appendChild(li);
    })
}

function cleanList()
{
    list.innerHTML = "";
}