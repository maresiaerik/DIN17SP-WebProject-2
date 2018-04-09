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

    <?php
        if(isset($_SESSION['logged_in']))
        {
          echo 'Welcome '$_SESSION['user'];
        }
        else {
          echo 'Welcome Quest';
        }
     ?>

    <i class="fab fa-whmcs toggle_menu opacity_one"></i>
    <div class="sidebar_menu hide_menu">
      <i class="fas fa-times"></i>
      <center>
        <a href="#"><h1 class="boxed_item">EGG <span class="logo_bold">HUNT</span></h1></a>
        <h2 class="logo_title">An Egg Hunting Game</h2>
      </center>

      <ul class="navigation_select">
        <button class="navigation_item">LEADERBOARD</button>
        <button class="navigation_item">GRAPHS</button>
        <button class="navigation_item">SETTINGS</button>
        <button class="navigation_item"><a href="https://github.com/maresiaerik/DIN17SP-WebProject-2" target="_blank">ABOUT</a></button>
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
        <input type="text" placeholder="Username">
        <input type="text" placeholder="Password">
        <button class="signupbtn">Login</button>
        <button type="button" onclick="document.getElementById('form02').style.display='none'" class="cancelbtn"><b>Cancel</b></button>
        <p class="message"><a href="#">First time logging in?</a></p>
        </form>
        
        <form class="register-form" action="action_page.php" method="post">
          <h1 id="signh1">Register</h1>
          <input type="text" placeholder="Username">
          <input type="text" placeholder="Password">
          <input type="text" placeholder="Confirm password">
          <button class="signupbtn">Register!</button>
          <button type="button" onclick="document.getElementById('form02').style.display='none'" class="cancelbtn"><b>Cancel</b></button>
          <p class="message"><a href="#">Already registered?</a></p>
        </form>
        </div>
      </div>

    <br>
    <!-- Actual Web page -->
    <div>
      <div id="game-canvas">
        <canvas id="myCanvas" width="750" height="450" style="border:1px solid white;"></canvas>
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
  </script>
  </body>
</html>
