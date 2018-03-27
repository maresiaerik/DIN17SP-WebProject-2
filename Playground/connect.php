<?php

	try
	{
	 $dsn = "mysql:host=localhost;dbname=egg_hunt";
	 $db = new PDO ($dsn, "webuser", "webPass");
	 //print ("Connected\n");
	}
	catch (PDOException $e)
	{
	 print ("Cannot connect to server\n");
	 print ("Error code: " . $e->getCode () . "\n");
	 print ("Error message: " . $e->getMessage () . "\n");
	}
	?>
