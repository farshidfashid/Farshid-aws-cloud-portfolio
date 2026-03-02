<?php
$servername = "foodapp-db.c2ry8smaq0ji.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "Password123!";
$dbname = "foodapp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
