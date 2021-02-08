<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>PHP 데이터베이스 접속과 정보입력 insert into</title>
	<meta charset='utf-8'>
	
</head>
<body>

<?php

	$servername = 'localhost';
	$user		= 'root';
	$password	= '0108';
	$dbname		= 'company';
	
	$connect = new mysqli($servername, $user, $password, $dbname);
	
	if(!$connect){
		echo '데이터베이스 접속 실패';
	}
	else{
		echo '데이터베이스 접속 성공';		
	}
	
	//테이블이름이 customers 에 데이터 입력 필드
	//CustomerID -- 자동 숫자 입력 auto-increment 
	
	//CustomerName
	//ContactName
	//Address
	//City
	//PostalCode
	//Country
	
	$sql = "insert into customers(CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country) values (93,'SEONJONG', 'LECTURE', 'seoul korea gangnam', 'gangnam', '010-123', 'KOREA')";
		
	if( mysqli_query($connect, $sql) ){
		echo '새로운 레코드 데이터가 성공적으로 입력 저장 되었습니다.';
	}	
	else{
		echo '에러 : 정보가 입력되지 않았습니다.';
	}
	

	//정보검색 삭제된 데이터 확인
	
	$sql = "select * from customers";
	$result = mysqli_query($connect, $sql);
	
	//테이블에 출력
	//아이디와 국가명 두개의 필드만 모두	
	
	
	//$result 에 레코드단위($row)로 뽑아내는 출력 mysqli_fetch_assoc($result); 
	//테이블(표) 
	echo "<table style='border-collapse:collapse;'>";
	
	
	while(  $row = mysqli_fetch_assoc($result) ){
		echo '<tr>';
		echo '<td>' . $row['CustomerName'] . '</td><td>' . $row['Country'] . '</td>';
		echo '</tr>';
	}
	
	echo '</table>';
	
	
	
	
?>

</body>
</html>
