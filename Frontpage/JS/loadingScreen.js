

let startbutton = $('#startbutton');


function StartGame()
{

  $('#canvas').fadeIn(100, 'swing');

  $('#loadingScreen').fadeOut(100, 'swing');

}


$(document).ready(function()
{
  let egg = document.getElementById('eggimg');

  egg.src = '../images/yoshiegg.png';
  egg.style.marginLeft = '200px';

  let h1interval = setInterval(function ()
  {
    let h1 = document.getElementById('h1');
    h1.innerHTML += '.';
    if (h1.innerHTML.length > 22)
    {
      console.log('test');
      h1.innerHTML = 'Egg Hunt is loading'
    }
  }, 390);

  setTimeout(function ()
  {
    $('#startbutton').fadeIn(400, 'swing');
    clearInterval(h1interval);
    h1.innerHTML = 'Start Playing!'
    h1.style.marginLeft = 35 + '%';
  }, 5000);

  let margin_left = 150;

  let timer = setInterval(function ()
  {
    if (margin_left < -5)
    {
      margin_left = 150;
    }
      margin_left -= 10;
      egg.style.marginLeft = margin_left + 'px';
  }, 100);
});
