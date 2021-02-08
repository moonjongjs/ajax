;(function($, window, document, undefined){
	
	//반응형 창너비
	var winW = cnt = s1SetId  = n = 0;
	    n =	$('.slide').length-2;
		
		
		var s1ResizeFn = function(){
			winW = $(window).innerWidth();
			$('.slide').css({width: winW });
			$('.section1-slide-wrap').css({width: (winW*10), marginLeft: (-winW) });
			
			//메인슬라이드 반응형 초기화 
			$('.section1-slide-wrap').stop().animate({left:-(winW*cnt)},0);
		}
		
		s1ResizeFn();
		setTimeout(s1ResizeFn,100);
		
		$(window).resize(function(){
			s1ResizeFn();
		});
	
	
		s1AutoPlayFn();
	
		function s1AutoPlayFn(){
			s1SetId = setInterval(s1NextCountFn, 4000);
		}
	
		//메인 슬라이드 터치시 setInterval() 일시중지,
		//그리고 카운트 타이머 동작 5초 동안 터치가 없으면
		//자동 setInterval() 재실행
		function touchTimerCounter(){
			clearInterval(s1SetId);  	 //1. 자동실행 일시중지
			var touch = 0;				 //2. touch 카운트 변수 초기화
			var touchId = setInterval(function(){  //3. 셋인터발 1초간격으로
				touch++;                 //4. 카운트 1,2,3,4,5
				if( touch >= 5 ){        //5. 5초이상이면
					clearInterval(s1SetId); //6. 자동실행 재시작 중지시키고(버블링막기위해)
					s1AutoPlayFn();      //7. 자동실행 재시작
					clearInterval(touchId); //8. 터치 카운트id 자신을 중지
				}
			},1000); //카운트 5초
		}
		
		//터치이벤트
		$('.section1-slide-view').swipe({
			swipeLeft:	function(event){
				event.preventDefault();
				if( !$('.section1-slide-wrap').is(':animated') ){
					s1NextCountFn();	
				}
				//터치시 자동실행 슬라이드 일시중지 재실행 카운트 함수
				touchTimerCounter();
			},
			swipeRight:	function(event){
				event.preventDefault();
				if( !$('.section1-slide-wrap').is(':animated') ){
					s1PrevCountFn();
				}
				//터치시 자동실행 슬라이드 일시중지 재실행 카운트 함수
				touchTimerCounter();
			}
		});
		
		
		
		//다음 슬라이드 카운트
		function s1NextCountFn(){
			cnt++;
			s1MainSlideFn();
		}
		
		//이전 슬라이드 카운트
		function s1PrevCountFn(){
			cnt--;
			s1MainSlideFn();
		}
		
		
		//메인슬라이드
		function s1MainSlideFn(){
			
			$('.section1-slide-wrap').stop().animate({left: -(winW*cnt) }, 800, 'easeOutExpo', function(){

				if(cnt>7){
					cnt=0;					
					$('.section1-slide-wrap').stop().animate({left:-(winW*cnt)},0);
				}
				if(cnt<0){
					cnt=7;					
					$('.section1-slide-wrap').stop().animate({left:-(winW*cnt)},0);
				}
				
				
			});
			
				//페이지네이션
				var page;
			
				if(cnt>7){
					page = 0;
				}
				else if(cnt<0){
					page = 7;
				}
				else{
					page = cnt;
				}
				$('.curentPage').text( page+1 ); //현재 페이지번호
				$('.totalPage') .text( n );   //전체 페이지번호
			
		}
		
		
	
	
})(jQuery, window, document);//s1MainSlide.js