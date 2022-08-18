/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

// 1 variantas

const keysArr1 = Object.keys(audi);
console.log("keysArr1 ===", keysArr1);

// 2 variantas

function showObjectKeys(obj) {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }

  return keys;
}

const keysArr2 = showObjectKeys(audi);
console.log("keysArr2 ===", keysArr2);
