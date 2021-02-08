(function(){
    var a = []; 
    var txt ='';
    var cnt = 0;              //전체레코드 수 카운트
    
    //테이블의 목록의 페이지 네이션
    var pageList = 3;         //한화면에 보여질 목록의 개수
    var pageNum  = 1 ;        //첫화면의 표시된 페이지 번호
    var startPageNum  = (pageNum-1)*pageList ;   //시작 페이지 번호
    var endPageNum    = startPageNum+pageList;   //마지막 페이지 번호


    //하단의 페이지버튼 번호의 페이지네이션
    var groupPageList = 3;  //한화면에 보여질 페이지버튼 번호의 개수 3개씩 보이기
    var currentGroupPageNum = Math.ceil(endPageNum/pageList); ;
    var startGroupPageNum = (currentGroupPageNum-1)*groupPageList;
    var endGroupPageNum = startGroupPageNum + groupPageList;



    //목록버튼 클릭시 select_address.php
    $('.listBtn').on({
        click:  function(event){
            event.preventDefault();

            $.ajax({
                url:'./select_address.php',
                type:'POST',
                success: function(data){
                    
                    // var result = jQuery.parseJSON(data);

                    console.log(data);

                    //레코드(Record = Row)단위로 반복처리
                    /*
                    $(data).find('li').each(function(index, obj){
                        a[index]=[]; //2차원 배열선언
                        a[index][0] = $(obj).find('span').eq(0).text();
                        a[index][1] = $(obj).find('span').eq(1).text();
                        a[index][2] = $(obj).find('span').eq(2).text();
                        a[index][3] = $(obj).find('span').eq(3).text();
                        a[index][4] = $(obj).find('span').eq(4).text();
                    }); 

                    a.reverse(); //역순정렬
                    
                    cnt = a.length; //총레코드 개수

                    //0 1 2 3 4 5 6 7 8 9 10 (11레코드)  
                    //페이지목록 pageList = 3개씩 묶어서 테이블 출력 하도록 합니다.
                    //페이지번호(버튼번호) pageNum=1 번호 시작 1 - 현재 1페이지로 시작 합니다.
                    
                    //예문] 페이지번호(버튼번호)가  pageNum=1인경우,  pageNum=2, pageNum=3 ....
                    //시작페이지번호 startPageNum = (pageNum-1)  * pageList(한화면에 보여질목록3개)
                    //끝페이지번호   endPageNum   = startPageNum + pageList(한화면에 보여질목록3개)
                    //0 ~ 2(<3)  ,  3 ~ 5(<6) , 6 ~ 7(<9).....  디버깅

                    function pageFn(){
                        txt += "<table>";
                        txt += "<tr>";
                        txt += "<th>No.</th>";
                        txt += "<th><input type='checkbox' name='chkidx' class='chkidx' value=''></th>";
                        txt += "<th>이름</th>";
                        txt += "<th>전화</th>";
                        txt += "<th>주소</th>";
                        txt += "</tr>";

                        startPageNum = (pageNum-1) * pageList;
                        endPageNum   = startPageNum + pageList;
                        if( endPageNum > a.length ){  //나머지가 존재할 때
                            endPageNum = a.length; //끝번호 마지막 레코드로 변경 11
                        }
                        for(i=startPageNum; i<endPageNum; i++){
                            txt += "<tr>";
                            txt += "<td>" + a[i][0] + "</td>";
                            txt += "<td><input type='checkbox' name='chkidx' class='chkidx'  value='" + a[i][1] + "'></td>";
                            txt += "<td>" + a[i][2] + "</td>";
                            txt += "<td>" + a[i][3] + "</td>";
                            txt += "<td>" + a[i][4] + "</td>";
                            txt += "</tr>";
                        }
                        txt += "</table>";
                        
                        $('.outputTable').html(txt);
                        txt = '';
                    }
                    setTimeout(pageFn,10);//로딩시 함수 호출 실행
 

                   
                   
                   
                   
                    //페이지번호 출력 바인딩 - 페이지 번호 전체출력 레코드11개인경우 총 4 페이지 = 자리올림(11(전체레코드 cnt )/3(pageList))
                    //pageNum
                    //예시] 총 레코드 22개 레코드 인경우에 8페이번호 3=자리올림((22/3(한화면에 보이는 목록개수))/그룹페이지번호리스트3)
                    //그룹페이지를 한페이지 보이는 페이지 개수 3개로 제한
                    // 그룹의 의미
                    // 그룹페이지리스트 groupPageList = 3
                    // 1그룹 : 0 1 2
                    // 2그룹 : 3 4 5
                    // 3그룹 : 6 7 

                    //현재그룹페이지번호currentGroupPageNum1(0 1 2) = 자리올림(endPageNum(3)/한화면보인목록pageList(3))
                    //현재그룹페이지번호currentGroupPageNum2(3 4 5) = 자리올림(endPageNum(6)/한화면보인목록pageList(3))
                    //현재그룹페이지번호currentGroupPageNum3(6 7) = 자리올림(endPageNum(8)/한화면보인목록pageList(3))

                    //시작그룹페이지번호   startGroupPageNum = (currentGroupPageNum 3-1)*groupPageList(3)
                    //마지막그룹페이지번호 endGroupPageNum = startGroupPageNum + groupPageList 한화면에 보여질 페이지번호 그룹 개수(3)

                    //페이지번호 하단에 바인딩 하고 3개씩 묶어서 처음에 1 2 3 페이지번호 노출    
                    function pageBtnGroupPagenationFn(){
                        //예시 endPageNum = 3   endPageNum = 6 endPageNum = 8
                        currentGroupPageNum = Math.ceil(endPageNum/pageList/groupPageList); //현재 그룹페이지번호
                        startGroupPageNum = (currentGroupPageNum-1)*groupPageList;
                        endGroupPageNum = startGroupPageNum + groupPageList;

                        if(endGroupPageNum > Math.ceil(a.length/pageList) ){
                            // endGroupPageNum(8) = Math.ceil(22총레코드/한화면목록3);  
                            endGroupPageNum = Math.ceil(a.length/pageList);  
                        }
                        for(var i=startGroupPageNum; i<endGroupPageNum; i++){//(0+1) (1+1) (2+1) (3+1).... 예시
                            if(i==0){
                                txt += "<a href='javascript:' class='pageBtn addPage'>" + (i+1) + "</a>"; 
                            }
                            else{
                                txt += "<a href='javascript:' class='pageBtn'>" + (i+1) + "</a>"; 
                            }
                        }

                        // console.log('Math.ceil(a.length/pageList) :' + Math.ceil(a.length/pageList));
                        // console.log('endPageNum :' + endPageNum);
                        // console.log('pageList :' + pageList);
                        // console.log('currentGroupPageNum :' + currentGroupPageNum);
                        // console.log('groupPageList :' + groupPageList);
                        // console.log('startGroupPageNum :' + startGroupPageNum);
                        // console.log('startGroupPageNum :' + endGroupPageNum);


                        $('.page_wrap').html( txt );
                        txt='';
                    }
                    setTimeout(pageBtnGroupPagenationFn,10);



                    //페이지버튼 클릭 이벤트
                    //해당페이지 화면 이동
                    //가상으로 추가된 요소 인식 안될 때 document
                    $(document).on('mouseenter','.pageBtn', function(){
                        
                        $('.pageBtn').each(function(index){
                            $('.pageBtn').eq(index).on({
                                click:  function(){
                                    pageNum = Number( $('.pageBtn').eq(index).text() );
                                    $('.pageBtn').removeClass('addPage');
                                    $('.pageBtn').eq(index).addClass('addPage');
                                    pageFn(); //페이지목록 함수 호출 실행
                                    pageBtnGroupPagenationFn(); //페이지버튼번호 함수 호출 실행
                                }
                            });
                        });
    
                    });


                    //다음페이지 이동 버튼 이벤트
                    $('.nextPageBtn').on({
                        click:  function(){
                            pageNum++;
                            if(pageNum > Math.ceil(a.length/pageList)){//마지막페이지초과시
                                pageNum = Math.ceil(a.length/pageList);   
                            }
                            pageFn(); //페이지목록 함수 호출 실행
                            pageBtnGroupPagenationFn(); //페이지버튼번호 함수 호출 실행
                        } 
                    });

                    //이전페이지 이동 버튼 이벤트
                    $('.prevPageBtn').on({
                        click:  function(){
                            pageNum--;
                            if(pageNum < 1 ){//첫페이지 미만
                                pageNum = 1;   
                            }                            
                            pageFn(); //페이지목록 함수 호출 실행
                            pageBtnGroupPagenationFn(); //페이지버튼번호 함수 호출 실행
                        } 
                    });
                    */
                },
                error:  function(){
                    console.log('AJAX Error!!!');
                }
            });

        }
    });

})(jQuery);
//ajaxSelectForm.js
