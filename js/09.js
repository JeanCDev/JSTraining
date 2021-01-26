let btn = document.getElementById('btn');

btn.onclick = function(){

  let ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function(){

    if(ajax.readyState == 4) {
      console.log('Requisição ok');
    }

  }

  ajax.open("GET", "js/ajax/file.html");
  ajax.send(null);

  return false;

}