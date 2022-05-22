const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');

const swapEle1 = document.getElementById('swap1');

const swapEle2 = document.getElementById('swap2');



// Event listeners
currencyEl_one.addEventListener('change', caclulate);
amountEl_one.addEventListener('input', caclulate);
currencyEl_two.addEventListener('change', caclulate);
amountEl_two.addEventListener('input', caclulate);



// swap 1

swapEle1.addEventListener('click', (e) => {
const temp = currencyEl_one.value;
currencyEl_one.value = currencyEl_two.value;
currencyEl_two.value = temp;

caclulate();

});




// swap 2

swapEle2.addEventListener('click', (e) => {

  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  
  caclulate();
  
  });







// Fetch exchange rates and update the DOM
function caclulate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/51ba5d079defb1e1866a0c57/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);

      const rate = data.conversion_rates[currency_two];

      // console.log(rate);
    
      rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;



      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);



     
    });
}



caclulate();
