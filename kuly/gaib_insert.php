<?php

	//DB 연동
	$servername = 'localhost';
	$username = 'moonjongw';
	$password = 'moon0108';
	$dbname = 'moonjongw';

	$connect = mysqli_connect($servername, $username, $password, $dbname); 
	mysqli_set_charset($connect, 'utf8');

	//AJAX로 넘겨받은 폼데이터를 PHP코딩 그리고 DB table : dot_member 에 저장
	/////////////////////////////////////////////
	//1.AJAX로 넘겨받은 폼데이터 안에 name 을 PHP 변수에 저장
	$gaib_id 	= $_POST['gaib_id'];
	$gaib_pw 	= $_POST['gaib_pw'];
	$gaib_name 	= $_POST['gaib_name'];
	$gaib_phone = $_POST['gaib_phone'];
	$gaib_email = $_POST['gaib_email'];
	
	//2.SQL INSERT INTO ~ 실행문 DB에 저장
	$sql = "insert into dot_member(id, pw, name, phone, email) values
		   ('".$gaib_id."', '".$gaib_pw."', '".$gaib_name."', '".$gaib_phone."', '".$gaib_email."')";
	mysqli_query($connect, $sql); //쿼리실행문 db데이터가 들어가 실행
	
	//리턴 내용  ajax  data로 보낸다.
	echo "<p style='text-align:center; font-size:20px; color:#5f008; '>".$gaib_name."님 가입을 축하드립니다. </p>";
	

//gaib_insert.php
?>

