<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="https://orig00.deviantart.net/1039/f/2012/008/7/5/8bit_egg_by_xxx515xxx-d4ls0ll.png">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="../JS/sketch.js"></script>
    <script src="../JS/p5.min.js"></script>
    <!-- <script src="../JS/p5.js"></script> -->
    <script src="../JS/addons/p5.dom.min.js"></script>
    <script src="../JS/addons/p5.sound.min.js"></script>
    <script src="../JS/eggmenujs.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link rel="stylesheet" href="../CSS/eggmenucss.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
      <title>Egg hunt</title>
    </script>
  </head>
  <body>

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
        <a href="eggmenu.html"><h1 class="boxed_item">EGG <span class="logo_bold">HUNT</span></h1></a>
        <h2 class="logo_title">An Egg Hunting Game</h2>
      </center>

      <ul class="navigation_select">
        <button class="navigation_item">LEADERBOARD</button>
        <button class="navigation_item">GRAPHS</button>
        <button class="navigation_item">SETTINGS</button>
        <button class="navigation_item"><a href="https://github.com/maresiaerik/DIN17SP-WebProject-2" target="_blank">ABOUT</a></button>
      </ul>
      <center>
          <button class="tablinks" onclick="document.getElementById('form02').style.display='block'" id="defaultOpen">
              <i class="fas fa-sign-in-alt"></i>
              LOG IN
            </button>
      </center>
      <center>
        <button class="tablinks" onclick="document.getElementById('form03').style.display='block'">
          <i class="fas fa-sign-out-alt"></i>
          LOG OUT
        </button>
      </center>
      <center>
        <button class="tablinks" onclick="document.getElementById('form01').style.display='block'">
          <i class="fa fa-user"></i>SIGN UP
        </button>
      </center>
    </div>
    <div id="form01" class="modal">
        <span onclick="document.getElementById('form01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <form class="modal-content" action="action_page.php" method="post">
          <div class="container">
            <center>
            </center>
            <p id="signp">Please fill in this form to create an account.</p>
            <hr>
              <label  for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="user" required>
  
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required>
  
              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
              
              <div class="clearfix">
              <button type="button" onclick="document.getElementById('form01').style.display='none'" class="cancelbtn"><b>Cancel</b></button>
              <button type="submit" class="signupbtn"><b>Sign Up</b></button>
            </div>
          </div>
        </form>
      </div>
  
      <div id="form02" class="modal">
        <span onclick="document.getElementById('form02').style.display='none'" class="close" title="Close Modal">&times;</span>
        <form class="modal-content" action="action_page.php" method="post">
          <div class="container">
            <center>
              <h1>Log in</h1>
              <br>
            </center>
            <hr>
              <div id="login-msg"></div>
              <span id="text-login-msg"><i class="fas fa-angle-double-right"></i>Type your username and password.</span>
              <input type="text" placeholder="Enter Username" name="user" required>
              <input type="password" placeholder="Enter Password" name="psw" required>
              <center id="forbtns">
              <div class="clearfix">
              <button type="button" onclick="document.getElementById('form02').style.display='none'" class="cancelbtn"><b>Cancel</b></button>
              <button type="submit" class="signupbtn"><b>Log in</b></button>
           </div>
          </center>
          </div>
        </form>
      </div>


  
      <div id="form03" class="modal">
        <span onclick="document.getElementById('form03').style.display='none'" class="close" title="Close Modal">&times;</span>
        <form class="modal-content" action="action_page.php">
          <div class="container">
            <h1 id="signh1">Successfully logged out!</h1>
            <hr>
              <center id="forbtns">
              <div class="clearfix">
              <button type="button" onclick="document.getElementById('form03').style.display='none'" class="cancelbtn"><b>Close window</b></button>
            </div>
          </center>
          </div>
        </form>
      </div>


    <br>
    <!-- Actual Web page -->
    <div>
      <div id="game-canvas"></div>
    </div>
    <div class="flex-container">
      <div class="right">
        <h3 class="h3title"><i class="fas fa-info"></i>How to play</h3>
        <p>You can use arrow and WASD keys to move</p>
        <p>Collect eggs to increase your score</p>
        <br>
      </div>
    <div class="left">
      <h3 class="h3title"><i class="fas fa-users"></i>Online users</h3>
      <ul>
        <li>User example</li>
        <li>User example</li>
        <li>User example</li>
        <li>User example</li>
      </ul>
    </div>
  </div>
  <script>
    document.getElementById("defaultOpen").click();
  </script>
  </body>
</html>
