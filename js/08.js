let save = document.getElementById('save');
let show = document.getElementById('show');
let text = document.getElementById('text');

save.onclick = function(){
  localStorage.setItem('myText', text.value);
}

show.onclick = function(){
  text.value = localStorage.getItem('myText');
}