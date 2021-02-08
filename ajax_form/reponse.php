<?php
$servername = "localhost";
$username = "root";
$password = "autoset";
$dbname = "ec";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO city (name, city)
VALUES ('$_POST[name]', '$_POST[city]');";


if (mysqli_multi_query($conn, $sql)) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>