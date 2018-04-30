<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller {

  public function register_new(){
     //print_r($this->input->post());
    //$hashed_password = password_hash($this->input->post('password'),PASSWORD_DEFAULT);
    $hashed_password = password_hash($this->input->post('password'),PASSWORD_DEFAULT);
    $this->load->model('User_model');
    $insert_data=array(
      'username'=>$this->input->post('username'),
      'password'=>$hashed_password
    );
    $test=$this->User_model->insert_user($insert_data);
    if($test){
      $data['message']='Registered succesfully!';
    }
    else {
      $data['message']='Error, check your username';
    }

    $data['page']='game/index';
    $this->load->view('frontpage/header',$data);

  }
}
