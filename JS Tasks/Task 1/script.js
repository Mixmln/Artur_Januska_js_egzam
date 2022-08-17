/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const outputEl = document.getElementById("output");
const formEl = document.forms[0];
const inputEl = document.getElementById("search");
const submitEl = document.getElementById("submit-btn");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const iValue = +inputEl.value;
  const svarai = kgToLb(iValue);
  const gramai = kgToG(iValue);
  const uncijos = kgToOz(iValue);
  outputEl.innerHTML = `
  <p>${iValue} Kg = ${svarai}</p>
  <p>${iValue} Kg = ${gramai}</p>
  <p>${iValue} Kg = ${uncijos}</p>
  `;
});

function kgToLb(kg) {
  if (kg < 0) {
    return "Number should be greater then 0";
  }
  const lb = kg * 2.2046;
  return `${lb} lb`;
}

function kgToG(kg) {
  if (kg < 0) {
    return "Number should be greater then 0";
  }
  const g = kg / 0.001;
  return `${g} g`;
}

function kgToOz(kg) {
  if (kg < 0) {
    return "Number should be greater then 0";
  }
  const oz = kg * 35.274;
  return `${oz} oz`;
}
