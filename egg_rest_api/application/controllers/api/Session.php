<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';

/**
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array
 *
 * @package         CodeIgniter
 * @subpackage      Rest Server
 * @category        Controller
 * @author          Phil Sturgeon, Chris Kacerguis
 * @license         MIT
 * @link            https://github.com/chriskacerguis/codeigniter-restserver
 */
class Session extends REST_Controller {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['sessions_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['sessions_post']['limit'] = 100; // 100 requests per hour per user/key
        $this->methods['sessions_delete']['limit'] = 50; // 50 requests per hour per user/key
        $this->load->model('Session_model');
    }

    public function sessions_get()
    {
        // Sessions from a data store e.g. database
        $sessions = $this->Session_model->get_sessions();

        $id = $this->get('id');

        // If the id parameter doesn't exist return all the users

        if ($id === NULL)
        {
            // Check if the users data store contains users (in case the database result returns NULL)
            if ($sessions)
            {
                // Set the response and exit
                $this->response($sessions, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
            }
            else
            {
                // Set the response and exit
                $this->response([
                    'status' => FALSE,
                    'message' => 'No sessions were found'
                ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
            }
        }

        // Find and return a single record for a particular user.

        $id = (int) $id;

        // Validate the id.
        if ($id <= 0)
        {
            // Invalid id, set the response and exit.
            $this->response(NULL, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }

        // Get the user from the array, using the id as key for retrieval.
        // Usually a model is to be used for this.

        $sessions = NULL;

        if (!empty($sessions))
        {
            //Get the user from database
            $session=$this->Session_model->get_session($id);
        }

        if (!empty($session))
        {
            $this->set_response($session, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        }
        else
        {
            $this->set_response([
                'status' => FALSE,
                'message' => 'Session could not be found'
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }

    public function sessions_post()
    {
        // Add a new user
        $add_data=array(
          'user_id'=>$this->post('user_id')
        );

        $this->Session_model->add_session($add_data);

        $message = [

            'user_id' => $this->post('user_id'),
            'message' => 'Added a resource'
        ];

        $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
    }

    public function sessions_put()
    {
        $id=$this->put('id');

        $update_data=array(
          'id'=>$this->put('id'),
          'user_id'=>$this->put('user_id'),
          'start_time'=>$this->put('start_time'),
          'end_time'=>$this->put('end_time'),
          'steps'=>$this->put('steps'),
          'eggs'=>$this->put('eggs')
        );

        $this->Session_model->update_session($id, $update_data);

        $message = [
            'id'=>$this->put('id'),
            'user_id'=>$this->put('user_id'),
            'start_time'=>$this->put('start_time'),
            'end_time'=>$this->put('end_time'),
            'steps'=>$this->put('steps'),
            'steps'=>$this->put('eggs'),
            'message' => 'Updated a resource'
        ];

        $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
    }

    public function users_delete()
    {
        $id = (int) $this->get('id');

        // Validate the id.
        if ($id <= 0)
        {
            // Set the response and exit
            $this->response(NULL, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }

        // $this->some_model->delete_something($id);
        $test=$this->User_model->get_user($id);

        if(!empty($test[0]['username']))
        {
          $this->User_model->delete_user($id);
          $message = [
              'id' => $id,
              'message' => 'Deleted the resource'
          ];
          $this->set_response($message, REST_Controller::HTTP_OK); // NO_CONTENT (204) being the HTTP response code
        } else {
            $message = "Error";
            $this->set_response($message, REST_Controller::HTTP_NO_CONTENT); // NO_CONTENT (204) being the HTTP response code
        }
    }
}
