<?php
	$servername = "localhost";
	$username = "moonjong2";
	$password = "anstjswhd0105";
	$dbname = "moonjong2";

	$conn = new mysqli($servername, $username, $password, $dbname);
	
	if(!$conn){
		die('error !!!' . mysqli_connect_error() );
	}
	else{
		echo 'successfully!!!';
	}

	

	$sql = 'create table member
			(
				idx int not null auto_increment,
				id varchar(50) not null,
				password varchar(20) not null, 
				name varchar(100) not null,
				primary key(idx)
			)';
			
			
			
	if( mysqli_query($conn, $sql) ){
		echo "Table MyGuests created successfully";
	} else {
		echo "Error creating table: " . mysqli_error($conn);
	}
	
	
	mysqli_close($conn);
?>