/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const outputEl = document.getElementById("output");

async function init() {
  const carsArr = await getCars(ENDPOINT);
  generateHtml(carsArr);
}

init();

async function getCars(url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("data ===", data);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

function generateHtml(arr) {
  arr.map((carObj) => {
    const divEl = document.createElement("div");
    divEl.classList.add("card");
    divEl.innerHTML = `
        <h2>${carObj.brand}</h2>
              <ul>
                ${generateLi(carObj.models)}
              </ul>
        `;
    outputEl.append(divEl);
  });
}

function generateLi(arr) {
  return arr.map((model) => `<li>${model}</li>`).join("");
}
