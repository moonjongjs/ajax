<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>PHP 데이터베이스 접속과 정보수정 update</title>
	<meta charset='utf-8'>
	
</head>
<body>
<?php
	
	$servername	= 'localhost';
	$username	= 'root';
	$password	= '0108';
	$dbname		= 'company';
	
	$connect = mysqli_connect($servername,$username,$password,$dbname);
	
	
	//유효성 체크 오류처리  die();
	if(!$connect){
		die('서버와 접속 실패' . mysqli_connect_error() );
	}
	else{
		echo '서버와 접속 성공';
	}
	
	//데이터베이스 테이블 데이터 수정
	//테이블이름은 customers 안에 
	//필드명은 City 의 내용중 like Lon% 시작하는 도시명을 모두 Seoul 고침(수정)
	//update 테이블이름 
	//set City='Seoul' 수정 내용
	//where City like 'Lon%'; 수정할 대상의 조건
	
	// $sql = "update customers set City = 'Seoul' where City like 'Lon%' ";
	// mysqli_query($connect, $sql);
	
	$sql = "update customers 
	        set City = 'Busan' 
			where City like 'Lodon%' ";
	
	if(mysqli_query($connect, $sql) ){  //수정이되었다면
		echo '레코드가 수정 되엇습니다.';
	}
	else{
		die('레코드 수정 실패' . mysqli_error($connect));
	}
	
	$sql = "select * from customers";
	$result = mysqli_query($connect, $sql);
	
	echo '<table>';
	while( $row = mysqli_fetch_assoc($result) ){
		echo '<tr>';
		echo '<td>' . $row['CustomerID'] . '</td><td>' . $row['CustomerName']. '</td><td>' . $row['ContactName'] . '</td><td>' . $row['Address']  . '</td><td>' . $row['City'] . '</td>';
		echo '</tr>';
	}
	echo '</table>';
	
	
	
?>
</body>
</html>
