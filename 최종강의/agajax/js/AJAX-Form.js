jQuery(function(){
	var txtirum 	= '';
	var txtmail 	= '';
	var txtchoice 	= '';
	var txtmessage	= '';
	
	
	
	
	$('.textInput').on({
		keyup:	function(){
			if( $(this).val() !='' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
		},
		change:	function(){
			if( $(this).val() !='' ){
				$(this).removeClass('addClassInput');
			}
			else{
				$(this).addClass('addClassInput');
			}
		}		
	});
	
	
	
	
	
	
	//폼전송 유효성검사
	$('.submitBt').on({
		click:	function(){
			//입력된 데이터 변수에 기억
			txtirum 	= $('#irum').val();  
			txtmail 	= $('#mail').val();  
			txtchoice 	= $('#choice').val();  
			txtmessage	= $('#message').val(); 
			
			
			
			if( txtirum == '' ||  txtmail == '' || txtchoice=='' || message=='' || txtmail.indexOf('@') == -1 || txtmail.indexOf('.') == -1 ){
				
				if( txtirum =='' ){
					$('#irum').addClass('addClassInput');
				}
				else{
					$('#irum').removeClass('addClassInput');
				}
				
				if( txtmail =='' || txtmail.indexOf('@') == -1 || txtmail.indexOf('.') == -1 ){
					$('#mail').addClass('addClassInput');
				}
				else{
					$('#mail').removeClass('addClassInput');
				}
				
				if( txtchoice =='' ){
					$('#choice').addClass('addClassInput');
				}
				else{
					$('#choice').removeClass('addClassInput');
				}
				
				if( txtmessage =='' ){
					$('#message').addClass('addClassInput');
				}
				else{
					$('#message').removeClass('addClassInput');
				}
				
				$('.errorText').stop().fadeIn(1000);
				
				return false;
			}
			else{
				//AJAX 구현
				$.ajax({
					url:'formMail.php',
					type:'post',
					data:{
						irum:txtirum,
						mail:txtmail,
						choice:txtchoice,
						message:txtmessage
					},
					success:	function(){
						console.log(irum);
						console.log(mail);
						console.log(choice);
						console.log(message);
					},
					error:		function(){
						alert('AJAX 오류!!!');
					}
				});
			}
			
			
		}
	});
	

});//AJAX-Form.js