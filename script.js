let weight = document.getElementById("weight");
let height = document.getElementById("height");
let weightData = document.getElementById("weightData");
let heightData = document.getElementById("heightData");
let calculate = document.getElementById("calculate");
let yourBMI = document.getElementById("yourBMI");
let suggestions = document.getElementById('suggestions')

function updateValue() {
  weightData.textContent = weight.value;
  heightData.textContent = height.value;
}

calculate.addEventListener("click", function () {
  let heightIm2 = height.value / 100;
  let heightInMeter = heightIm2 * heightIm2;
  yourBMI.innerHTML = `${(weight.value / heightInMeter).toFixed(2)}`;


  if((weight.value / heightInMeter).toFixed(2) < 18.5){
    suggestions.textContent = 'Under Weight'
    suggestions.style.color = 'orange'
  }
  else if((weight.value / heightInMeter).toFixed(2) > 24.9){
    suggestions.textContent = 'Over Weight'
    suggestions.style.color = 'red'
  }
  else{
    suggestions.textContent = 'Normal'
    suggestions.style.color = 'green'
  }
});
