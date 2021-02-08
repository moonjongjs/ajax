<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>PHP 데이터베이스 접속과 정보입력 insert into</title>
	<meta charset='utf-8'>
	
</head>
<body>

<?php

	$servername = 'localhost';
	$user		= 'moonjong2';
	$password	= 'anstjswhd0105';
	$dbname		= 'moonjong2';
	
	$connect = new mysqli($servername, $user, $password, $dbname);
	
	if(!$connect){
		echo '데이터베이스 접속 실패';
	}
	else{
		echo '데이터베이스 접속 성공';		
	}
	
	$sql = "insert into member
			(
				idx, 
				id, 
				password, 
				name
			) 
			values 
			(
				1,
				'moonjong',
				'moon0108',
				'문선종'
			)";
		
		
		
	if( mysqli_multi_query($connect, $sql) ){
		echo '새로운 레코드 데이터가 성공적으로 입력 저장 되었습니다.';
	}	
	else{
		echo '에러 : 정보가 입력되지 않았습니다.' . mysql_error($connect);
	}
	
	
?>

</body>
</html>
