if(!localStorage.dark){
  localStorage.dark ='false'
}

var icon = document.getElementById("js-dark-theme");


toggle = function(){
  document.documentElement.classList.toggle("dark-theme");
  if(document.documentElement.classList.contains("dark-theme")){
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  } else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  }
}
icon.onclick = function(){
  toggle();
  if (localStorage.dark == "true") {
    localStorage.dark = "false"
  } else {
    localStorage.dark = "true"
  }
}

if (localStorage.dark == 'true'){
  toggle();
}



