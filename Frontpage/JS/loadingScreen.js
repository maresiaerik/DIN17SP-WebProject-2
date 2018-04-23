

// $(document).ready( () =>
// {
//
// });

function StartGame()
{
  $('#canvas').fadeIn(100, 'swing');
  $('#loadingScreen').fadeOut(100, 'swing');
}


function StartLoading()
{

  $('#loadingScreen').fadeIn(900, 'swing');
  let startbutton = $('#startbutton');
  let egg = document.getElementById('eggimg');
  let loadingScreenH1 = document.getElementById('h1');

  setTimeout( () => { $('#h1').css('visibility', 'visible').hide().fadeIn(2000, 'swing'), 50});

  egg.src = '../images/yoshiegg.png';
  egg.style.marginLeft = '200px';

  let dotDotDotInterval = setInterval( () =>
  {
    loadingScreenH1.innerHTML += '.';
    if (loadingScreenH1.innerHTML.length > 22)
    {
      loadingScreenH1.innerHTML = 'Egg Hunt is loading'
    }
  }, 390);

  setTimeout( () =>
  {
    $('#startbutton').fadeIn(400, 'swing');
    clearInterval(dotDotDotInterval);
    loadingScreenH1.innerHTML = 'Start Playing!';
    loadingScreenH1.style.marginLeft = 38.7 + '%';
  }, 5000);

  let margin_left = 150;

  let timer = setInterval( () => {

    ( margin_left < -5 ) ? (margin_left = 150) : (margin_left -= 10), (egg.style.marginLeft = margin_left + 'px');

  }, 100);
}
