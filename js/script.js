//Costanti principali
const userNameInput = document.getElementById("user-name");
console.log(userNameInput);
const userKmInput = document.getElementById("user-km");
console.log(userKmInput);
const userAgeInput = document.getElementById("user-age");
console.log(userAgeInput);
// btn
const submitBtn = document.getElementById("submit");
console.log(submitBtn);
// result
const userResult = document.querySelector("p");
console.log(userResult);

//Al click submit genera risultato
submitBtn.addEventListener("click", function () {
  //Visualizzazione degli input
  const userName = userNameInput.value;
  console.log(userName);
  const userKm = userKmInput.value;
  console.log(userKm);
  const userAge = userAgeInput.value;
  console.log(userAge);

  //Calcolare sconto
  //calcolare costo complessivo
  const priceKm = 0.21;
  const basePrice = userKm * priceKm;
  console.log(basePrice);

  //DISCOUNT
  //calcolare il 20% 40%
  const discount20 = (basePrice * 20) / 100;
  const discount40 = (basePrice * 40) / 100;
  console.log(discount20, discount40);

  const youngCost = basePrice - discount20;
  const oldCost = basePrice - discount40;
  console.log(youngCost, oldCost);

  //decimal
  const youngCostDecimal = youngCost.toFixed(2);
  console.log(youngCostDecimal);
  const oldCostDecimal = oldCost.toFixed(2);
  console.log(oldCostDecimal);
  const basePriceDecimal = basePrice.toFixed(2);
  console.log(basePriceDecimal);

  //dare percentuale a cliente giusto 
  const message ="Il prezzo del tuo biglietto è di "
    if (userAge == "minor"){
        alert(message + youngCostDecimal + " euro")
    } else if (userAge == "senior"){
        alert(message + oldCostDecimal + " euro")
    } else{
        alert(message + basePriceDecimal + " euro")
    }

});


