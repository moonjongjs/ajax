$(function(){
	var t =  0;	 
	var y =  0;	 
	var n = $('.slide').length;
	var setId1 = '';	
	var s = [0,0,0,0];
	var a = [0,1,2,3];
	var b = [3,2,1,0];
	var m = [0,1,2,3];
		s[0]=1;
		
		autoPlayFn();
	
		function autoPlayFn(){
			setId1 = setInterval(NextSlideIf, 3000);
		}
		
		$('.slide-wrap').on({
			swipeleft:	function(){
				NextSlideIf();
				clearInterval( setId1 );
			},
			swiperight:	function(){
				PrevSlideIf();
				clearInterval( setId1 );
			}
		});
		
		
		
		function PrevSlideIf(){
			if(s[0]==1){
				PrevSlide(3);
			}
			else if(s[1]==1){
				PrevSlide(0);
			}
			else if(s[2]==1){
				PrevSlide(1);
			}
			else if(s[3]==1){
				PrevSlide(2);
			}
		}
		function NextSlideIf(){
			if(s[0]==1){
				slide(1);
			}
			else if(s[1]==1){
				slide(2);
			}
			else if(s[2]==1){
				slide(3);
			}
			else if(s[3]==1){
				slide(0);
			}
		}
		
		$('.navBtn-wrap').on({
			mouseenter: function(){				
				clearInterval( setId1 );
			},
			mouseleave:	function(){
				autoPlayFn();
			}
		});
		
		
		
		//네비게이션버튼 클릭 이벤트
		$('.navBtn').each(function(index){
			$(this).on({
				click:	function(){
					
					for(i=0; i<=3; i++){
						if( s[i]==1 ){

							if( i < index ){
								NextSlideToN(i, index);
							}
							else if( i > index ){
								PrevSlideToN(i,index);
							}
							
						}
					}
				}
			});
		});
		
		
		
		//네비게이션버튼 함수
		function navBtnFn(z){
			$('.navBtn').removeClass('addNavBtn');
			$('.navBtn').eq(z).addClass('addNavBtn');
		}
		
		//메인 Next 슬라이드 함수
		function slide(z){
			s = [0,0,0,0];
			s[z]=1;
			navBtnFn(z);
			
			if(z==0){
				a=[3,0,1,2];
			}
			else if(z==1){
				a=[0,1,2,3];
			}
			else if(z==2){
				a=[1,2,3,0];
			}
			else if(z==3){
				a=[2,3,0,1];
			}
			
			$('.slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},1000);
			$('.slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},1000);
			$('.slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},1000);
			$('.slide').eq(a[3]).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},1000);
		}
		
		
		function PrevSlide(z){
			s = [0,0,0,0];
			s[z]=1;
			navBtnFn(z);
			
			
			if(z==3){
				b=[0,3,2,1];
			}
			else if(z==2){
				b=[3,2,1,0];
			}
			else if(z==1){
				b=[2,1,0,3];
			}
			else if(z==0){
				b=[1,0,3,2];
			}
			
			$('.slide').eq(b[0]).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},1000);
			$('.slide').eq(b[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},1000);
			$('.slide').eq(b[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},1000);
			$('.slide').eq(b[3]).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},1000);
		}
	
	
	
	
	
	
	
		function NextSlideToN(c,z){
			s = [0,0,0,0];
			s[z]=1;
			navBtnFn(z);
			
			for(i=0; i<n; i++){
				a[i]=i;
			}
			
			for(i=0; i<c; i++){ 
				imsi = a.shift();
				a.push(imsi); 
			}
			
			y = c-z;
			for(i=0; i<n; i++){
				m[i]=y; 
				y++; 
			}
						
			for(i=0; i<n; i++){	
				$('.slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*m[i])+'%'},1000);
			}
			
		}		
		
		
		function PrevSlideToN(c,z){
			s = [0,0,0,0];
			s[z]=1;
			navBtnFn(z);
			
			t=n; 
			for(i=0; i<n; i++){
				t--;
				a[i]=t; 
			}
			
			for(i=0; i<(n-1)-c; i++){
				temp = a.shift();
				a.push(temp);
			}
			
			y=c-z;
			for(i=0; i<n; i++){
				m[i]=y;
				y--;
			}
			
			for(i=0; i<n; i++){
				$('.slide').eq(a[i]).stop().animate({left:(100*(i*(-1)))+'%'},0).animate({left:(100*m[i])+'%'},1000);
			}
		}		
		

	
});//slide_auto.js