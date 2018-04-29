
//Change the name of this file to be more representative

//Sidemenu script
$(document).ready( () =>
{
  $(".fa-times").click( () =>
  {
    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click( () =>
  {
    $(".sidebar_menu").removeClass("hide_menu");
    $(".toggle_menu").removeClass("opacity_one");
  });

  $('#leaderbtn').click( () =>
  {
    $('.leaderpage').toggle();
  });

  $('#graphbtn').click( () =>
  {
    $('.graphpage').toggle();
  });
  $('.how-tooltip').hover( () =>
  {
    $('#tooltip').css("display","block");
  },
    () =>
    {
      $('#tooltip').css("display","none");
    });

  $('.fa-user').hover( () =>
  {
  $('#tooltip2').css("display","block");
  },
    () =>
    {
      $('#tooltip2').css("display","none");
    });

  $("#defaultOpen").click();

  $('.message a').click( () =>
  {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });

// Resizes the canvas bacck to default width and height
  $('.fa-search-minus').click( () =>
  {
    let canvas = document.getElementById('myCanvas');
    canvas.width = 750;
    canvas.height = 450;
  });
// Resizes the canvas larger
  $('.fa-search-plus').click( () =>
  {
    let canvas = document.getElementById('myCanvas');
    canvas.width = 950;
    canvas.height = 650;
  });

  $(document).mouseover( (event) =>
  {
    var mx = event.pageX+50;
    var my = event.pageY+15;
    $('#tooltip').css('left',mx+'px').css('top',my+'px');
    var mx = event.pageX+50;
    var my = event.pageY+15;
    $('#tooltip2').css('left',mx+'px').css('top',my+'px');
  });
});

//Login form script
// Get the modal
var modal = document.getElementById('form01');

window.onclick =  (event) =>
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
};

//Code for showing/hiding password on input
function showPass()
{
  var x = document.getElementById("passInput");
  if (x.type === "password")
  {
      x.type = "text";
  } else {
      x.type = "password";
  }
}
