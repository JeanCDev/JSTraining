
function imcCalc(){

  let form = document.getElementById('form');
  let kilos = Number(form.kg.value);
  let meters = Number(form.meters.value);
  let centimeters = Number(form.centimeters.value);

  let height = ((meters * 100) + centimeters)/100;

  let imc = kilos/(height * height);

  // toFixed() - Escolhe o número de casas decimais
  form.imc.value = imc.toFixed(2);

  if(imc < 20){
    alert('Abaixo do peso');
  } else if(imc > 20 && imc < 25){
    alert('Peso ideal');
  } else if(imc > 25 && imc <= 30){
    alert('Sobrepeso');
  } else if(imc > 30 && imc <= 35){
    alert('Obesidade moderada');
  } else if(imc > 35 && imc <= 40){
    alert('Obesidade Severa');
  } else if(imc > 40 && imc <= 50){
    alert('Obesidade mórbida');
  } else {
    alert('Super Obesidade');
  }

}