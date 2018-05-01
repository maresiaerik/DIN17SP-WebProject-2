<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="pragma" content="no-cache">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <link rel="icon" href="https://orig00.deviantart.net/1039/f/2012/008/7/5/8bit_egg_by_xxx515xxx-d4ls0ll.png">
    <link rel="stylesheet" href="../css/loadingScreen.css">
    <script src="../JS/loadingScreen.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <script src="../JS/frontpage.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="../CSS/egg-css.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
    <title>Egg hunt</title>
    </script>
  </head>
  <body>

    <!-- Actual Web page -->
    <div>
      <h1 id="heading">Egg Hunt</h1>
      <div id="loadingScreen">
        <div class="login-page" id="form02">
          <div class="form">

            <form class="login-form" action="frontpage.html" method="post">
              <h1 id="signh1">Login</h1>
              <div class="formdiv">
                <input type="text" class="loginfield" placeholder="Username" required />
                <input type="password" id="pass_input" class='loginfield' placeholder="Password" required />
                <button class="signupbtn" id="signupbtn" onclick='frontpage.html'>Login</button>
                <button type="button"  class="cancelbtn registerbtn" id="signupbtn">Register</button>

              </div>
            </form>
            <form class="register-form">
              <h1 id="signh1">Register</h1>
              <input type="text" placeholder="Username" required>
              <input type="password" id="pass_input" placeholder="Password" required>
              <button class="signupbtn register" onclick="Register()">Register</button>
              <button type="button"  class="cancelregister cancelbtn"><b>Cancel</b></button>
            </form>
          </div>
        </div>
      <div class="">
          <h1 id="h1">Egg Hunt is loading</h1>
      </div>
      <br>
      <div class="button">
        <button type="button" id="startbutton" onclick="StartGame()">Start</button>
      </div>
      <div class="animation">
        <div class="bunny"></div>
        <div class="">
          <img id="eggimg">
        </div>
      </div>
        <div class="">
          <p>This game was developed by students of OAMK</p><br>
          <p id="copyright">All rights reserved</p><br>
        </div>
      </div>

      <div id="game-canvas">
        <canvas id="myCanvas" width="750" height="450"></canvas>
      </div>
    </div>
  </body>
</html>
