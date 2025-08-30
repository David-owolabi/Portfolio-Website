if(!localStorage.dark){
  localStorage.dark ='false'
}

var icon = document.getElementById("js-dark-theme");


toggle = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
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


// On load, set theme and icon state
if (localStorage.dark == 'true'){
  if (!document.body.classList.contains('dark-theme')) {
    document.body.classList.add('dark-theme');
  }
  icon.classList.remove("bx-moon");
  icon.classList.add("bx-sun");
} else {
  document.body.classList.remove('dark-theme');
  icon.classList.remove("bx-sun");
  icon.classList.add("bx-moon");
}



