

//Sidemenu script
$(document).ready(function(){
  $(".fa-times").click(function(){
    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click(function(){
    $(".sidebar_menu").removeClass("hide_menu");
    $(".toggle_menu").removeClass("opacity_one");
  });
});

//Login form script
// Get the modal
var modal = document.getElementById('form01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Code for showing/hiding password on input
function showPass() {
  var x = document.getElementById("passInput");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
}
