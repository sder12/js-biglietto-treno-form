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
const cancelBtn = document.getElementById("cancel");
console.log(cancelBtn);
// result
const userResult = document.querySelector("p.text-result");
console.log(userResult);
const userResultName = document.querySelector("p.text-hello");
console.log(userResultName);


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
        userResult.innerHTML = `${message} ${youngCostDecimal} euro`;
    } else if (userAge == "senior"){
        userResult.innerHTML = `${message} ${oldCostDecimal} euro`;
    } else{
        userResult.innerHTML = `${message} ${basePriceDecimal} euro`;
    }

    //fare un saluto
    userResultName.innerHTML = `Ciao ${userName}!`;
});


cancelBtn.addEventListener("click", function () {
    userNameInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";
})

