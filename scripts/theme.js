var icon = document.getElementById("js-dark-theme");

icon.onclick = function(){
  document.documentElement.classList.toggle("dark-theme");
  if(document.documentElement.classList.contains("dark-theme")){
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  } else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  }
}