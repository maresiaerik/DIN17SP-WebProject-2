<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="https://orig00.deviantart.net/1039/f/2012/008/7/5/8bit_egg_by_xxx515xxx-d4ls0ll.png">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="../JS/eggmenujs.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link rel="stylesheet" href="../CSS/eggmenucss.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
      <title>Egg hunt</title>
    </script>
  </head>
  <body onload="SetGrid()" >

    <ul class="top-ul">
      <li><a href="#"><i class="fas fa-search-plus"></i></a></li>
      <i class="fas fa-search-minus"></i>
      <li><a href="#"><i class="fas fa-volume-up"></i></a></li>
      <li style="float:right"><a class="active" href="https://github.com/maresiaerik/DIN17SP-WebProject-2" target="_blank"><i class="fab fa-github-square"></i></a></li>
    </ul>

    <i class="fab fa-whmcs toggle_menu opacity_one"></i>
    <div class="sidebar_menu hide_menu">
      <i class="fas fa-times"></i>
      <center>
        <a href="#"><h1 class="boxed_item">EGG <span class="logo_bold">HUNT</span></h1></a>
        <h2 class="logo_title">An Egg Hunting Game</h2>
      </center>

      <ul class="navigation_select">
        <button class="navigation_item" id="leaderbtn">LEADERBOARD</button>
        <button class="navigation_item">GRAPHS</button>
        <button class="navigation_item">SETTINGS</button>
      </ul>
      <center>
          <button class="tablinks-in" onclick="document.getElementById('form02').style.display='block'" id="defaultOpen">
              <i class="fas fa-sign-in-alt"></i>
              LOG IN
            </button>
      </center>
      <center>
        <button class="tablinks-out" onclick="document.getElementById('form03').style.display='block'">
          <i class="fas fa-sign-out-alt"></i>
          LOG OUT
        </button>
      </center>
    </div>
  
      <div class="login-page modal" id="form02">
        <div class="form">
        <span onclick="document.getElementById('form02').style.display='none'" class="close" title="Close Modal">&times;</span>
        <form class="login-form" action="action_page.php" method="post">
        <h1 id="signh1">Login</h1>
        <input type="text" placeholder="Username" required>
        <input type="text" placeholder="Password" required>
        <button class="signupbtn">Login</button>
        <button type="button" onclick="document.getElementById('form02').style.display='none'" class="cancelbtn"><b>Cancel</b></button>
        <p class="message"><a href="#">First time logging in?</a></p>
        </form>
        
        <form class="register-form" action="action_page.php" method="post">
          <h1 id="signh1">Register</h1>
          <input type="text" placeholder="Username" required>
          <input type="text" placeholder="Password" required>
          <input type="text" placeholder="Confirm password" required>
          <button class="signupbtn">Register!</button>
          <button type="button" onclick="document.getElementById('form02').style.display='none'" class="cancelbtn"><b>Cancel</b></button>
          <p class="message"><a href="#">Already registered?</a></p>
        </form>
        </div>
      </div>

      <div class="leaderpage modal" id="leaderform">
        <div class="leaderform">
        <span onclick="document.getElementById('leaderform').style.display='none'" class="close" title="Close Modal">&times;</span>
        <h1 id="signh1">Leaderboard</h1>
        <table>Generated php table here</table>
        </div>
      </div>

    <br>
    <!-- Actual Web page -->
    <div>
      <div id="game-canvas">
        <canvas class="canvas"></canvas>
        <script src="world.js"></script>
        <script src="player.js"></script>
      </div>
    </div>
    <div class="flex-container">
      <div class="right">
        <h3 class="h3title"><i class="fas fa-info"></i>How to play</h3>
        <p id="boxtext">You can use arrow and WASD keys to move</p>
        <p id="boxtext">Collect eggs to increase your score</p>
        <p id="boxtext"></p>
        <p id="boxtext"></p>
        <br>
      </div>
    <div class="left">
      <h3 class="h3title"><i class="fas fa-users"></i>Online users</h3>
      <ul>
        <li>Users displayed as a table here:</li>

      </ul>
    </div>
  </div>
  <script>
    document.getElementById("defaultOpen").click();
    $('.message a').click(function(){
          $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
      });

    $('.fa-search-plus').click(function(){
        $('canvas').toggleClass('canvas2');
      });

    $('.fa-search-minus').hide();
    $('.fa-search-plus').click(function(){
        $('.fa-search-plus').toggleClass('.fa-search-minus');
    });

    $(document).ready(function(){
    $('#leaderbtn').click(function(){
        $('#leaderform').toggle();
    });
  });
  </script>
  </body>
</html>
