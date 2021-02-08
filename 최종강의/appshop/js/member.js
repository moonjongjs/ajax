$(function(){
	//회원, 비회원 스크립트
	//팝업창 버튼 이벤트
	$('.hpopCloseBtn').on({
		click:	function(){
			$('#header-popup').hide(0);
		}
	});
	
	$('.winCloseBtn').on({
		click:	function(){			
			location.href='index.html';
		}
	});
	
	$('.gaibBtn').on({
		click:	function(){			
			location.href='memberGagib.html';
		}
	});
	
	$('.prevPageBtn').on({
		click:	function(){		
			location.href='member.html';
		}
	});
	
	//탭메뉴 버튼 이벤트
	$('.navBtn').eq(0).on({
		click:	function(){
			$('#form-memer1').stop().show(0);
			$('#form-memer2').stop().hide(0);
			$('.navBtn').removeClass('addNav');
			$(this).addClass('addNav');
		}
	});
	
	$('.navBtn').eq(1).on({
		click:	function(){
			$('#form-memer1').stop().hide(0);
			$('#form-memer2').stop().show(0);
			$('.navBtn').removeClass('addNav');
			$(this).addClass('addNav');			
		}
	});
	
	
	//아이디 찾기
	$('.idSearchBtn').on({
		click:	function(){
			location.href='idfind.html';
		}
	});
	
	//비밀번호 찾기
	$('.psSearchBtn').on({
		click:	function(){
			location.href='passfind.html';
		}
	});
	
	//아이디/비밀번호창에서 member 창으로 뒤로가기
	$('.backMemberBtn').on({
		click:	function(){
			location.href='member.html';
		}
	});
	
	
			

}); //member.js










