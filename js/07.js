window.onload = function(){
  
  let userName = readCookie('user');
  
  if(userName == null){
    let name = prompt("qual o seu nome?");
    writeCookie('user', name, 1);
  }

}

// Escreve um novo cookie no browser
function writeCookie(name, value, days){

  let expires = "";

  if(days){
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));

    expires = "expires=" + date.toGMTString();

    if(value != "" && value != null && value != "null"){
      document.cookie = `${name}=${value};${expires}; path=/`;
    }

  }

}

// lê os cookies
function readCookie(name){

  let searchName = name + '=';
  let cookies = document.cookie.split(';');
  for(let i = 0.; i< cookies.length; i++){
    let cook = cookies[i];
    while(cook.charAt(0) == ' '){
     cook = c.substring(1, cook.length);
    }
    if(cook.indexOf(searchName) == 0){
      return cook.substring(searchName.length, cook.length);
    }
  }

  return null; 

}

// Apaga o cookie
function eraseCookie(name){
  writeCookie(name, '', -1);
}