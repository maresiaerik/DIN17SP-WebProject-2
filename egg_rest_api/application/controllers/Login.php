<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller
{
  public function login_form()
  {
    $data['page']='login/login_form';
    $this->load->view('menu/content',$data);
  }

  public function log_in()
  {
    $user_form=$this->input->post('username');
    $pass_form=$this->input->post('password');

    $this->load->model('User_model');
    $check_pass=$this->User_model->check_user($user_form);

    if($check_pass==$pass_form)
    {
      $_SESSION['logged_in']=true;
      $_SESSION['user']=$user_form;
      $data['message']="You have logged in";
    } else {
      $data['message']= $pass_form.' '.$check_pass;
    }
    
    $data['page']='book/add_book_to_db';
    $this->load->view('menu/content',$data);
  }
  public function logout()
  {
    session_destroy();

    $data['message']="You have logged out";
    $data['page']='book/add_book_to_db';
    $this->load->view('menu/content',$data);
  }
}