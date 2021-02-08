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
			
			//a=[0,1,2,3]; 자동화
			for(i=0; i<n; i++){
				a[i]=i;	//a[0]=0, a[1]=1, a[2]=2, a[3]=3 .... a[99]=99
			}
			
			//실행중인 슬라이드번호가 배열 값 맨앞 배치
			//현재실행중인 슬라이드번호가 배열 회전수 shift()와 push() 횟수
			/*
			if(c==0){
				a=[0,1,2,3];
			}
			else if(c==1){    //a=[0,1,2,3]; 1회전
				a=[1,2,3,0];  //temp=a.shift() => a.push(temp);
			}
			else if(c==2){    //a=[0,1,2,3]; 2회전
				a=[2,3,0,1];  //temp=a.shift() => a.push(temp);
				              //temp=a.shift() => a.push(temp);
			}
			else if(c==3){	   //a=[0,1,2,3]; 3회전
				a=[3,0,1,2];   //temp=a.shift() => a.push(temp);
			}                  //temp=a.shift() => a.push(temp);
			                   //temp=a.shift() => a.push(temp);
			
			자동화	 */		
			
			for(i=0; i<c; i++){   //c==0 0회전 c==1 1회전 c==2 2회전 c==3 3회전
				imsi = a.shift(); //맨앞 배열값 삭제 그리고 imsi 변수에 기억 	
				a.push(imsi);     //맨뒤 배열값이 삽입
			}
			
			
			
			
			
			
			//c(현재실행중인슬라이드번호)가 0 이고 z(클릭번호)가 2 이면

			//c0-z1=-1 이동할 칸수
			//c0-z2=-2 이동할 칸수
			//c0-z3=-3 이동할 칸수
			//c1-z2=-1 이동할 칸수
			//c1-z3=-2 이동할 칸수
			//c2-z3=-1 이동할 칸수
			//이동할 칸수가 m배열값 맨앞 배치
			/*
			if(c-z == -1){  
				m=[-1,0,1,2];  //맨앞 배열값 에 +1 씩 다음 배열값 결정 
			}
			else if(c-z == -2){
				m=[-2,-1,0,1];
			}
			else if(c-z == -3){
				m=[-3,-2,-1,0];
			}
			*/
			/* 반복구조
			y = c-z;
			m[0]=y;   		//-1
			m[1]=y+1; 		// 0
			m[2]=y+1+1; 	// 1
			m[3]=y+1+1+1; 	// 2
			*/
			
			y = c-z;
			for(i=0; i<n; i++){
				m[i]=y;  //-1 0 1 2 
				y++;     //첫번재는 값을 그대로 넣어주고 그값에 ++증가
			}
			
			/*
			$('.slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*m[0])+'%'},1000);
			$('.slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100*m[1])+'%'},1000);
			$('.slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100*m[2])+'%'},1000);
			$('.slide').eq(a[3]).stop().animate({left:(100*3)+'%'},0).animate({left:(100*m[3])+'%'},1000);
			*/
			
			for(i=0; i<n; i++){	
				$('.slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*m[i])+'%'},1000);
			}
			
		}		
		
		function PrevSlideToN(c,z){
			s = [0,0,0,0];
			s[z]=1;
			navBtnFn(z);
			/*
			a=[3,2,1,0];
			자동화
			*/
			
			/*
			t=-1; //0 1 2 3
			for(i=3; i>=0; i--){
				t++;
				a[t]=i; //a[0]=3, a[1]=2, a[2]=1, a[3]=0
			}
			*/
			
			t=n; 
			for(i=0; i<n; i++){
				t--;  //4-1 => 3 2 1 0
				a[i]=t; //a[0]=3, a[1]=2, a[2]=1, a[3]=0
			}
			
			/*
			t=3; 
			for(i=0; i<n; i++){
				a[i]=t; //a[0]=3, a[1]=2, a[2]=1, a[3]=0
				t--;    //3-1 => 2 1 0
			}
			*/
			
			
			//실행중인 슬라이드번호가 배열 값 맨앞 배치
			//shift(), push()
			/*
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
			*/
			
			for(i=0; i<(n-1)-c; i++){
				temp = a.shift();
				a.push(temp);
			}
			
			
			
			//c(현재실행중인슬라이드번호)가 0 이고 z(클릭번호)가 2 이면
			
			//c1-z0=1 이동할 칸수
			//c2-z0=2 이동할 칸수
			//c2-z1=1 이동할 칸수
			//c3-z0=3 이동할 칸수
			//c3-z1=2 이동할 칸수
			//c3-z2=1 이동할 칸수
			
			//이동할 칸수가 m배열값 맨앞 배치
			/*
			if(c-z == 1){  //맨앞 배열값 -1씩하여 배치
				m=[1,0,-1,-2];
			}
			else if(c-z == 2){
				m=[2,1,0,-1];
			}
			else if(c-z == 3){
				m=[3,2,1,0];
			}
			*/
			
			y=c-z;  //4개 슬라이드  배는것은 3번
			for(i=0; i<n; i++){
				m[i]=y;   // m[0]=1, m[1]=0,  m[2]=-1, m[3]=-2
				y--;  //1-1 => 0,-1,-2
			}
			
			/*
			$('.slide').eq(a[0]).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*m[0])+'%'},1000);
			$('.slide').eq(a[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100*m[1])+'%'},1000);
			$('.slide').eq(a[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*m[2])+'%'},1000);
			$('.slide').eq(a[3]).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*m[3])+'%'},1000);
			*/
			
			for(i=0; i<n; i++){
				$('.slide').eq(a[i]).stop().animate({left:(100*(i*(-1)))+'%'},0).animate({left:(100*m[i])+'%'},1000);
			}
		}		
		

	
});//slide.js