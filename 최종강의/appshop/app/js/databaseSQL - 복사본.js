$(function(){
var db=tr=rs=null;
var findIrum=newEnrol=newIrum=newTel=n=searchItem=idTel1='';
var cnt=0;
var duP=false;

//데이터베이스(db) 생성
db=window.openDatabase('bigdata','version1.0','모바일데이터관리',1000000);

db.transaction(createTable);
function createTable(tr){
	tr.executeSql('create table if not exsits member(no,irum,tel)',[],function(){alert('테이블생성')});
}
	
//테이블 추가 만들기	
//createAddressfn()
function createAddressfn(){
	db.transaction(createTable2);
	function createTable2(tr){
		tr.executeSql('create table address(irum,tel,addr,rel)',createTableCallBackFn2());
	}
		function createTableCallBackFn2(){
			console.log('콜백 메시지 : 테이블 member가 테이블안에 필드 번호(no),이름(irum),전화번호(tel) 생성...');	
		}
}

//테이블 삭제
//dropTableFn();
function dropTableFn(){
	db.transaction(function(tr){
		tr.executeSql('drop table address',[],function(){
			console.log('테이블 삭제 완료');
		});
	});		
}


//추가폼 중복체크
$('.duplicateBtn1').on({
	click:	function(){
		
		idTel1=$('#idtel1').val();
		if(idTel1==''){
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

//추가폼 취소
$('.cancleBtn1').on({
	click:	function(){
		$('#idirum1').val('');
		$('#idtel1').val('');
		$('#idno1').val('').attr('selected','selected');	
		$('#idno1').selectmenu('refresh');
		alert('취소 되었습니다.');	
	}
});

//추가폼 추가버튼
$('.insertBtn1').on({
	click:	function(){
		if(duP==true){
			db.transaction(function(tr){
				tr.executeSql("insert into member(no,irum,tel) values (?,?,?)",[idno1.value, idirum1.value, idtel1.value],function(){
					alert('추가 되었습니다.!!!');	
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
	
//데이테베이스 리스트(전체목록보기)
$('.listBtn').on({
	click:	function(){
			db.transaction(function(tr){
			tr.executeSql('select * from member',[],function(tr,rs){
					$('#listTableView').empty();
					for(i=0;i<rs.rows.length;i++){
						$('#listTableView').append('<li>' + rs.rows.item(i)['no'] + '<br>' + rs.rows.item(i)['irum'] + '<br>' + rs.rows.item(i)['tel'] +'</li>');
					}
					$('#listTableView').listview('refresh');
			});
		});	
	}
});


$('.listBtn').on({
	click:	function(){
		db.transaction(function(tr){
			tr.executeSql('select * from member',listTableCallBackFn(),delListTable);
		});	
	}
});

function delListTable(tr,rs){
	$('#idirumdel').empty();		
	for(i=0;i<rs.rows.length;i++){
		$('#idirumdel').append('<option>' + rs.rows.item(i)['irum'] + '</option>');
	}
	$('#idirumdel').selectmenu('refresh');
}



//검색버튼 클릭 이벤트	
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



$('.page5BtnSearch').on({
	click:	function(){
		//정보검색  select
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



//삭제폼 
///////////////////////////////
$('#idsearchBtn2').on({  //검색버튼 이벤트
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



//삭제버튼 이벤트
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
