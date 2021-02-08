<?php

	$servername = "localhost";
	$username = "moonjong2";
	$password = "anstjswhd0105";
	$dbname = "moonjong2";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "INSERT INTO member (irum, mail, interested, message)
	VALUES ('$_POST[irum]', '$_POST[maile]', '$_POST[interested]', '$_POST[message]');";


	if (mysqli_multi_query($conn, $sql)) {
		echo "New records created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);

?>
