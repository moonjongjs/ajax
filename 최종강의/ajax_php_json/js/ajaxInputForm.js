(function($){

    $('.inputBtn').on({
        click:  function(event){
            event.preventDefault();  //a, button, submit... 이벤트를 제어함
            
            var txtName = $('#name').val();
            var txtTel  = $('#tel').val();
            var txtAddr = $('#addr').val();

                if(txtName=='' || txtTel=='' || txtAddr=='' ){
                    return false; //입력 취소
                }

                $.ajax({
                    url:'./insert_address.php',
                    type:'POST',
                    data:{
                        name:   txtName,
                        tel:    txtTel,
                        addr:   txtAddr
                    },
                    success: function(data){
                        console.log(data);
                        $('#name').val('');
                        $('#tel').val('');
                        $('#addr').val('');
                        $('#name').focus(); //입력대기
                    },
                    error:  function(){
                        console.log('Ajax Error!!!');
                    }
                });

            
        }
    });

})(jQuery);
//ajaxInputForm.js