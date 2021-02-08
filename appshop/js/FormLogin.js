$(function(){
	//체크박스 - 아이디저장/자동로그인/보안접속
	//체크(클릭[click]이나 또는  체인지[change])하면 체크 표시 추가클래스addClass();
	//현재 체크인지 아닌지 구분 prop() attr();
	//prop() or attr() 체크박스 라디오박스 체크를 변경 할수있다.

	//초기값 설정 체크
	$('.checkbox').eq(0).prop('checked', true).addClass('addCheck');  //체크됨
	$('.checkbox').eq(2).prop('checked', true).addClass('addCheck');  //체크됨

	
	/*
	chkVal0 = $('.checkbox').eq(0).val(); // 값 value 자바스크립트
	chkVal1 = $('.checkbox').eq(1).val(); // 값 value 자바스크립트
	chkVal2 = $('.checkbox').eq(2).val(); // 값 value 자바스크립트
	
	chkProp0 = $('.checkbox').eq(0).prop('checked'); // 논리값 : true, false
	chkProp1 = $('.checkbox').eq(1).prop('checked'); // 논리값 : true, false
	chkProp2 = $('.checkbox').eq(2).prop('checked'); // 논리값 : true, false
	
	console.log( chkVal0, chkVal1, chkVal2, chkProp0, chkProp1, chkProp2 );
	*/
	
	//체크박스 버튼 클릭이벤트 PC전용
	/*	
	$('.checkBtn').on({
		click:	function(){
			
			if( $(this).next().prop('checked') == true ){  //체크된상태면
				$(this).next().removeClass('addCheck');
			}
			else{  //만약 체크안된거면 체크되게 클래스 추가 선택
				$(this).next().addClass('addCheck');  
			}
		}
	});
	*/
	
	//웹앱 모바일
	$('.checkbox').on({
		change:	function(){
			
			if( $(this).prop('checked') == true ){  //내가 선택(체하면) 하면
				$(this).addClass('addCheck');
			}
			else{  //내가 선택을 취소하면 즉각 스타일 삭제
				$(this).removeClass('addCheck');
			}
			chkProp0 = $('.checkbox').eq(0).prop('checked'); // 논리값 : true, false
			chkProp1 = $('.checkbox').eq(1).prop('checked'); // 논리값 : true, false
			chkProp2 = $('.checkbox').eq(2).prop('checked'); // 논리값 : true, false

			console.log( chkProp0, chkProp1, chkProp2 );
	
		}
	});
	
	
	
	
	
	
}); //FormLogin.js