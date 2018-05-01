
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

  $('.how-tooltip').hover( () =>
  {
    $('#tooltip').css("display","block");
  },
    () =>
    {
      $('#tooltip').css("display","none");
    });

  $("#defaultOpen").click();

  $('.registerbtn').click( () =>
  {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('.animation').css('visibility', 'hidden');
  });

// Resizes the canvas bacck to default width and height

  $('.fa-search-minus').click( () =>
  {
    if (isCanvasVisible)
    {
      let canvas = document.getElementById('myCanvas');
      canvas.width = 750;
      canvas.height = 450;
    }
  });
// Resizes the canvas larger
  $('.fa-search-plus').click( () =>
  {
    if (isCanvasVisible)
    {
      let canvas = document.getElementById('myCanvas');
      canvas.width = 950;
      canvas.height = 650;
    }
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

function Register()
{
  console.log("register bitch");
}
