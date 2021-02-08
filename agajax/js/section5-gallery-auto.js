jQuery(function(){
	var imgW=imgH=z=cols=0;
	var a = [];
	
	//갤러리 이미지 박스 li 포지션 함수
	
	galleryFn(z);

	
	setTimeout(galleryFn, 100);

	
	$(window).resize(function(){
		galleryFn();
		
	});
	
	
	
	function galleryFn( ){
		
		//1200초과 4개
		//901~1200 3개
		//601~900 2개
		//0~600 1개
		if( $(window).innerWidth()>1200 ){
			cols=4;
		}
		else if( $(window).innerWidth()>900 ){  //901~1200 3개
			cols=3;
		}
		else if( $(window).innerWidth()>600 ){  //601~900 2개
			cols=2;
		}
		else{
			cols=1;
		}
		
		
		imgW =  $(window).innerWidth()/cols;
		imgH = imgW;
		
		
		if( z==0 ){ //All
			rows = parseInt(8/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();

	
			
			//i 행(줄) - j 열 - 갤러리카운트(li)갯수 k
			k=-1;
			for(i=0; i<rows; i++){ //행(줄)
				for(j=0; j<cols; j++){ //열(칸)
					k++; //0 1 2 3 4 5 6 7
					$('.section5-gallery li').eq(k).stop().show().animate({ width:imgW, left:(imgW*j), height:imgH, top:imgH*i }, 200);
				}
			}
			
			
			
			
			$('.section5-gallery div').addClass('addClassZoom');

		
		}
		else if( z==1 ){ //Magentto
			
			rows = parseInt(5/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').eq(1).stop().css({transform:'scale(0)',transition:'all 0.2s'});
			$('.section5-gallery li').eq(5).stop().css({transform:'scale(0)',transition:'all 0.2s'});
			$('.section5-gallery li').eq(7).stop().css({transform:'scale(0)',transition:'all 0.2s'});

			a = [0,2,3,4,6];  //배열처리로 규칙적인 배열첨자 = k변수
			
			k=-1;
			for(i=0; i<rows; i++){
				for(j=0; j<cols; j++){
					k++; //0 1 2 3 4
					$('.section5-gallery li').eq(a[k]).stop().css({transform:'scale(1)',transition:'all 0.6s'}).animate({ width:imgW, left:(imgW*j), height:imgH, top:imgH*i }, 200);
				}
			}
			
			$('.section5-gallery div').addClass('addClassZoom');
		}
		else if( z==2 ){ //Jquery
					
			rows = parseInt(4/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').eq(3).stop().css({transform:'scale(0)',transition:'all 0.2s'});
			$('.section5-gallery li').eq(5).stop().css({transform:'scale(0)',transition:'all 0.2s'});
			$('.section5-gallery li').eq(6).stop().css({transform:'scale(0)',transition:'all 0.2s'});
			$('.section5-gallery li').eq(7).stop().css({transform:'scale(0)',transition:'all 0.2s'});
			

			a = [0,1,2,4];
			k=-1;
			for(i=0; i<rows; i++){
				for(j=0; j<cols; j++){
					k++;
					$('.section5-gallery li').eq(a[k]).stop().css({transform:'scale(1)',transition:'all 0.6s'}).animate({ width:imgW, left:(imgW*j), height:imgH, top:imgH*i }, 200);
				}
			}

			$('.section5-gallery div').addClass('addClassZoom');
		}
		else if( z==3 ){ //Wordpress
						
			rows = parseInt(5/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').eq(0).stop().hide();
			$('.section5-gallery li').eq(3).stop().hide();
			$('.section5-gallery li').eq(6).stop().hide();

			a = [1,2,4,5,7];
			k=-1;
			for(i=0; i<rows; i++){
				for(j=0; j<cols; j++){
					k++;
					$('.section5-gallery li').eq(a[k]).stop().show().animate({ width:imgW, left:(imgW*j), height:imgH, top:imgH*i }, 200);
				}
			}
		
			$('.section5-gallery div').addClass('addClassZoom');
		}
		else if( z==4 ){ //Html
						
			rows = parseInt(6/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').eq(0).stop().hide();
			$('.section5-gallery li').eq(2).stop().hide();

			a = [1,3,4,5,6,7];
			k=-1;
			for(i=0; i<rows; i++){
				for(j=0; j<cols; j++){
					k++;
					$('.section5-gallery li').eq(a[k]).stop().show().animate({ width:imgW, left:(imgW*j), height:imgH, top:imgH*i }, 200);
				}
			}

			$('.section5-gallery div').addClass('addClassZoom');
		}
		
	}
	
	
	
	//갤러리 버튼 클릭 이벤트
	$('.sec5Bt').each(function( index ){
		$(this).on({
			click:	function(){

				z = index;
				galleryFn();
				
			}
		});
	});
	
	
	
	
	
	
});  //section5.js