<?php

	//로그아웃	
	session_start();
	session_destroy(); //로그아웃 함수
	echo $_SESSION['login_id'].'님 Bye Bye';
	
//logOut.php
?>