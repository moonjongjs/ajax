<?php //select_address.php
    include_once('./header.php');
?>


<?php 
    $sql = 'select * from address';
    $result = mysqli_query($conn, $sql);

    //결과 데이터가 최소한 1개이상이 있어야 출력한다.
    //레코드(Record) = 튜플(Tuple) = 행(Row) = 줄

    $arr = array(
        array(),
        array(),
        array(),
        array(),
        array()
    );


    if( mysqli_num_rows($result) > 0  ){ 
        // $txt .= "<ul>";
            //결과를 반복문을 써서  테이블 내용
            //웹으로 출력 하는 프로그래밍  html 요소 : 테이블 tr td 
            //연관배열로 정보를 가져와서 반복처리
            $cnt = -1;
            
            //반복처리 
            for($i=0; $i<$row=mysqli_fetch_array($result); $i++){ //조건이 만족 할 때 까지 반복
            // while( $row = mysqli_fetch_array($result) ){ //조건이 만족 할 때 까지 반복
                $cnt++; //카운트 증가변수 1 2 3 4 5 6 ...11
                $arr[$cnt][0]=$cnt;
                $arr[$cnt][1]=$row['idx'];
                $arr[$cnt][2]=$row['name'];
                $arr[$cnt][3]=$row['tel'];
                $arr[$cnt][4]=$row['addr'];

                // $txt .= "<li>";
                // $txt .= "<span>". $cnt         ."</span>";      
                // $txt .= "<span>". $row['idx']  ."</span>";
                // $txt .= "<span>". $row['name'] ."</span>";
                // $txt .= "<span>". $row['tel']  ."</span>";
                // $txt .= "<span>". $row['addr'] ."</span>";
                // $txt .= "</li>";
            } //반복처리 


        // $txt .= "</ul>";
    } 
    
    // echo  '총 레코드 개수 : ' . mysqli_num_rows($result);
    foreach($arr as $a){
        echo $a.",";
    }
    
    
?>


<?php
    include_once('./footer.php');
?>
