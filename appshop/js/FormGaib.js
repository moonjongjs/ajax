$(function(){
	var cnt=0;
	var cnt2=0;
	
	
	//전체 체크박스 7개 체크확인 서브-체크박스(7개) 모두 체크시 메인-체크박스(1개) 체크 이벤트 함수
	function allcheckFn(){
		cnt=0;
		$('.gaibChk').each(function(idx){
			if( $('.gaibChk').eq(idx).prop('checked') == true ){
				cnt++
			}
			if( cnt >= 7 ){
				$('#allcheckBtnid').prop('checked',true).addClass('addBottomCheck');				
			}
			else{
				$('#allcheckBtnid').prop('checked',false).removeClass('addBottomCheck');				
			}
		});
	}

	//모두 체크 박스를 클릭(change)하면 모든 체크박스 체크함.
	$('#allcheckBtnid').on({
		change:	function(){
			if( $(this).prop('checked') == true ){  //체크 하면 선택
				$(this).prop('checked',true).addClass('addBottomCheck');							
				$('.gaibChk').prop('checked',true).addClass('addBottomCheck');							
			}
			else{  //체크해제하면
				$(this).prop('checked',true).removeClass('addBottomCheck');							
				$('.gaibChk').prop('checked',false).removeClass('addBottomCheck');											
			}
			allcheckFn();
		}
	});
	
	
	//각 체크박스 하나씩 체크선택과 체크해제 이벤트
	$('.gaibChk').on({
		change:	function(){
			if( $(this).prop('checked') == true ){  //체크 하면 선택
				$(this).prop('checked',true).addClass('addBottomCheck');							
			}
			else{  //체크해제하면
				$(this).prop('checked',false).removeClass('addBottomCheck');											
			}
			allcheckFn();			
		}
	});

	
	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////
	//무료배송 할인쿠폰등 SNS EMAIL 서브-체크박스 모두 체크시 메인-체크박스 체크 함수
	function SnsEmailcheckFn(){
		cnt2=0;
		$('.gaibChk4').each(function(idx){
			if( $('.gaibChk4').eq(idx).prop('checked') == true ){
				cnt2++
			}
			
			if( cnt2 >= 2 ){
				$('.gaibChk4All').prop('checked',true).addClass('addBottomCheck');				
			}
			else{
				$('.gaibChk4All').prop('checked',false).removeClass('addBottomCheck');				
			}
		});
	}
	
	
	//SNS | EMAIL 각각체크 한개라도 체크 해제되면 메인 체크박스 (무료배송 할인쿠폰) 체크해제
	$('.gaibChk4All').on({
		change:	function(){
			if( $(this).prop('checked') == true ){  //체크 하면 선택
				$('.gaibChk4').prop('checked',true).addClass('addBottomCheck');							
			}
			else{  //체크해제하면
				$('.gaibChk4').prop('checked',false).removeClass('addBottomCheck');							
			}
			
			SnsEmailcheckFn();  //체크박스 7개 체크확인 함수
			allcheckFn();       //체크박스 2개 체크확인 함수
		}
	});
	
	$('.gaibChk4').on({
		change:	function(){
			if( $(this).prop('checked') == true ){  //체크 하면 선택
				$(this).prop('checked',true).addClass('addBottomCheck');							
			}
			else{  //체크해제하면
				$(this).prop('checked',false).removeClass('addBottomCheck');							
			}
			
			SnsEmailcheckFn();
			allcheckFn();
		}
	});
	///////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////

	
	
	
	
	//성별구분
	$('.radio').on({
		change:	function(){
			$('.radio').prop('checked', false).removeClass('addRadio');
			$(this).prop('checked', true).addClass('addRadio');
		}
	});
	
	
	//추가 추천인 구분
	$('.radio2').on({
		change:	function(){
			$('.radio2').prop('checked', false).removeClass('addRadio');
			$(this).prop('checked', true).addClass('addRadio');
		}
	});
	
	
	
}); //FormGaib.js