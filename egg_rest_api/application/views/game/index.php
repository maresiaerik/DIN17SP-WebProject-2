
<br>
<br>
<div id="game-canvas">
  <canvas id="myCanvas" width="750" height="450"></canvas>
  <script src="../JS/world.js"></script>
  <script src="../JS/player_manager.js"></script>
  <script src="../JS/player.js"></script>
  <script src="../JS/egg_manager.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</div>
<script type="text/javascript">
// Resizes the canvas bacck to default width and height
  $('.fa-search-minus').click( () =>
  {
    let canvas = document.getElementById('myCanvas');
    canvas.width = 750;
    canvas.height = 450;
  });
// Resizes the canvas larger
  $('.fa-search-plus').click( () =>
  {
    let canvas = document.getElementById('myCanvas');
    canvas.width = 950;
    canvas.height = 650;
  });

</script>
