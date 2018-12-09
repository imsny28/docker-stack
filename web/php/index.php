<?php
$servername = "db";
$username = "root";
$password = "maro123#";

// Create connection
$conn = new mysqli($servername, $username, $password);

// print_r($conn);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
alter user 'username'@'localhost' identified with mysql_native_password by 'password';
