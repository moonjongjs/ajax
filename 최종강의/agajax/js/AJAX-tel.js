jQuery(function(){
	var txt = '';
	
	
	$('.ajaxBt').on({
		click:	function(){
			
			//data 저장된 json파일 가져와서 처리하기 콘솔에 화면에
			
			$.ajax({
				url:'data/tel.json',  //불러올 JSON 파일경로및 파일명
				dataType:'JSON',  //파일형식 
				success:	function(data){
					//반복문(배열처리 레코드 단위로 가져온다.)
					$.each(data.phone, function(index, object){
						txt += object.no + ', ' + object.irum + ', ' +  object.tel + '<br>';  
					});
					
					$('.AJAXoutput').html( txt );
					txt='';
					
				},
				error:		function(){
					console.log('AJAX 오류메시지!!!');
				}
			});
			
			
		}
	});
	
});//AJAX-tel.js