<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>PHP 데이터베이스 접속과 정보삭제 delete 삭제후 정보검색 select </title>
	<meta charset='utf-8'>
	
</head>
<body>
<?php
	
	$servername = 'localhost';
	$username	= 'root';
	$password	= '0108';
	$dbname		= 'company';
	
	$connect	= mysqli_connect($servername,$username,$password,$dbname);
	
	if(!$connect){
		die( '데이터베이스 서버 접속 실패' . mysqli_connect_error() );
	}
	else{
		echo '데이터베이스 서버 접속 성공';
	}
	
	//테이블명은 customers
	//삭제 하는데 조건은 국가명이 독일만 삭제
	//삭제후 정보 출력 아이디(번호), 국가명 정보검색 모두
	
	//삭제쿼리
	
	$sql = "delete from customers 
			where Country like 'USA%'";
	
	
	if( mysqli_query($connect, $sql) ){
		echo '국가명 Germany가 삭제 되었습니다. ';
	}
	else{
		die('삭제 실패'  . mysqli_connect_error() );
	}
	
	//정보검색 삭제된 데이터 확인
	
	$sql = "select * from customers";
	$result = mysqli_query($connect, $sql);
	
	//테이블에 출력
	//아이디와 국가명 두개의 필드만 모두
	
	echo '<table>';
	
	//반복 레코드 정보 가져와서 출력
		while( $Row  = mysqli_fetch_assoc($result)  ){
			echo '<tr>';
			echo '<td>' . $Row['CustomerID'] . '</td><td>' . $Row['Country'] . '</td>';
			echo '</tr>';
		}
		
	echo '</table>';
	
	
?>
</body>
</html>
