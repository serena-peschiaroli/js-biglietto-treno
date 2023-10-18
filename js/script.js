
let quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let travelDistance = document.getElementById("TotalKm");
  let UserAge = document.getElementById("age");
  const PriceKm = 0.21;
    
  let TotPrice = (Math.round(travelDistance.value * PriceKm)) ;
  const sDiscount = 0.20;
  const bDiscount= 0.40;
  let Discount = "";
  let TotDiscount = TotPrice * Discount;

  if (UserAge.value < 18 ) {
      console.log ("Minorenne, sconto del 20%");
      console.log (TotPrice);
      let Discount = 0.20;
      let NetPrice = (TotPrice -  TotDiscount);

      document.getElementById("PriceQuote").value = NetPrice;

  } else if (UserAge.value > 65 ){
      console.log ("Pensionato");
      const Discount = 0.40;
      let NetPrice = (TotPrice -  TotDiscount);
      document.getElementById("PriceQuote").value = NetPrice;
  }else {
      console.log ("Nessuno sconto applicato");
      document.getElementById("PriceQuote").value = TotPrice;

      

  }

  if (travelDistance.value == "" || UserAge.value == "") {
    alert("I campi sono obbligatori!");
  } else {
    alert("Inviato correttamente");
    console.log(
      `il passeggero percorre una distanza di ${travelDistance.value} Km and ha un età pari a ${UserAge.value} anni`
    );

    travelDistance.value = "";
    UserAge.value = "";

  }
  

});