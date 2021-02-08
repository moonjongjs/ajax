;(function($, window, document, undefined){
	var posLeft = btnWidth = boxLeft = 0;
	
		//필터기능과 스크롤 이벤트 로컬 스크롤 : 탭메뉴 버튼 
		$('.s56FilterBtn').each(function(index){
			$(this).on({
				click:	function(event){
					boxLeft = Math.abs($('.section56-filter-button-wrap').offset().left-15);
					posLeft = $(this).offset().left-15;
					
					btnWidth = $(this).innerWidth();
					
					//1. 디버깅 : offset().left  문제없음. 
					//   결과 : animate:left값문제 해결-전체박스의 좌측값 위치를 절대값으로 구하고 그걸 left:좌표에 더한다.
					$('.s56Deco').stop().animate({ left:(posLeft+boxLeft) , width:btnWidth }, 500, 'easeInOutExpo');

					//2. 디버깅 : 화면너비에 중앙으로 정렬  animate:메뉴전체가 중앙이동
					//   결과 : 스코롤 x값 포지션 위치를 화면의 중앙 정렬
					//        $(window).innerWidth()/2
					//        클릭버튼의 포지션 offset().left  
					//        버튼너비 $(this).innerWidth();
					var scrollMove = ($(window).innerWidth()/2) - ((posLeft+boxLeft)+(btnWidth+15)/2);
					$('.section56-filter-view').stop().animate({ scrollLeft: -scrollMove });
					
				}
			});		
		});
		
	
	
	
	
		
})(jQuery, window, document);//s5MainSlide.js