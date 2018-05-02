<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Rest_server extends CI_Controller 
{
    function __construct()
    {
      parent::__construct();
      if(isset($_SESSION['logged_in']))
      {
        //we don't do anything
      } else {
        redirect('login/index');
      }
    }

    public function index()
    {
        $this->load->view('rest_server');
    }
}
