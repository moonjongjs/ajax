$(function(){
	var setId = 0;
	var     n = $('.slide').length;
	var     s = [];
	var     a = [];
	var     b = [];
		 s[0] = 1;
		
		//autoPlay();
	
		function autoPlay(){
			// setId = setInterval(NextSlideIf, 3000);			
			setId = setInterval(PrevSlideIf, 3000);			
		}
			
		
		$('.section1-slide-wrap').on({
			swipeleft: 	function(){
				NextSlideIf();
			},
			swiperight: 	function(){
				PrevSlideIf();
			}			
		});
		
		
		function NextSlideIf(){
			for(i=0; i<n; i++){
				if(s[i]==1){
					if(i==n-1){
						slide(0);
						break;
					}
					else{
						slide(i+1);
						break;
					}
				}
			}
		}	

		function PrevSlideIf(){
			for(i=0; i<n; i++){
				if(s[i]==1){
					if(i==0){
						PrevSlide(n-1);
						break;
					}
					else{
						PrevSlide(i-1);
						break;
					}
				}
			}
		}	
		
		
		function slide(z){
			for(i=0; i<n; i++){ s[i]=0 }
			s[z]=1;

			if(z==0){
				a=[7,0,1,2,3,4,5,6];
			}	
			else if(z==1){
				a=[0,1,2,3,4,5,6,7];
			}	
			else if(z==2){
				a=[1,2,3,4,5,6,7,0];
			}	
			else if(z==3){
				a=[2,3,4,5,6,7,0,1];
			}	
			else if(z==4){
				a=[3,4,5,6,7,0,1,2];
			}	
			else if(z==5){
				a=[4,5,6,7,0,1,2,3];
			}	
			else if(z==6){
				a=[5,6,7,0,1,2,3,4];
			}	
			else if(z==7){
				a=[6,7,0,1,2,3,4,5];
			}	
			
			
			
			$('.slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},1000);
			$('.slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},1000);
			$('.slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},1000);
			$('.slide').eq(a[3]).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},1000);
			$('.slide').eq(a[4]).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},1000);
			$('.slide').eq(a[5]).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},1000);
			$('.slide').eq(a[6]).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},1000);
			$('.slide').eq(a[7]).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},1000);
		}
		
		
		function PrevSlide(z){
			for(i=0; i<n; i++){ s[i]=0 }
			s[z]=1;

			if(z==7){
				b=[0,7,6,5,4,3,2,1,];
			}	
			else if(z==6){
				b=[7,6,5,4,3,2,1,0];
			}	
			else if(z==5){
				b=[6,5,4,3,2,1,0,7];
			}	
			else if(z==4){
				b=[5,4,3,2,1,0,7,6];
			}	
			else if(z==3){
				b=[4,3,2,1,0,7,6,5];
			}	
			else if(z==2){
				b=[3,2,1,0,7,6,5,4];
			}	
			else if(z==1){
				b=[2,1,0,7,6,5,4,3];
			}	
			else if(z==0){
				b=[1,0,7,6,5,4,3,2];
			}	
			
			
			
			$('.slide').eq(b[0]).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},1000);
			$('.slide').eq(b[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},1000);
			$('.slide').eq(b[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},1000);
			$('.slide').eq(b[3]).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},1000);
			$('.slide').eq(b[4]).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},1000);
			$('.slide').eq(b[5]).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},1000);
			$('.slide').eq(b[6]).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},1000);
			$('.slide').eq(b[7]).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},1000);
		}
		
});