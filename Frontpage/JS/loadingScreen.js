
// Start button is pressed after 'loading' is done,
// loading screen goes away and canvas becomes visible

function StartGame()
{
  $('#canvas').fadeIn(100, 'swing');
  $('#loadingScreen').fadeOut(100, 'swing');
}


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

  // if the length of the heading is
  let dotDotDotInterval = setInterval( () =>
  { loadingScreenH1.innerHTML.length < h1Length  ?  loadingScreenH1.innerHTML += '.'  :   loadingScreenH1.innerHTML = 'Egg Hunt is loading'; }, 390);

  //The start button fades in and heading changes text and margin
  // is changed when loading is done

  setTimeout( () =>
  {
    $('#startbutton').fadeIn(600, 'swing');
    clearInterval(dotDotDotInterval);
    loadingScreenH1.innerHTML = 'Start Playing!';
    loadingScreenH1.style.marginLeft = 38.7 + '%';
  }, 5000);

  let margin_left = 150;
  let bunny_position = -5

  // makes the egg move left until it hits the bunny
  let timer = setInterval( () => {( margin_left < bunny_position ) ? (margin_left = 150) : (margin_left -= 10), (egg.style.marginLeft = margin_left + 'px'); }, 100);
}
