
let goldEgg = '../images/Gold_Egg.png';
let silverEgg = '../images/Silver_Egg.png';
let bronzeEgg = '../images/Bronze_Egg.png';
let eggIndex = 0;
let eggArr = [ bronzeEgg, silverEgg, goldEgg ];
let isCanvasVisible = false;


// function is called when login is done
$(document).ready( () =>
{
  $('.top-ul,#tab').fadeIn(1000, 'swing');
  // the loading screen fades in when login button is pressed
  $('#loadingScreen').fadeIn(500).css('display', 'grid');
  // Login form fades in 1/4th of a second later
  setTimeout( () => { $('.login-form').fadeIn(800).css('display','block') }, 400);
  $('#already, .cancelbtn').click( () => {  $('.animation').css('visibility', 'visible'); } );


  let startbutton = $('#startbutton');
  let egg = document.getElementById('eggimg');

  // egg.src = '../images/Gold_Egg.png';
  egg.src = eggArr[0];
  egg.style.marginLeft = '200px';

  let margin_left = -90;
  let bunny_position = -140;

  $('.cancelregister').click( () =>
  {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });

  // makes the egg move left until it hits the bunny
  let eggLoadingAnimation = setInterval( () =>
  {
    if (margin_left < bunny_position)
    {
      margin_left = 150
      eggIndex = eggIndex < eggArr.length - 1 ? eggIndex += 1 : 0;
    }
    else
    {
      margin_left -= 10;
      egg.style.marginLeft = margin_left + 'px';
      egg.src = eggArr[eggIndex];
    }
  }, 90);
});

function StartLoading()
{
  let loginField = document.getElementsByClassName('loginfield');

  $('.login-form').css('display', 'block').fadeOut(900)
  $('.animation').css('margin-top', '87.4px');


  // the heading of loading screen fades in with a small delay
  setTimeout( () => { $('#h1').css('visibility', 'visible').hide().fadeIn(2000, 'swing')}, 50 );

  // if the total heading length doesn't include four dots
  // add one by one and keep checking until loadingScreenH1 < h1Length
  // else go back to default state
  let h1Length = 23;
  let loadingScreenH1 = document.getElementById('h1');
  let dotDotDotInterval = setInterval( () =>
  { loadingScreenH1.innerHTML.length < h1Length  ?  loadingScreenH1.innerHTML += '.'  :   loadingScreenH1.innerHTML = 'Egg Hunt is loading'; }, 390);

  //The start button fades in and heading changes text and margin
  // is changed when loading is done
  setTimeout( () =>
  {
    $('#startbutton').fadeIn(200, 'swing').css('display', 'grid');
    clearInterval(dotDotDotInterval);
    loadingScreenH1.innerHTML = 'Start Playing!';
    loadingScreenH1.style.textAlign = 'center';
    loadingScreenH1.style.margin = 'auto';
    $('.animation').css('margin-top', '67px');
  }, 2000);
}


// Start button is pressed after 'loading' is done,
// loading screen goes away and canvas becomes visible

function StartGame()
{
  isCanvasVisible = true;
  $('#loadingScreen').fadeOut(400, 'swing', () =>  $('#myCanvas').fadeIn(200, 'swing') );
  $('.bunny').css('animation-play-state', 'paused');
  clearInterval(eggLoadingAnimation);
  $('#eggimg').css('visibility', 'hidden');
  $('.bunnyStatic').css('display', 'inline-block');
}
