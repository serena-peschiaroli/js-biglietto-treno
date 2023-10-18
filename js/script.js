
let quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let travelDistance = document.getElementById("TotalKm");
  let UserAge = document.getElementById("age");
  const PriceKm = 0.21;
    
  let TotPrice = travelDistance.value * PriceKm ;
  const sDiscount = 0.20;
  const bDiscount= 0.40;
  let Discount = "";
  let TotDiscount = (TotPrice * Discount);

  if (UserAge.value < 18 ) {
      console.log ("Minorenne, sconto del 20%");
      let Discount = 0.20;
      console.log (`€ ${TotPrice  * Discount}`);
      let TotDiscount = (TotPrice * Discount);
      let NetPrice = (Math.round(TotPrice -  TotDiscount));

      document.getElementById("PriceQuote").value =`il prezzo è di € ${NetPrice}`;

  } else if (UserAge.value > 65 ){
      console.log ("Pensionato, sconto del 40%");
      const Discount = 0.40;
      console.log (`€ ${TotPrice  * Discount}`);
      let TotDiscount = (TotPrice * Discount);
      let NetPrice = (Math.round(TotPrice -  TotDiscount));
      document.getElementById("PriceQuote").value =`il prezzo è di € ${NetPrice}`;
  }else {
      console.log ("Nessuno sconto applicato");
      console.log (`€ ${TotPrice}`);
      let NetPrice = (Math.round (TotPrice))
      document.getElementById("PriceQuote").value = `il prezzo è di € ${NetPrice}`;

      

  }

  if (travelDistance.value == "" || UserAge.value == "") {
    alert("I campi sono obbligatori!");
  } else {
    alert("Inviato correttamente");
    console.log(
      `il passeggero percorre una distanza di ${travelDistance.value} Km e ha un età pari a ${UserAge.value} anni`
    );

    travelDistance.value = "";
    UserAge.value = "";

  }
  

});