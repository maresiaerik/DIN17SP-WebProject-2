

//SIDEBAR SCRIPT
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

//LOG IN FORM SCRIPT
// GET THE MODEL
var modal = document.getElementById('form01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


