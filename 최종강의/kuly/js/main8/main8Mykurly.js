;(function($, window, document, undefined){
	var setId;
		
		//세션(SESSION) 체크 타이머
		function sessionTimerFn(){
			setId=setInterval(sessionAjaxCheckFn, 1000);
		}	
		sessionTimerFn();
		
		//세션(SESSION)체크 AJAX - API
		function sessionAjaxCheckFn(){

			$.ajax({
				url:'./session_loop_check.php',
				type:'POST',
				success: function(data){
					if( data!=='' ){
						$('#login_submit').hide();
						$('.logoin-wrap').empty(); 
						$('.logoin-wrap').append(data);
					}
					else{
						$('#login_submit').show();
						$('.logoin-wrap').empty();
						clearInterval(setId);
					}
				},
				error:	 function(){
					console.log('AJAX Error!!!');					
				}
			});
		}	
		
		
		
		//로그아웃 이벤트
		$(document).on('click','.logoOutBtn', function(){
			
			$.ajax({
				url:'./logOut.php',
				type:'POST',
				success:function(data){
					clearInterval(setId);
					$('.logoin-wrap').empty(); //로그아웃 ( PHP 반환값 버튼 )
					$('#login_submit').show(); //로그인 버튼 
				},
				error:	function(){
					console.log('AJAX Error!!!');
				}
			});

		});
		
		
		
		
		//로그인버튼 클릭 이벤트
		$('#login_submit').on({
			click:	function(event){
				event.preventDefault();

				var txtId = $('#login_id').val();
				var txtPw = $('#login_pw').val();
				var txtBt = $('#login_submit').val();
				
				//로그인 AJAX - API
				$.ajax({
					url:'./login_Check.php',
					type:'POST',
					data:{
						login_id 	 : txtId,
						login_pw 	 : txtPw,
						login_submit : txtBt
					},
					success:function(data){
						
						$('#login_id').val('');
						$('#login_pw').val('');
						$('#login_submit').hide(); //로그인 버튼 
						$('.logoin-wrap').empty(); 
						$('.logoin-wrap').append(data); //로그인 메시지, 로그아웃버튼 추가
						
						sessionTimerFn();
						
					},
					error:	function(){
						console.log('AJAX Error!!!');						
					}
				});
				
				
			}
		});
		
		
		
		
		
		/////////////////////////////////////////////////////////////
		//회원가입버튼 클릭 이벤트
		$('.gaibBtn').on({
			click:	function(){			
				$.mobile.changePage('#main8-gaib');
			}
		});
		
		
		$('.memberBtn').each(function(idx){
			$(this).on({
				click:	function(){
					
					$('.memberBtn').removeClass('addMemberBtn');
					$(this).addClass('addMemberBtn');
					$('.member-login').hide();
					$('.member-login').eq(idx).show();
					
				}
			})
		});
		
		
		
		$('.loginCloseBtn').on({
			click:	function(){	
				$('#header, .popup, .footPopup, .tabbar, .goTopBtn-wrap').show();
				$.mobile.changePage('#intro');
			}
		})
		
		
		//메인8가입 페이지 이동
		$('.m8gaib-backBtn').on({
			click:	function(){	
				$.mobile.changePage('#main8');
			}
		})
			
			
		//회원가입 폼
		$('.gaib_button').on({
			click:	function(event){	
				event.preventDefault();

				var txtId      = $('#gaib_id').val();
				var txtPw      = $('#gaib_pw').val();
				var txtName    = $('#gaib_name').val();
				var txtPhone   = $('#gaib_phone').val();
				var txtemail   = $('#gaib_email').val();


				//정규 표현식 입력제한
				var idCheck    = /^[A-Za-z0-9]{4,12}$/;
				var pwCheck    = /^[A-Za-z0-9]{4,8}$/;
				var nameCheck  = /^[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z]{2,50}$/;
				var phoneCheck = /^\d{2,3}\d{3,4}\d{4}$/;
				var emailCheck = /^[A-Za-z0-9_]+[@]{1}[A-Za-z0-9_.]*[A-Za-z0-9_]+[.]{1}[A-Za-z]{1,6}$/;

					if( !idCheck.test( txtId ) ){
						alert('아이디는 4~12이내이고, 영문(대소문자), 숫자(0~9)만  입력 하세요!!!');
						$('#gaib_id').focus();
						return false;	
					}
					else if( !pwCheck.test( txtPw ) ){
						alert('비밀번호는 4~8이내이고, 영문(대소문자), 숫자(0~9)만  입력 하세요!!!');
						$('#txtPw').focus();
						return false;	
					}
					else if( !nameCheck.test( txtName ) ){
						alert('이름은 2~50이내이고, 한글, 영문(대소문자)만  입력 하세요!!!');
						$('#txtName').focus();
						return false;	
					}
					else if( !phoneCheck.test( txtPhone ) ){
						alert('휴대폰 번호를 형식에 맞게 입력 하세요!!!');
						$('#txtPhone').focus();
						return false;	
					}
					else if( !emailCheck.test( txtemail ) ){
						alert('이메일을 형식에 맞게 입력 하세요!!!');
						$('#txtemail').focus();
						return false;	
					}
					else{
						ajaxLoginFn();
					}

					//회원가입 AJAX-PHP API
					function ajaxLoginFn(){
						
						$.ajax({
							url:'./gaib_insert.php',
							type:'POST',
							data:{
								gaib_id:    txtId,
								gaib_pw:    txtPw,
								gaib_name:  txtName,
								gaib_phone: txtPhone,
								gaib_email: txtemail
							},
							success:function(data){

								$('#gaib_id').val('');
								$('#gaib_pw').val('');
								$('#gaib_name').val('');
								$('#gaib_phone').val('');
								$('#gaib_email').val('');
								
								$('.gaib-insa').append(data);
								
							},
							error:	function(){
								console.log('AJAX Error!!!');
							}
						});
						
					}
					

			}
		})
			
	
	
})(jQuery, window, document);
//main8/main8Mykurly.js