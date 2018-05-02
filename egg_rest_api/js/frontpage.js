
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

    $('.login-form').css('visibility', 'hidden');
    $('.register-form').fadeIn().css('margin-top', '-250px');

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
  $('.cancelregister').click( () =>
  {
    $('.register-form').fadeOut(400);
    $('.login-form').css('visibility', 'visible').hide().fadeIn(400);
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

//Toggle frontpage darkmode

var darkEnabled = false;
    $(document).ready(function() 
    {
      $(".fa-lightbulb").on("click", switchDarkMode);
    });
    function switchDarkMode(){
      darkEnabled = !darkEnabled;
      if(darkEnabled){
        $("body").removeClass("darkmode1");
        $("body").addClass("darkmode");
      } else {
        $("body").removeClass("darkmode");
        $("body").addClass("darkmode1");
      }
    }

