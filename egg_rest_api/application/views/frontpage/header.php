<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <link rel="icon" href="https://orig00.deviantart.net/1039/f/2012/008/7/5/8bit_egg_by_xxx515xxx-d4ls0ll.png">
    <link rel="stylesheet" href="../css/loadingScreen.css">
    <script src="../JS/loadingScreen.js"></script>
    <script src="../JS/egg.js"></script>
    <link rel="stylesheet" href="/css/egg-css.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
    <title></title>
  </head>
  <body onload="Start()">
    <ul class="top-ul">
      <li><a href="#"><?php
      if(isset($_SESSION['logged_in']))
      {
        echo 'Welcome '.$_SESSION['user'];
      }
      else {
        echo 'Welcome Visitor';
      }
       ?></a></li>
      <li><a href="#"><i class="fas fa-user"></i></a></li>
      <li><a href="#" class="how-tooltip"><i class="fas fa-question"></i></a></li>
      <li><a href="#"><i class="fas fa-search-plus"></i></a></li>
      <li><a href='#'><i class="fas fa-search-minus"></i></a></li>
      <li><a href="#"><p id="egg_counter">Eggs collected: 0</p></a></li>
      </li>
      <li style="float:right"><a class="active" href="https://github.com/maresiaerik/DIN17SP-WebProject-2" target="_blank"><i class="fab fa-github-square"></i></a></li>
    </ul>
    <div id="tooltip">
    <img src="wasd.png" id="wasd" height="145" width="220"><img src="arrow.png" id="arrow" height="145" width="220">
    <hr>
       You can use WASD and ARROW keys to move, collect eggs to increase score and compete on the leaderboard!
    </div>

    </div>
    <i class="fab fa-whmcs toggle_menu opacity_one"></i>
    <div class="sidebar_menu hide_menu">
      <i class="fas fa-times"></i>
      <center>
        <a href="#"><h1 class="boxed_item">EGG <span class="logo_bold">HUNT</span></h1></a>
        <h2 class="logo_title">An Egg Hunting Game</h2>
      </center>
      <center>
      <ul class="navigation_select">
        <a href="#" class="navigation_item" id="leaderbtn">SCOREBOARD</a>
      </ul>
    </center>
      <center>
          <button class="tablinks-in" onclick="document.getElementById('form02').style.display='block'" id="defaultOpen">
              <i class="fas fa-sign-in-alt"></i>
              LOG IN
            </button>
      </center>
      <center>
        <button class="tablinks-out" onclick="document.getElementById('logoutform').style.display='block'">
          <i class="fas fa-sign-out-alt"></i>
          LOG OUT
        </button>
      </center>
    </div>

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
          <p id="copyright">&copyAll rights reserved.</p><br>
        </div>
      </div>

    <script type="text/javascript">
    //Sidemenu script
    $(document).ready( () =>
    {
      $(".fa-times").click( () =>
      {
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opacity_one");
      });

      $(".toggle_menu").click( () =>
      {
        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle_menu").removeClass("opacity_one");
      });

      $('#leaderbtn').click( () =>
      {
        $('.leaderpage').toggle();
      });

      $('#graphbtn').click( () =>
      {
        $('.graphpage').toggle();
      });
      $('.how-tooltip').hover( () =>
      {
        $('#tooltip').css("display","block");
      },
        () =>
        {
          $('#tooltip').css("display","none");
        });

      $('.fa-user').hover( () =>
      {
      $('#tooltip2').css("display","block");
      },
        () =>
        {
          $('#tooltip2').css("display","none");
        });

      $("#defaultOpen").click();

      $('.message a').click( () =>
      {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
      });



      $(document).mouseover( (event) =>
      {
        var mx = event.pageX+50;
        var my = event.pageY+15;
        $('#tooltip').css('left',mx+'px').css('top',my+'px');
        var mx = event.pageX+50;
        var my = event.pageY+15;
        $('#tooltip2').css('left',mx+'px').css('top',my+'px');
      });
    });
    </script>
    <div class="container">

    </div>
