<?php
    //헤더파일
    include_once('./header.php');    


    //생성하기(만들기) 테이블  address
    $sql = 'create table address (
        idx int not null auto_increment,
        name varchar(50) not null,
        tel varchar(15) not null,
        addr varchar(250) not null,
        primary key(idx)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8';                   
    mysqli_query($conn, $sql); //데이터베이션 컨넥션, sql 실행
    
    

    //푸터파일    
    include_once('./footer.php');    


//테이블 생성 파일 경로
//moonjong2.dothome.co.kr/address/createTable_Address.php
//createTable_Address.php
?>
