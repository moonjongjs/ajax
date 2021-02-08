jQuery(function(){
	var imgW=imgH=z=cols=0;
	
	//갤러리 이미지 박스 li 포지션 함수
	
	galleryFn(z);

	
	setTimeout(galleryFn, 100);

	
	$(window).resize(function(){
		galleryFn(z);
		
	});
	
	
	
	function galleryFn( z ){
		
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

			if( cols == 4 ){
							
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*3), height:imgH, top:imgH*0 }, 200);
				
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*3), height:imgH, top:imgH*1 }, 200);
			}
			else if( cols == 3 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);

				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*1 }, 200);

				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*2 }, 200);
			}			
			else if( cols == 2 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);

				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);

				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*2 }, 200);

				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*3 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*3 }, 200);
			}
			else if( cols == 1 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*3 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*4 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*5 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*6 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*7 }, 200);
			}
			
			$('.section5-gallery div').addClass('addClassZoom');

		
		}
		else if( z==1 ){ //Magentto
			
			rows = parseInt(5/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			$('.section5-gallery li').eq(1).stop().hide();
			$('.section5-gallery li').eq(5).stop().hide();
			$('.section5-gallery li').eq(7).stop().hide();

			if( cols == 4 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*3), height:imgH, top:imgH*0 }, 200);
				
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
			}
			else if( cols == 3 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
			}
			else if( cols == 2 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
				
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
			}
			else if( cols == 1 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*3 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*4 }, 200);
			}
			
			console.log( cols, rows );
			
			
			
			$('.section5-gallery div').addClass('addClassZoom');
		}
		else if( z==2 ){ //Jquery
					
			rows = parseInt(4/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			$('.section5-gallery li').eq(3).stop().hide();
			$('.section5-gallery li').eq(5).stop().hide();
			$('.section5-gallery li').eq(6).stop().hide();
			$('.section5-gallery li').eq(7).stop().hide();

			if( cols==4 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*3), height:imgH, top:imgH*0 }, 200);
			
			}	
			else if( cols==3 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				
			}	
			else if( cols==2 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
			
			}	
			else if( cols==1 ){
				$('.section5-gallery li').eq(0).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*3 }, 200);
			
			}	
			

			$('.section5-gallery div').addClass('addClassZoom');
		}
		else if( z==3 ){ //Wordpress
						
			rows = parseInt(5/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			$('.section5-gallery li').eq(0).stop().hide();
			$('.section5-gallery li').eq(3).stop().hide();
			$('.section5-gallery li').eq(6).stop().hide();

			if( cols==4 ){
	
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*3), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
			
			}
			else if( cols==3 ){
	
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
			
			}
			else if( cols==2 ){
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
	
			}
			else if( cols==1 ){
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(2).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*3 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*4 }, 200);
	
			}
			
			
		
			$('.section5-gallery div').addClass('addClassZoom');
		}
		else if( z==4 ){ //Html
						
			rows = parseInt(6/cols+0.9);  //줄수
			$('.section5-gallery ul').css({ height:(imgH * rows)});
			
			$('.section5-gallery div').removeClass('addClassZoom');
			$('.section5-gallery li').stop().hide();
			$('.section5-gallery li').eq(0).stop().hide();
			$('.section5-gallery li').eq(2).stop().hide();

			if( cols==4 ){
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*3), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);				
			}	
			else if( cols==3 ){
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*2), height:imgH, top:imgH*1 }, 200);				
				
			}
			else if( cols==2 ){
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*1), height:imgH, top:imgH*2 }, 200);				
				
			}
			else if( cols==1 ){
				$('.section5-gallery li').eq(1).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*0 }, 200);
				$('.section5-gallery li').eq(3).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*1 }, 200);
				$('.section5-gallery li').eq(4).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*2 }, 200);
				$('.section5-gallery li').eq(5).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*3 }, 200);
				$('.section5-gallery li').eq(6).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*4 }, 200);
				$('.section5-gallery li').eq(7).stop().show().animate({ width:imgW, left:(imgW*0), height:imgH, top:imgH*5 }, 200);				
				
			}
			
			
			$('.section5-gallery div').addClass('addClassZoom');
		}
		
	}
	
	
	
	//갤러리 버튼 클릭 이벤트
	$('.sec5Bt').each(function( index ){
		$(this).on({
			click:	function(){
				$('.sec5Bt').removeClass('addGalBt');
				$(this).addClass('addGalBt');
				
				galleryFn( index );
				z = index;
			}
		});
	});
	
	
	
	
	
	
	
	
	
	
});  //section5.js