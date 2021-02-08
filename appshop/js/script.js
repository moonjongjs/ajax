$(function(){

	//배너 이벤트
	//header banner
	$('.header-banner').on({
		click:	function(){
			$('.header-banner').addClass('addbanner');
			$('.content-wrap').addClass('addbanner');
		}
	});
	
	//footer banner
	$('.footBannerCloseBtn').on({
		click:	function(){
			$('.footer-banner').addClass('addFootbanner');
		}
	});
	
	
	
	//Header Main Button Event
	$('.mainBtn').each(function(index){
		$(this).on({
			click:	function(){
				$('.main_bar').animate({left:  (index*20) + '%' }, 500 ,'easeInOutExpo');
			}
		});
	});
	
	
	//마이컬리
	$('.footNavBtn').eq(3).on({
		click:	function(){
			location.href='member.html';
		}
	});
	
	

});