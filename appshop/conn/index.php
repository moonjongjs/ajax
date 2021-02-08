<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>PHP 데이터베이스 접속과 PHP반복문</title>
	<meta charset='utf-8'>
	
	<style>
		body{ text-align: center;}
		
		table {border-collapse:collapse; width:80%; margin:0 auto;}
		td {border:1px solid #ccc; padding:10px; text-align:left; font-size:15px; }
		td:first-child {text-align:center; }
		tr:nth-child(even) td {background:#f9f9f9;}
	</style>
	
</head>
<body>


<?php

	$servername = 'localhost';
	$username   = 'root';
	$password	= '0108';
	$dbname		= 'company';

	$conn = new mysqli($servername, $username, $password, $dbname);
	
	if( !$conn ){
		echo '실패메시지 <br>' . mysqli_connect_error();
	}
	else{
		echo '성공메시지 <br><br>';	
	}
	
	//쿼리 실행 select * from customers	
	$sql = "select * from customers where Country like '%USA%' order by City asc";
	$result = mysqli_query($conn, $sql);
	
	echo '<br><br><h1>DATABASE : COMPANY - [TABLE NAME : customers] - LIST </h1><br><br><br><br><br><br>';
	
	echo '<table>';
	//데이터 레코드 단위로 가져오기 반복처리 - 연관배열 mysqli_fetch_assoc()
	while( $record = mysqli_fetch_assoc($result) ){
		echo '<tr>';
		echo '<td>' . $record['CustomerID'] . '</td><td>' . $record['CustomerName'] . '</td><td>' . $record['ContactName'] . '</td><td>' . $record['Address'] . '</td><td>' . $record['City']  . '</td><td>' . $record['PostalCode'] . '</td><td>' . $record['Country'] . '</td>';
		echo '</tr>';
	}
	echo '</table>';
	
?>

</body>
</html>
