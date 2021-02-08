jQuery(function(){

	$('#action').on({
		click:	function(){
			selectAjax();
		}
	});
	
	selectAjax();
	function selectAjax(){
		//users 리스트를 select.php 에서 받아온다.
		$.ajax({
			url:"select.php",
			type:"POST",
			success:function(data){
				$('#result').html(data);
			},
			error:function(){
				console.log('SELECT AJAX 에러!!!');
			}
		})		
	}
	

});

