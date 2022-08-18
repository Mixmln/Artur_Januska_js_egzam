/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btnEl = document.getElementById("btn");
const outputEl = document.getElementById("output");

async function getUsers(url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
}

function randomColor() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function showUsersHtml(arr) {
  outputEl.innerHTML = "";
  outputEl.classList.remove("bgc-white");
  btnEl.textContent = "Change colors";
  arr.map((obj) => {
    const divEl = document.createElement("div");
    divEl.className = "user-info";
    divEl.style.background = randomColor();
    divEl.innerHTML = `
        
        <img src=${obj.avatar_url} alt="userImg" />
        <p>User login: <span> ${obj.login}</span></p>
       
        `;
    outputEl.append(divEl);
  });
}

btnEl.addEventListener("click", async () => {
  const usersArr = await getUsers(ENDPOINT);
  showUsersHtml(usersArr);
});
