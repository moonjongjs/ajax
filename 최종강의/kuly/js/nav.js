;(function($,window,document,undefined){
	var page = 0;
	
	//메인버튼 클릭 이벤트
	$('.mainBtn').each(function(index){
		$(this).on({
			click:	function(){
				
				$('#header, .popup, .footPopup, .tabbar, .goTopBtn-wrap').show();
				
				//이전에 실행중인 페이지번호 가져오기
				for( i=0; i<$('.mainBtn').length; i++){
					//$('.nav li')에 클래스 addNavbar를 검색
					if( $('.nav li').eq(i).is('.addNavbar') ){ //true이면
						page = i;  //찾은 인덱스 번호
					}
				}
				
				//검색된 번호중 page < index 가 크면 nextPageFn(next) 함수
				//검색된 번호중 page > index 가 작으면 prevPageFn(prev) 함수								
				if( page < index ){
					nextPageFn( index );
				}
				else if( page > index ){
					prevPageFn( index );
				}
				
				
				//버튼의 데코레이션 애니메이션	
				$('.nav li').removeClass('addNavbar')
				$('.nav li').eq(index).addClass('addNavbar')
				$('.mainBtnBar').stop().animate({left:(20*index)+'%'}, 500, 'easeInOutExpo');
				
			}
		});
	});
	
	
	// 페이지 구현 함수 JQM
	// 매개변수에 아그먼트 값이 전달되면 구현 #intro, #main1, #main2, #main3, #main4
	function nextPageFn(next){ 
		$.mobile.changePage( '#main' + next , { changeHash:'false' });          //내부페이지 연결방식
		// $.mobile.changePage( 'main'+next+'.html');  //외부페이지 연결방식 main0.html
	}
	function prevPageFn(prev){
		if( prev === 0 ){
			$.mobile.changePage( '#intro' );
		}
		else{
			$.mobile.changePage( '#main' + prev  );	
		}
	}
	
	

	//팁바 메뉴 버튼 이벤트
	$('.tabbarBtn').each(function(idx){
		$(this).on({
			click:	function(){
				
				if( idx === 0 ){
					$.mobile.changePage( '#intro' );
					$('#header, .popup, .footPopup, .tabbar, .goTopBtn-wrap').show();
				}
				else {
					$.mobile.changePage( '#main'+(5+idx) );
					//마이컬리 헤더의 팝업창, 네비게이션과 푸터 탭바메뉴 팝업창 모두 hide()
					if( idx === 1 ){
						$('#header, .popup, .footPopup, .goTopBtn-wrap').hide();
						$('.tabbar').show();
					}
					else if( idx === 2 ){
						$('#header, .popup, .footPopup, .tabbar, .goTopBtn-wrap').show();
					}
					else if( idx === 3 ){
						$('#header, .popup, .footPopup, .tabbar, .goTopBtn-wrap').hide();
					}
				}
				
			}
		});		
	});
	
	
	
	
	
	
	
	
	//goTop
	$('.goTopBtn-wrap').on({
		click:	function(){
			$('html,body').stop().animate({ scrollTop:0 }, 400,'swing');
		}
	});
	

	
})(jQuery,window,document);
//nav.js