$(function(){
var db=tr=rs=null;
var findIrum=newEnrol=newIrum=newTel=n=searchItem=idTel1='';
var cnt=0;
var duP=false;
var index=0;  //첫번째 

//데이터베이스(db) 생성
db=window.openDatabase('bigdata','version1.0','모바일데이터관리',1000000);

//테이블 생성
db.transaction(function(tr){
	tr.executeSql('create table member(no,irum,tel)');	
});

	
//테이블 추가 만들기	
createMember2fn();
function createMember2fn(){
	db.transaction(function(tr){
		tr.executeSql('create table member2(id,pw,irum,email,phone)',[],function(){
			console.log('member2 성공적으로 테이블 생성');
		},
			function(){
			console.log('member2 테이블 생성 실패');				
		});		
	});
}

//테이블 삭제
//dropTableFn();
function dropTableFn(){
	db.transaction(function(tr){
		tr.executeSql('drop table member2',[],function(){
			console.log('테이블 삭제 완료');
		});
	});		
}


//1-추가(INSERT INTO)화면////////////////////////////////////////////////////////////////// 
//중복체크 버튼
$('.duplicateBtn1').on({
	click:	function(){
		
		idTel1=$('#idtel1').val();
		if(idTel1=='' || $('#idno1').val()=='' || $('#idirum1').val()==''){
			alert('항목이 비었습니다.');
			$('#idtel1').focus();
			duP=false;
		}
		else{
			db.transaction(function(tr){
				tr.executeSql('select * from member where tel=?',[idTel1],function(tr,rs){
					if(rs.rows.length>0){
						alert('중복된 전화번호 입니다.');	
						$('#idtel1').focus()
						duP=false;
					}
					else{
						duP=true;
						alert('추가가능한 전화번호 입니다.');	
					}
				});
			});
		}
	}
});

//취소버튼
$('.cancleBtn1').on({
	click:	function(){
		$('#idirum1').val('');
		$('#idtel1').val('');
		$('#idno1').val('').attr('selected','selected');	
		$('#idno1').selectmenu('refresh');
		alert('취소 되었습니다.');	
	}
});

//추가버튼
$('.insertBtn1').on({
	click:	function(){
		if(duP==true){
			db.transaction(function(tr){
				tr.executeSql("insert into member(no,irum,tel) values (?,?,?)",[idno1.value, idirum1.value, idtel1.value],function(){
					alert('추가 되었습니다.!!!');	
					duP=false;					
					$('#idno1').val('');
					$('#idirum1').val('');
					$('#idtel1').val('');
					$('#idno1').focus();
				});
				
			});			
		}
		else{
			alert('반드시 중복체크를 하고 추가 하세요!!!');
		}
	}
});
	
	
	
	
	


//2-삭제(DELETE)화면////////////////////////////////////////////////////////////////// 
//검색버튼
$('#idsearchBtn2').on({  
	click:	function(){
		page2FindTxt='%' + $('#idsearchTel2').val() + '%';  //전화번호 검색 할 전화번호
		db.transaction(function(tr){
				tr.executeSql('select * from member where tel like ?',[page2FindTxt],function(tr,rs){			
				$('#idenrol2').val(rs.rows.item(0).no);
				$('#idirum2').val(rs.rows.item(0).irum);
				$('#idtel2').val(rs.rows.item(0).tel);
			});
		});
	}
});

//삭제버튼
$('#iddelBtn2').on({
	click:	function(){
		n=$('#iddelBtn2').val();
		db.transaction(function(tr){
			tr.executeSql('delete from member where tel=?',[n],function(tr,rs){
				alert('삭제 완료 되었습니다. 복구 불가능합니다.');
				$('#idsearchTel2').val('')
				$('#idenrol2').val('');
				$('#idirum2').val('');
				$('#idtel2').val('');
				$('#idsearchTel2').focus();
			});
		});
	}
});

//취소
$('#idcancleBtn2').on({
	click:	function(){
		$('#idsearchTel2').val('')
		$('#idenrol2').val('');
		$('#idirum2').val('');
		$('#idtel2').val('');
		alert('취소 되었습니다.');			
		$('#idsearchTel2').focus();	
	}
});
	






	
//3-전체목록(SELECT)화면////////////////////////////////////////////////////////////////// 
//목록보기버튼
$('#listTableView').slideUp(0);

//처음으로
$('#idfirstBtn3').on({
	click:	function(){
		allListFn('first');
	}
});

//마지막으로
$('#idlastBtn3').on({
	click:	function(){
		allListFn('last');
	}
});


//이전으로
$('#idprevBtn3').on({
	click:	function(){
		allListFn('prev');
	}
});


//다음으로
$('#idnextBtn3').on({
	click:	function(){
		allListFn('next');
	}
});


//전체목록
$('.listBtn').on({
	click:	function(){
		allListFn('all');
	}
});


//전체목록 함수
	function allListFn(z){
		db.transaction(function(tr){
		tr.executeSql('select * from member',[],function(tr,rs){
				
				if(z=='first' || z=='all'){
					index=0;  //첫번재 레코드
				}
				else if(z=='last'){
					index=rs.rows.length-1;  //마지막 데이터 레코드
				}
				else if(z=='prev'){					

					if(index<=0){
						index=0;
						alert('첫번재 레코드 입니다.');
					}
					else{
						index--;  //이전으로
					}
					
				}
				else if(z=='next'){
					if(index>=rs.rows.length-1){ //0 ~ 20
						index=rs.rows.length-1;
						alert('더이상 레코드가 없습니다.');
					}
					else{
						index++;  //다음으로	
					}
				}
				
				//폼의 입력상자에 각각 데이터 바인딩
				$('#idenrol3').val(rs.rows.item(index).no);
				$('#idirum3').val(rs.rows.item(index).irum);
				$('#idtel3').val(rs.rows.item(index).tel);
			
				//레코드/전체레코드
				$('#numTxt3').text( (index+1) + ' / ' + (rs.rows.length));
				
				//하단에 리스트박스에 전체목록
				$('#listTableView').empty();
				for(i=0;i<rs.rows.length;i++){
					$('#listTableView').append('<li>' + rs.rows.item(i)['no'] + '<br>' + rs.rows.item(i)['irum'] + '<br>' + rs.rows.item(i)['tel'] +'</li>');
				}
				$('#listTableView').listview('refresh');
			});	
		});
	}


//4-검색(SELECT)화면////////////////////////////////////////////////////////////////// 
//검색버튼
$('.searchBtn').on({
	click:	function(){
		$('#enrolListTableView').empty();
		searchItem=$('#idenrol').val();
		db.transaction(function(tr){
			tr.executeSql('select * from member where no=?',[searchItem],function(tr,rs){					
				for(i=0;i<rs.rows.length;i++){
					$('#enrolListTableView').append('<li>'+ (i+1)+'<br>'+rs.rows.item(i)['no'] + '<br>' + rs.rows.item(i)['irum']  + '<br>' +  rs.rows.item(i)['tel'] +'<li>');
				}
				$('.searchCount').text('Record : ' + rs.rows.length);
			});
		});
		$('#enrolListTableView').listview('refresh');
	}
});







//5-수정(UPDATE)화면////////////////////////////////////////////////////////////////// 
//수정
$('.page5BtnUpdate').on({
	click:	function(){
		db.transaction(function(tr){
			//검색이름
			findIrum=$('#findidirum5').val();
			
			//수정내용
			newEnrol=$('#idno5').val();
			newIrum=$('#idirum5').val();
			newTel=$('#idtel5').val();
			
			tr.executeSql('update member set no=?, irum=?, tel=?  where irum=?',[newEnrol,newIrum,newTel, findIrum],function(tr,rs){
				$('#idno5').val('수강등록수정 과목선택 하세요!').attr('selected','selected');
				$('#idno5').selectmenu('refresh');
				$('#idirum5').val('');
				$('#idtel5').val('');	
				alert('수정 완료 되었습니다.');				
			});
		});
	}
});

//검색
$('.page5BtnSearch').on({
	click:	function(){
		var findIrum=$('#findidirum5').val();				
		db.transaction(function(tr){
			tr.executeSql('select * from member where irum=?',[findIrum],function(tr,rs){
				for(i=0;i<rs.rows.length;i++){
					$('#idno5').val(rs.rows.item(i).no).attr('selected','selected');
					$('#idno5').selectmenu('refresh');
					$('#idirum5').val(rs.rows.item(i).irum);
					$('#idtel5').val(rs.rows.item(i).tel);
				}
			});
		});
	}
});



//취소
$('.page5BtnCancle').on({
	click:	function(){
		$('#findidirum5').val('')
		$('#idno5').val('');
		$('#idirum5').val('');
		$('#idtel5').val('');
		alert('취소 되었습니다.');			
		$('#findidirum5').focus();	
	}
});




}); //databaseSQL.js
