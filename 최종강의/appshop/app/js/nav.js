$(function(){
	
	$('.sub').slideUp(0);
	
	$('.navBtn').on({
		click:	function(){
			$('.sub').stop().slideUp(300);
			$(this).next().stop().slideToggle(300);
		}
	});
	
});//nav.js