$(function(){
	//창 너비를 슬라이드 2칸 1/3 정도의 너비로 계산
	var winW = 0;
	var slideW = 0;
	var n = $('.section5-slide-wrap>li').length; //8개
	var nView = 2.3; //보여질 슬라이드 개수
	var cnt = 0; 
	
	
		resizeFn();
	
		$(window).resize(function(){
			resizeFn();
		});
	
		function resizeFn(){
			winW = $(window).innerWidth(); //예] 1000/2 = 500
			slideW = winW/nView;   //슬라이드 1개당 너비(한화면에 보여질 이미지)
			
			//슬라이드 전체 너비
			$('.section5-slide-wrap').css({width: slideW*n });
			//슬라이드 1칸 너비
			$('.section5-slide-wrap>li').css({width: slideW });
		}
		
		//터치이벤트 다음슬라이드
		$('.section5-slide-wrap').on({
			swipeleft:	function(){
				
				cnt++;
				
				if( cnt>3 ){
					cnt=3.7;
				}
				console.log( cnt );
				$('.section5-slide-wrap').stop().animate({left: -((cnt*slideW)+20) },1000);
			},
			swiperight:	function(){
				
				cnt--;
							
				if( cnt<0 ){
					cnt=0;
				}
				console.log( cnt );
				$('.section5-slide-wrap').stop().animate({left: -(cnt*slideW) },1000);
			}
		});

		
	
	
	
});//sec2Slide.js




