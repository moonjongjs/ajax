;(function($, window, document, undefined){

	
	var s2Obj = {
		init: function(){
			var winW=s2SlideW=s2SlideH=s2ButtonH=s2ButtonW=0;
				s2Obj.s2ResizeFn();
				setTimeout(s2Obj.s2ResizeFn,100);
				
				$(window).resize(function(){
					s2Obj.s2ResizeFn();
				});
		},
		s2ResizeFn:	function(){
			winW = $(window).innerWidth();
			s2SlideW = winW*0.421938; //이미지너비 = 창너비 * 이미지너비비율
			s2SlideH = s2SlideW*1.299991942; //이미지높이=이미지너비*이미지높이비율
			
			$('.section2478-slide-container').css({height: s2SlideH+59 });
			
			s2ButtonW = winW*0.3; //버튼이미지박스 너비
			s2ButtonH = $('.section2478-slide-img>img').innerHeight(); //버튼이미지박스 높이
			
			$('.s2478Slide').css({width: s2SlideW });
			
			$('#section4 .s2478Slide').eq(6).css({width: s2ButtonW, height: s2ButtonH });
			$('#section7 .s2478Slide').eq(6).css({width: s2ButtonW, height: s2ButtonH });
			$('#section8 .s2478Slide').eq(6).css({width: s2ButtonW, height: s2ButtonH });
			
			$('#section4 .s2478Slide a').eq(6).css({width: s2ButtonW, height: s2ButtonH });
			$('#section7 .s2478Slide a').eq(6).css({width: s2ButtonW, height: s2ButtonH });
			$('#section8 .s2478Slide a').eq(6).css({width: s2ButtonW, height: s2ButtonH });
			
			$('#section2 .section2478-slide-wrap').css({width: (s2SlideW*8) });		
			
			$('#section4 .section2478-slide-wrap').css({width: (s2SlideW*6+s2ButtonW) });		
			$('#section7 .section2478-slide-wrap').css({width: (s2SlideW*6+s2ButtonW) });		
			$('#section8 .section2478-slide-wrap').css({width: (s2SlideW*6+s2ButtonW) });		
		}
	}
	
	s2Obj.init();
	

		
})(jQuery, window, document);//s2MainSlide.js