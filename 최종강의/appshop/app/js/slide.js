$(function(){
	var t =  0;	 
	var y =  0;	 
	var n = $('.slide').length;	 //4개
	var setId1 = '';	
	var s = [0,0,0,0];
	var a = [0,1,2,3];
	var b = [3,2,1,0];
	var m = [0,1,2,3];
		s[0]=1;
		//autoPlayFn();
	
		function autoPlayFn(){
			setId1 = setInterval(NextSlideIf, 3000);
			//setInterval(PrevSlideIf, 3000);				
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
		
		//네비게이션버튼 롤오버시 자동 실행 일시중지
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
						if( s[i]==1 ){  //현재실행중인 슬라이드 i
										//둥근버튼의 클릭번호 index	
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
		
		
		//메인슬라이드 함수 prev
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
		
		
		//////////////////////////////////////////////////////////
		// To Click Number : 클릭한 둥근버튼 번호까지 이동 Next 슬라이드 함수
		// Current(현재실행중인)        Next Slide Click Number 이동
		// i = c할당 [현재실행중인 슬라이드번호],   index = z 할당 [클릭한 네비게이션 둥근 버튼 번호]
		function NextSlideToN(c,z){
			s = [0,0,0,0];
			s[z]=1;
			navBtnFn(z);
			
			a=[0,1,2,3];

			//실행중인 슬라이드번호가 배열 값 맨앞 배치			
			if(c==0){
				a=[0,1,2,3];
			}
			else if(c==1){  
				a=[1,2,3,0];
			}
			else if(c==2){  
				a=[2,3,0,1];
			}
			else if(c==3){	
				a=[3,0,1,2];
			}               
			 
			//c0-z1=-1 이동할 칸수
			//c0-z2=-2 이동할 칸수
			//c0-z3=-3 이동할 칸수
			//c1-z2=-1 이동할 칸수
			//c1-z3=-2 이동할 칸수
			//c2-z3=-1 이동할 칸수
			//이동할 칸수가 m배열값 맨앞 배치
			if(c-z == -1){  
				m=[-1,0,1,2];  //맨앞 배열값 에 +1 씩 다음 배열값 결정 
			}
			else if(c-z == -2){
				m=[-2,-1,0,1];
			}
			else if(c-z == -3){
				m=[-3,-2,-1,0];
			}


			$('.slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*m[0])+'%'},1000);
			$('.slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100*m[1])+'%'},1000);
			$('.slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100*m[2])+'%'},1000);
			$('.slide').eq(a[3]).stop().animate({left:(100*3)+'%'},0).animate({left:(100*m[3])+'%'},1000);

		
		}		
		
		function PrevSlideToN(c,z){
			s = [0,0,0,0];
			s[z]=1;
			navBtnFn(z);

			a=[3,2,1,0];
			
			//실행중인 슬라이드번호가 배열 값 맨앞 배치
			if(c==3){
				a=[3,2,1,0];
			}
			else if(c==2){
				a=[2,1,0,3];
			}
			else if(c==1){
				a=[1,0,3,2];
			}
			else if(c==0){
				a=[0,3,2,1];
			}
			
			//c1-z0=1 이동할 칸수
			//c2-z0=2 이동할 칸수
			//c2-z1=1 이동할 칸수
			//c3-z0=3 이동할 칸수
			//c3-z1=2 이동할 칸수
			//c3-z2=1 이동할 칸수
			
			//이동할 칸수가 m배열값 맨앞 배치
			if(c-z == 1){	  //맨앞 배열값 -1씩하여 배치
				m=[1,0,-1,-2];
			}
			else if(c-z == 2){
				m=[2,1,0,-1];
			}
			else if(c-z == 3){
				m=[3,2,1,0];
			}
			
			$('.slide').eq(a[0]).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*m[0])+'%'},1000);
			$('.slide').eq(a[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100*m[1])+'%'},1000);
			$('.slide').eq(a[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*m[2])+'%'},1000);
			$('.slide').eq(a[3]).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*m[3])+'%'},1000);
		}		
		
		
	
	
});//slide.js