<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="pragma" content="no-cache">

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <title></title>

  </head>
  <body  onload="Start()">

    <audio id="blop">
      <source src="./audio/blop.mp3">
      <source src="./audio/blop.wav">
    </audio>
    <audio id="woosh">
      <!-- <source src="/audio/woosh.mp3"> -->
      <source src="./audio/swoosh.wav">
    </audio>
    <audio id="grassA">
      <source src="./audio/grass.wav">
    </audio>
    <audio id="gravel">
      <!-- <source src="/audio/woosh.mp3"> -->
      <source src="./audio/gravel.wav">
    </audio>

    <p id="egg_counter"></p>

    <canvas id="myCanvas" width="750" height="650" style="border:1px solid #000000;"></canvas>
    <script src="../JS/world.js"></script>
    <script src="../JS/player_manager.js"></script>
    <script src="../JS/player.js"></script>
    <script src="../JS/egg_manager.js"></script>

    <br>
    <br>

    <!-- <button onclick="RandomizeEggs()">Randomize Eggs</button> -->
    
  </body>
</html>
