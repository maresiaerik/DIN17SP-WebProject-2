<link rel="stylesheet" href="../CSS/egg-css.css">
<br>
<br>
<br>
<div class="login-page" id="form02">
  <div class="form">
    <!-- <span onclick="document.getElementById('form02').style.display='none'" class="close" title="Close Modal">&times;</span> -->
    <form class="login-form" action="<?php echo site_url('login/log_in')?>" method="post">
      <h1 id="signh1">Login</h1>
      <div class="formdiv">
        <input type="text" placeholder="Username" required>
        <input type="password" id="passInput" placeholder="Password" required>
        <input type="checkbox" onclick="showPass()">Show password
        <button class="signupbtn" id="signupbtn" onclick="StartLoading()">Login</button>
        <button type="button" onclick="document.getElementById('form02').style.display='none';StartLoading()"  class="cancelbtn" id="signupbtn"><b>Cancel</b></button>
        <p class="message"><a href="#" id="registermsg">First time logging in?</a></p>

        </div>
        </form>
        <form class="register-form" action="<?php echo site_url('register/register_new')?>" method="post">
          <h1 id="signh1">Register</h1>
          <input type="text" placeholder="Username" required>
          <input type="password" id="password" placeholder="Password" required>
          <input type="password" id="passconf " placeholder="Password" required>
          <input type="checkbox" onclick="showPass()">Show password
          <input type="submit" name="Register!" value="Register!">
          <button type="button" onclick="document.getElementById('form02').style.display='none'" class="cancelbtn"><b>Cancel</b></button>
          <p class="message"><a id="already" href="#">Already registered?</a></p>
    </form>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript">

    $('.message a').click( () =>
    {
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
</script>
