$(function(){
	
	obj.init();
	
}); //objSlide.js

var cnt = 0;
var obj = {
	init:	function(){
		obj.swipeFn();
		obj.slideNavBtFn();
	},
	slideFn: function(){
		$('.section1-slide-wrap').stop().animate({left:(-100*cnt) + '%'},800);
		
		$('.slideNavBt').removeClass('addSlideNavBt');
		$('.slideNavBt').eq(cnt).addClass('addSlideNavBt');
	},
	swipeFn:	function(){
		$('.section1-slide-wrap').swipe({
			swipeLeft:	function(){
				cnt++; 
				if(cnt>2){
					cnt=2;
				}			
				obj.slideFn();
			},
			swipeRight:	function(){
				cnt--;
				if(cnt<0){
					cnt=0;
				}
				obj.slideFn();
			}		
		});
	},
	slideNavBtFn:	function(){
		$('.slideNavBt').each(function( idx ){
			$(this).on({
				click:	function(){
					cnt = idx ;
					obj.slideFn();
				}
			});
		});
	}
}









