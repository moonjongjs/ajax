<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>PHP 데이터베이스 접속과 PHP반복문</title>
	<meta charset='utf-8'>
	
	<style>
		body{ text-align: center;}
		
		table {border-collapse:collapse; width:100px; margin:0 auto;}
		td {border:1px solid #ccc; padding:10px 20px; text-align:center; font-size:20px; }
	</style>
	
</head>
<body>


<?php
	
	$servername	= 'localhost';
	$username	= 'root';
	$password	= '0108';
	$dbname		= 'company';
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	if( !$conn ){
		echo '데이터베이스 접속 실패!!!<br>' . mysqli_connect_error();
	}
	else{
		echo '데이터베이스 접속 성공!!!<br>';
	}
	
	
	
	echo '<br>';
	echo 'for문';
	
	echo '<table>';
	
	//반복문 for(){}
	for($i=0; $i<10; $i++){
		echo '<tr><td>' . $i . '</td></tr>';
	}
	
	echo '</table>';
	
	
	echo '<br><br>';
	
	
	echo '<br>';
	echo 'while문 0~10  1씩증가';
	
	echo '<table>';
	
	$i=0;
	//반복문 while(){}
	while($i<10){	
		echo '<tr><td>' . $i . '</td></tr>';
		$i++;  //$i=$i+1;   $i+=1;  $i+=2; $i+=3; ...
	}
	
	
	echo '</table>';
	
	
	echo '<br>';
	echo 'while문 10~0 1씩감소';
	
	
	echo '<table>';
	
	$i=10;
	//반복문 while(){}
	while($i>0){	
		$i--;  //$i=$i-1 ;  $i-=1;  $i-=2;  $i-=3;
		echo '<tr><td>' . $i . '</td></tr>';
	}
	
	
	echo '</table>';
	
	
?>





</body>
</html>
