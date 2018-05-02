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

  function check_pass($user_form)
  {
    $this->db->select('password');
    $this->db->from('user');
    $this->db->where('username',$user_form);
    return $this->db->get()->row('password');
  }

  function check_id($user_form)
  {
    $this->db->select('id');
    $this->db->from('user');
    $this->db->where('username',$user_form);
    return $this->db->get()->row('id');
  }
}

 ?>
