<?php

	//세션시작함수
	session_start();
	if( isset( $_SESSION['login_id'] ) ){
		echo "<p>환영합니다.</p>";	
		echo "<p>'".$_SESSION['login_id']."'님</p>";	
		echo "<p><a href='javascript:void(0);' class='logoOutBtn'>로그아웃</a></p>";
	}
	else{
		echo "";
	}
			

//session_loop_check.php
?>
