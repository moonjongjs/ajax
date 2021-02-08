$(function(){
	var cnt = 0;
	
	function slideFn(){
		$('.section1-slide-wrap').stop().animate({left:(-100*cnt) + '%'},800);
		
		$('.slideNavBt').removeClass('addSlideNavBt');
		$('.slideNavBt').eq(cnt).addClass('addSlideNavBt');
	}
		
	$('.section1-slide-wrap').swipe({
		swipeLeft:	function(){
			cnt++; 
			if(cnt>2){
				cnt=2;
			}			
			slideFn();
		},
		swipeRight:	function(){
			cnt--;
			if(cnt<0){
				cnt=0;
			}
			slideFn();
		}		
	});
		
	$('.slideNavBt').each(function( idx ){
		$(this).on({
			click:	function(){
				cnt = idx ;
				slideFn();
			}
		});
	});
	

}); //slide.js