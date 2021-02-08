
<?php //헤더 insert_address.php
    include_once('./header.php');
?>

<?php  //insert sql 본문 코딩

    $name   = $_POST['name']; //폼에서 전송한 
    $tel    = $_POST['tel'];  //데이터 필드Field(항목(Item)==속성(attribute)==칸==열(column)))
    $addr   = $_POST['addr'];

    $sql ="insert into address (name, tel, addr)  values ('$name', '$tel', '$addr')";
    mysqli_multi_query($conn, $sql);  //쿼리실행

    echo '데이터 입력이 성공적으로 되었습니다.' . $name .', ' . $tel . ', ' . $addr;

?>

<?php //푸터
    include_once('./footer.php');
?>