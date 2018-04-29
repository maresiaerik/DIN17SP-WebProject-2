<?php

class Egg_model extends CI_model
{
  function get_eggs()
  {
    $this->db->select('*');
    $this->db->from('egg');
    return $this->db->get()->result_array();
  }

  function update_egg($id, $update_data)
  {
    $this->db->where('id',$id);
    $this->db->update('egg',$update_data);
  }
}
 ?>
