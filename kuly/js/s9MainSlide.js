;(function($, window, document, undefined){
	
	var s9Obj = {
		init: function(){
			var winW=s9SlideH=s9SlideW=imgH=s9ButtonW=s9ButtonH=0;
				s9Obj.s9ResizeFn();
				setTimeout(s9Obj.s9ResizeFn,100);
				
				$(window).resize(function(){
					s9Obj.s9ResizeFn();
				});
		},
		s9ResizeFn:	function(){
			winW = $(window).innerWidth();
			s9SlideW = winW*0.674141;
			s9SlideH = s9SlideW*0.666658755; //높이비율
			
			$('.section9-slide-container').css({height: s9SlideH+59 });
			
			s9ButtonW = winW*0.3; //버튼이미지박스 너비
			s9ButtonH = $('.section9-slide-img>img').innerHeight(); //버튼이미지박스 높이
			
		
			$('.s9Slide').css({width: s9SlideW });

			$('.s9Slide').eq(5).css({width: s9ButtonW, height: s9ButtonH });
			$('#section9 .s9Slide a').eq(5).css({width: s9ButtonW, height: s9ButtonH });
			
			$('.section9-slide-wrap').css({width: (s9SlideW*5+s9ButtonW) });	
		}
	}
	
	
	
	s9Obj.init();
	setTimeout(s9Obj.init,100 );
	

		
})(jQuery, window, document);//s9MainSlide.js