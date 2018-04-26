<?php


class Session_model extends CI_model
{

  function get_sessions()
  {
    $this->db->select('*');
    $this->db->from('session');
    return $this->db->get()->result_array();
  }

  function get_session($id)
  {
    $this->db->select('*');
    $this->db->from('session');
    $this->db->where('user_id', $id);
    return $this->db->get()->result_array();
  }

  function add_session($add_data)
  {
    $this->db->insert('session', $add_data);
  }
/*
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
*/
}


 ?>
