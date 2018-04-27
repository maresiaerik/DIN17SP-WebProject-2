

// function is called when login is done
$(document).ready( () =>
{
  // the loading screen fades in when login button is pressed
  $('#loadingScreen').fadeIn(900, 'swing');

  let startbutton = $('#startbutton');
  let egg = document.getElementById('eggimg');
  let loadingScreenH1 = document.getElementById('h1');
  egg.src = '../images/yoshiegg.png';
  egg.style.marginLeft = '200px';
  let h1Length = 23;
  let margin_left = -90;
  let bunny_position = -140;

  // makes the egg move left until it hits the bunny
  let eggLoadingAnimation = setInterval( () => {( margin_left < bunny_position ) ? (margin_left = 150) : (margin_left -= 10), (egg.style.marginLeft = margin_left + 'px'); }, 100);

});

function StartLoading()
{
  // the heading of loading screen fades in with a small delay
  setTimeout( () => { $('#h1').css('visibility', 'visible').hide().fadeIn(2000, 'swing')}, 50 );

  // if the total heading length doesn't include four dots
  // add one by one and keep checking until loadingScreenH1 < h1Length
  // else go back to default state
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
}, 1000);
}


// Start button is pressed after 'loading' is done,
// loading screen goes away and canvas becomes visible

function StartGame()
{
  $('#loadingScreen').fadeOut(400, 'swing', () =>  $('#myCanvas').fadeIn(200, 'swing') );
  $('.bunny').css('animation-play-state', 'paused');
  clearInterval(eggLoadingAnimation);
  $('#eggimg').css('visibility', 'hidden');
  $('.bunnyStatic').css('display', 'inline-block');
}
