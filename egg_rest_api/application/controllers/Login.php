<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*require APPPATH . 'libraries/REST_Controller.php';*/

class Login extends CI_Controller {
  public function login_form(){
    $data['page']='login/login';
    $this->load->view('frontpage/content',$data);
    /*$this->load->view('frontpage/home',$data);*/
  }

  public function log_in(){
    $user_form=$this->input->post('username');
    $pass_form=$this->input->post('password');

    $real_username='admin';
    $real_password='1234';
    if($user_form==$real_username && $pass_form==$real_password){
      $_SESSION['logged_in']=true;
      $_SESSION['admin']=true;
      $_SESSION['user']=$user_form;
      $data['message']='You have logged in';
    }
    else if ($user_form!=$real_username) {
        $this->load->model('User_model');
        $check_pass=$this->User_model->check_user($user_form);
        if (password_verify($pass_form ,$check_pass)) {
            $_SESSION['logged_in']=true;
            $_SESSION['admin']=false;
            $_SESSION['user']=$user_form;
            $data['message']='You have logged in';
          }
          else{
            $data['message']='Username/Password did not match';
          }
      }

    else{
      $data['message']='Username/Password did not match';
    }

    $data['page']='frontpage/content';
    $this->load->view('frontpage/content');
  }
  public function logout(){
    $_SESSION['logged_in']=false;
    session_destroy();
    $data['message']='You have logged out';
    $data['page']='game/index';
    $this->load->view('login/login',$data);
  }

}
