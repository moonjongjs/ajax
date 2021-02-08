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
	        set Country = 'USA' 
			where Country like 'Mexico%' ";
	
	if(mysqli_query($connect, $sql) ){  //수정이되었다면
		echo '레코드가 Mexico인 데이터를  USA로 수정 되엇습니다.';
	}
	else{
		die('레코드 수정 실패' . mysqli_error($connect));
	}
	
	//수정된 데이터만 정보 출력
	//정보검색 국가명 필드만 검색 테이블이름 customers 조건음 'USA' 만 검색
	$sql =	"select * from customers 
	         where Country like 'USA%' ";
	$result = mysqli_query($connect, $sql);
	
	
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
