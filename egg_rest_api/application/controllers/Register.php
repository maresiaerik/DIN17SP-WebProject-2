<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller
{
    public function add_user()
  {
    $this->load->model('User_model');

    $insert_data=array
    (
      'username'=>$this->input->post('new_username'),
      'password'=>$this->input->post('new_password'),
      'vector_x'=>'3',
      'vector_y'=>'7'
    );

    $this->User_model->add_user($insert_data);

    //$data['new_book']=$insert_data;
    $data['page']='frontpage/login';
    $this->load->view('menu/content',$data);
  }
}
?>
