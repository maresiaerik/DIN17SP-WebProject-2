<?php


class User_model extends CI_model
{

  function get_users()
  {
    $this->db->select('*');
    $this->db->from('user');
    return $this->db->get()->result_array();
  }

  function get_user($id)
  {
    $this->db->select('*');
    $this->db->from('user');
    $this->db->where('id', $id);
    return $this->db->get()->result_array();
  }

  function add_user($add_data)
  {
    $this->db->insert('user',$add_data);
  }

  function update_user($id, $update_data)
  {
    $this->db->where('id',$id);
    $this->db->update('user',$update_data);
  }

  function delete_user($id)
  {
    $this->db->where('id',$id);
    $this->db->delete('user');
  }
  function check_user($user_form)
  {
    $this->db->select('password');
    $this->db->from('user');
    $this->db->where('username',$user_form);
    return $this->db->get()->row('password');
  }

  public function insert_user($insert_data)
  {
    $this->db->db_debug=false;
    $test=$this->db->insert('user',$insert_data);
    return $test;
}
}


 ?>
