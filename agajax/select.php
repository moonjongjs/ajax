<?php
	$servername = "localhost";
	$username = "moonjong2";
	$password = "anstjswhd0105";
	$dbname = "moonjong2";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

		$output = '';
		// $sql = "delete FROM member where idx=18";
		// mysqli_query($conn,$sql);
		
		$sql = 'SELECT * FROM member order by idx DESC';
		$result = mysqli_query($conn,$sql);
		$output .= '
			<table class="table">
			<tr>
			<th width="5%">IDX</th>
			<th width="15%">이름</th>
			<th width="25%">이메일</th>
			<th width="25%">좋아하는 것</th>
			<th width="30%">메시지 내용</th>
			</tr>
		';
		if(mysqli_num_rows($result) >0){
			while($row = mysqli_fetch_array($result)){
				$output .= '
					<tr>
					<td>'.$row["idx"].'</td>
					<td>'.$row["irum"].'</td>
					<td>'.$row["mail"].'</td>
					<td>'.$row["interested"].'</td>
					<td>'.$row["message"].'</td>
					</tr>
				';
			}
		}
		else{
			$output .= '
				<tr>
				<td colspan="7">데이터가 없습니다.</td>
				</tr>
			';
		}

		$output .= '
			</table>
		';

		echo $output;



	mysqli_close($conn);
?>
	
