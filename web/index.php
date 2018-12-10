<?php
echo 'Docker-compose example. If you see this, it means you have not mounted any web content on the default root.';

// $db_connection = pg_connect("host=localhost port = 5432 dbname=rails_app_development user=postgres password=Free123!");
// $db_connection = pg_connect('dbname=rails_app_development host=demo_postgres_1 port=5432 user=postgres password=Free123!');
// $dbconn = pg_connect("host=demo_postgres_1 port=5432 dbname=rails_app_development user=postgres password=Free123!")or die("Could not connect");

// Connect to the database
$dbconn = pg_connect("host=postgres dbname=rails_app_development user=postgres password=Free123!");
// Show the client and server versions
// print_r(pg_version($dbconn));

// print_r($db_connection);

// $host        = "host = 127.0.0.1";
//  $port        = "port = 5432";
//  $dbname      = "dbname = rails_app_development";
//  $credentials = "user = postgres password=Free123!";
//
//  $db = pg_connect( "$host $port $dbname $credentials"  );
//  if(!$db) {
//     echo "Error : Unable to open database\n";
//  } else {
//     echo "Opened database successfully\n";
//  }
// $servername = "db";
// $username = "root";
// $password = "maro123#";
// $dbname = "docker_php";
//
// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
//
// $sql = "INSERT INTO Persons (PersonID, FirstName)
// VALUES (1, 'Doe')";
//
// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }
//
// $conn->close();

//Connecting to Redis server on localhost
 // $redis = new Redis();
 // $redis->connect('redis', 6379);
 // echo "Connection to server sucessfully";
 // //check whether server is running or not
 // echo "Server is running: ".$redis->ping();
?>
