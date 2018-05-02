<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller
{
  public function index()
	{
    $data['page']='frontpage/login';
		$this->load->view('menu/content',$data);
  }

  public function log_in()
  {
    $user_form=$this->input->post('username');
    $pass_form=$this->input->post('password');

    $this->load->model('User_model');
    
    $check_pass=$this->User_model->check_pass($user_form);
    $user_id=$this->User_model->check_id($user_form);
    
    if($check_pass==$pass_form)
    {
      $_SESSION['logged_in']=true;
      $_SESSION['user_id']=$user_id;

      $data['page']='frontpage/frontpage';
      $this->load->view('menu/content',$data);
    }
  }

  public function logout()
  {
    session_destroy();

    $data['page']='frontpage/login';
    $this->load->view('menu/content',$data);
  }
}