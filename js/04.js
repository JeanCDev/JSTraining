
let available = [false, true,false, true, true, true, false,true, false];
window.onload = function(){

  loadSeats();

  let images = document.querySelectorAll('img');
  for(let i = 0; i < images.length; i ++){
    images[i].onclick = verifyStatus(i);
  }

}


function verifyStatus(seat){

  let img = document.getElementsByTagName('img')[seat].src;
  let message = "";

  if(img.indexOf("nao-disponivel.jpg")>0){
    message = "Poltrona indisponível";
  } else if (img.indexOf("disponivel.jpg")){
    message = "Poltrona disponivel";
  } else{
    message = "Esse Poltrona é sua";
  }

  console.log(message);

}

// carrega o status das cadeiras com base no array
function loadSeats(){

  let imgs = document.getElementsByTagName('img');

  for(let i = 0; i< imgs.length; i++){

    if(available[i] == false){
      imgs[i].src = '../Javascript/img/nao-disponivel.jpg';  
    } else{
      imgs[i].src = '../Javascript/img/disponivel.jpg';
    }

  }

}

// escolhe um assento aleatoriamente
function selectSeat(){

  let imgs = document.getElementsByTagName('img');

  for(let i = 0; i <available.length; i++){

    if(available[i]){
      imgs[i].src = '../Javascript/img/selected.jpg';
      let confirmation = confirm('Deseja selecionar esta poltrona');

      if(confirmation){
        break;
      } else {
        imgs[i].src = '../Javascript/img/disponivel.jpg'; 
      }
    }

  }

}

// Seleciona dois assentos aleatoriamente
function selectCouple(){

  let imgs = document.getElementsByTagName('img');

  for(let i = 0; i <available.length; i++){

    if(available[i] && available[i+1]){
      imgs[i].src = '../Javascript/img/selected.jpg';
      imgs[i+1].src = '../Javascript/img/selected.jpg';
      let confirmation = confirm('Deseja Essas poltronas');

      if(confirmation){
        break;
      } else {
        imgs[i].src = '../Javascript/img/disponivel.jpg'; 
        imgs[i+1].src = '../Javascript/img/disponivel.jpg'; 
      }
    }

  }

}

