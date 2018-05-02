<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="pragma" content="no-cache">

    <script> 
      var base_url      = "<?php echo base_url() ?>";
      let session_id    = "<?php echo $_SESSION['user_id']; ?>"
    </script>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <link   rel="icon" href="<?php echo base_url('images/Gold_Egg.png'); ?>">
    <link   rel="stylesheet" href="<?php echo base_url('css/loadingScreen.css'); ?>">
    <script src="<?php echo base_url('js/loadingScreen.js'); ?>"></script>

    <script src="<?php echo base_url('js/frontpage.js'); ?>"></script>
    <link   href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link   rel="stylesheet" href="<?php echo base_url('css/egg-css.css'); ?>">
    <link   rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
    <title>Egg hunt</title>
    </script>
    </script>
  </head>
  <body onload="StartLoading(); Start();" id="body">

    <ul class="top-ul">
      <li><a href="#" class="how-tooltip"><i class="fas fa-question"></i></a></li>
      <li><a href="#"><i class="fas fa-search-plus"></i></a></li>
      <li><a href='#'><i class="fas fa-search-minus"></i></a></li>
      <li><a href="#"><i class="far fa-lightbulb"></i></a></li>
      <li><a href="#"><img src="<?php echo base_url('images/Gold_Egg.png')?>"></a></li>
      <li><a href="#"><p id="gold_egg_counter">0</p></a></li>
      <li><a href="#"><img src="<?php echo base_url('images/Silver_Egg.png')?>"></a></li>
      <li><a href="#"><p id="silver_egg_counter">0</p></a></li>
      <li><a href="#"><img src="<?php echo base_url('images/Bronze_Egg.png')?>"></a></li>
      <li><a href="#"><p id="bronze_egg_counter">0</p></a></li>
      
      <li style="float:right"><a class="active" href="https://github.com/maresiaerik/DIN17SP-WebProject-2" target="_blank"><i class="fab fa-github-square"></i></a></li>
    </ul>

    <div id="tooltip">
    <img src="<?php echo base_url('images/wasd.png')?>"  id="wasd"   height="145"  width="220">
    <img src="<?php echo base_url('images/arrow.png')?>" id="arrow"  height="145"  width="220">
    <hr>
       Use WASD and ARROW keys to move
    </div>

    <i class="fab fa-whmcs toggle_menu opacity_one" id="tab"></i>
    <div class="sidebar_menu hide_menu">
      <i class="fas fa-times"></i>
      <center>
        <h2 class="logo_title">Team 2 Presents</h2>
        <a href="#"><h1 class="boxed_item">EGG HUNT</h1></a>
      </center>

      <center id="githubbutton">
        <a href="http://www.github.com/maresiaerik/DIN17SP-WebProject-2"  class="navigation_item">GitHub</a>
      </center>
      <center id="sidebarmargin">
        <form action="<?php echo site_url('login/logout') ?>">
        <button class="tablinks-out" onclick="LogOut()">
          <i class="fas fa-sign-out-alt"></i>
          LOG OUT
        </button>
      </form>
        
      </center>
    </div>

    <br>
    <!-- Actual Web page -->
    <div>
      <h1 id="heading">Egg Hunt</h1>
      <div id="loadingScreen">
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
          <p>This game was developed by students of OAMK.</p><br>
          <p id="copyright">All rights reserved.</p><br>
        </div>
      </div>


      <!-- Game -->

      <audio id="blop">
        <!-- <source src="./audio/blop.mp3"> -->
        <source src="../audio/blop.wav">
      </audio>
      <audio id="woosh">
        <!-- <source src="/audio/woosh.mp3"> -->
        <source src="../audio/swoosh.wav">
      </audio>
      <audio id="grassA">
        <source src="../audio/grass.wav">
      </audio>
      <audio id="gravel">
        <!-- <source src="/audio/woosh.mp3"> -->
        <source src="../audio/gravel.wav">
      </audio>

      <div id="game-canvas">
        <canvas id="myCanvas" width="750" height="450"></canvas>
        <script src="<?php echo base_url('js/world.js'); ?>"></script>
        <script src="<?php echo base_url('js/player_manager.js'); ?>"></script>
        <script src="<?php echo base_url('js/player.js'); ?>"></script>
        <script src="<?php echo base_url('js/egg_manager.js'); ?>"></script>
      </div>
    </div>
  </body>
</html>
