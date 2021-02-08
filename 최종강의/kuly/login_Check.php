<?php
	
	$servername = 'localhost';
	$username = 'moonjongw';
	$password = 'moon0108';
	$dbname = 'moonjongw';


	$connect = mysqli_connect($servername, $username, $password, $dbname); 
	mysqli_set_charset($connect, 'utf8');
	
	//서브밋 버튼 클릭한 정보가 맞다면
	if( isset( $_POST['login_submit'] ) ){
		
		//세션시작함수
		session_start();
		$login_id = $_POST['login_id'];
		$login_pw = $_POST['login_pw'];
		
		//sql id와 password 맞자 비교 인증절차
		//select * from dot_member where  필드이름id  and  필드이름pw 
		//이미 가입된 회원정보테이블(dot_member)정보와 비교 인증한다.
		$sql = "select * from dot_member where id = '".$login_id."' and  pw = '".$login_pw."'";
		$result = mysqli_query($connect, $sql);
		
		//비교한 데이터정보를 이용 1개이상 정보가 있으면 로그인 성공 한다.
		if( mysqli_num_rows($result)>0 ){
			
			//세션에 저장(기억)			
			$_SESSION['login_id'] = $_POST['login_id'];	

			//로그인 페이지로 이동이나 로그인 리턴값 전달
			if( isset( $_SESSION['login_id'] ) ){
				echo "<p>환영합니다.</p>";	
				echo "<p>'".$_SESSION['login_id']."'님</p>";	
				echo "<p><a href='javascript:void(0);' class='logoOutBtn'>로그아웃</a></p>";
			}
			else{
				echo "";
			}
			
			
		}
		else{
			echo "<p>회원".$_POST['login_id']." 님</p>";	
			echo "<p>로그인 정보가 없습니다.</p>";	
			echo "<p>회원 가입 하셔야 합니다.</p>";	
		}
	}
	
//moonjongw.dothome.co.kr/kurly/
//login_Check.php
?>

