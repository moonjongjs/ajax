;(function(jQuery,window,document,undefined){
	
	
	$(document).on({
		mobileinit:	function(){
			location.href='index.html#intro';
			$.mobile.ajaxLinksEnabled = false;
			$.mobile.ajaxFormsEnabled = false;
			$.mobile.ajaxEnabled = false;
		}
	});
	
})(jQuery,window,document);//mobileinit.js