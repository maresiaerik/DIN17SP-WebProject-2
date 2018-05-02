<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="pragma" content="no-cache">

    <script> 
      var base_url = "<?php echo base_url() ?>";
    </script>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <link rel="icon" href="<?php echo base_url('images/Gold_Egg.png'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('css/loadingScreen.css'); ?>">
    <script src="<?php echo base_url('js/loadingScreen.js'); ?>"></script>

    <script src="<?php echo base_url('js/frontpage.js'); ?>"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo base_url('css/egg-css.css'); ?>">
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
            <div class="loginForm">
              <form class="login-form" action="<?php echo site_url('login/log_in') ?>" method="post">
                <h1 id="signh1">Login</h1>
                <div class="formdiv">
                  <input type="text"      class="loginfield" placeholder="Username" name="username" required />
                  <input type="password"  class='loginfield' placeholder="Password" name="password" required />
                  <div class="buttons">
                    <button class="signupbtn" id="signupbtn">Login</button>
                    <button type="button"  class="cancelbtn registerbtn" id="signupbtn">Register</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="registerForm">
              <form class="register-form" action="<?php echo site_url('register/add_user') ?>" method="post">
                <h1 id="signh1">Register</h1>
                <input type="text"      placeholder="Username" name="new_username" required>
                <input type="password"  placeholder="Password" name="new_password" required>

                <div class="buttons">
                  <button class="signupbtn register">Register</button>
                  <button type="button"  class="cancelregister cancelbtn">Cancel</button>
                </div>
              </form>
            </div>

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
