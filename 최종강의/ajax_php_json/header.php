
<?php //header.php
 //서버사이트 스크립트 언어 웹문서 인코딩 - 한글 문자 표현 인코딩
header('Content-type: text/html; charset=utf8');

$servername = 'localhost';
$username   = 'moonjong2';
$password   = 'anstjswhd0105';
$dbname     = 'moonjong2';

//db 컨넥션 접속
$conn = mysqli_connect($servername, $username, $password, $dbname);
mysqli_set_charset($conn, 'utf8'); //인코딩

if( !$conn ){
    die('데이터베이스 접속 실패!!!');
}
// else{
//     echo '데이터베이스 접속 성공!!!'; //웹문서에 뿌려지는 내용
// }

?>