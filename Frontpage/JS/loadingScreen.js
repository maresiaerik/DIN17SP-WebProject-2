

// function is called when login is done
function StartLoading()
{
  // the loading screen fades in when login button is pressed
  $('#loadingScreen').fadeIn(900, 'swing');

  let startbutton = $('#startbutton');
  let egg = document.getElementById('eggimg');
  let loadingScreenH1 = document.getElementById('h1');
  egg.src = '../images/yoshiegg.png';
  egg.style.marginLeft = '200px';
  let h1Length = 23;

  // the heading of loading screen fades in with a small delay
  setTimeout( () => { $('#h1').css('visibility', 'visible').hide().fadeIn(2000, 'swing')}, 50 );

  // if the total heading length doesn't include four dots
  // add one by one and keep checking until loadingScreenH1 < h1Length
  // else go back to default state
  let dotDotDotInterval = setInterval( () =>
  { loadingScreenH1.innerHTML.length < h1Length  ?  loadingScreenH1.innerHTML += '.'  :   loadingScreenH1.innerHTML = 'Egg Hunt is loading'; }, 390);

  let margin_left = 150;
  let bunny_position = -5;

  // makes the egg move left until it hits the bunny
  let eggLoadingAnimation = setInterval( () => {( margin_left < bunny_position ) ? (margin_left = 150) : (margin_left -= 10), (egg.style.marginLeft = margin_left + 'px'); }, 100);

  //The start button fades in and heading changes text and margin
  // is changed when loading is done
  setTimeout( () =>
  {
    $('#startbutton').fadeIn(600, 'swing');
    clearInterval(dotDotDotInterval);
    loadingScreenH1.innerHTML = 'Start Playing!';
    loadingScreenH1.style.textAlign = 'center';
    loadingScreenH1.style.margin = 'auto';
    $('#startbutton').css('display', 'flex');

  }, 1000);
}

// Start button is pressed after 'loading' is done,
// loading screen goes away and canvas becomes visible

function StartGame()
{
  $('#loadingScreen').fadeOut(100, 'swing');
  $('#myCanvas').fadeIn(500, 'swing');
  $('.bunny').css('animation-play-state', 'paused');
  clearInterval(eggLoadingAnimation);
  $('#eggimg').css('visibility', 'hidden');
  $('.bunnyStatic').css('display', 'inline-block');
// <<<<<<< HEAD
  // $('#myCanvas').css('visibility', 'visible').css('display', 'none').fadeIn(200, 'swing');
// =======
  // document.getElementById('myCanvas').style.display = 'inline';
// // >>>>>>> d80ea0fcc4c2247af6667c5f73a3fc01f202f1c4

}
