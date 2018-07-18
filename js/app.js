function check(){
  //Get the checkbox
  let checkBox = document.getElementById("nav-toggle");
  //Get the ouput menu
  let menu = document.getElementById("menu-content");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    menu.style.transform = "scale(1,1)";
  } else {
    menu.style.transform = "scale(1,0)";
  }
}
