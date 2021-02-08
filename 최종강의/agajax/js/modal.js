jQuery(function(){
	var cnt = 0;
	var txt = '';
	var topV = 0;
		
		setInterval(imgBoxFn, 100);
		
		
		function imgBoxFn(){
			topV = ($(window).innerHeight()-$('.modal-img').innerHeight())/2;
			// 이미지박스 탑값
			$('.modal-img').css({top: topV });
		}
		
		//모달이미지 반응형
		//여백/2(topV) = 창높이 - 이미지박스 높이
		//언제 : 창너비 또는 높이가 변경될 때 반응형
		$(window).resize(function(){
				imgBoxFn();
		});
	
	
	
	//터치 슬라이드 스와이프
	
	$('.modal').swipe({
		swipeLeft:	function(){ //다음 슬라이드
		
			cnt++;
			galleryImageFn();
			
		},
		swipeRight:	function(){ //이전 슬라이드
			
			cnt--;
			galleryImageFn();
			
		}
	});
	
	
	//갤러리 이미지 버튼 클릭 이벤트
	$('.galleryBt').each(function(index){
		$(this).on({
			click:	function(){
				cnt = index+1;
				galleryImageFn();
			}
		});
	});
	
	
	//다음 이미지 
	$('.modalNextBt').on({
		click:	function(){
			cnt++;
			galleryImageFn();
		}
	});
	
	//이전 이미지 
	$('.modalPrevBt').on({
		click:	function(){
			cnt--;
			galleryImageFn();
		
		}
	});
	
	
	//공통함수 이전 다음 네비 버튼 
	function galleryImageFn(){

		if( cnt > 8 ){
			cnt = 1;
		}

		if( cnt < 1 ){
			cnt = 8;
		}

		$('.modal-img>img').stop().fadeOut(0).attr('src', 'img/work-' + cnt + '.jpg' ).fadeIn(2000);;
		txt = $('.galleryBt').eq(cnt-1).find('img').next().text();

	}
	
	
	
	
	
	//모달창 열기
	$('.workBt').on({
		click:	function(){
			$('.modal').show();
			$('html').addClass('addScroll');
		}
	});
	
	
	//모달창 닫기
	$('.closeBt').on({
		click:	function(){
			$('.modal').hide();
			$('html').removeClass('addScroll');
		}
	});
	
	
	
	
});//modal.js