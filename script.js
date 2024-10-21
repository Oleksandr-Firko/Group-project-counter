const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const counterOnPage = document.getElementById("counter-value");
let counter = 0;

function updateCounter() {
  counterOnPage.innerText = counter;
}

plusButton.onclick = function () {
  counter++;
  updateCounter();
};

minusButton.onclick = function () {
  counter--;
  updateCounter();
};
