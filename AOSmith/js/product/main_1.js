$(document).ready(function() {
	var width_arr=[643,928,1270,504,792,322,496,292,456,408,318,322,434,402,378,450,300,298,322,586,270,598,316,220,396];
	$.each($('.main .pages'), function(index, val) {
		index=index+2;
		if(index<10){
			$(this).css("background-image","url(images/product_2/p_0"+(index)+".jpg)");
		}else{
			$(this).css("background-image","url(images/product_2/p_"+(index)+".jpg)");
		}
		$(this).css("background-size","contain");
		var max_w=$(window).width();
		if(max_w>640)max_w=640;
		if(max_w<320)max_w=320;
		$(this).css("width",max_w+'px');
		$(this).css("margin-left",-max_w/2+'px');
		$(this).css("height",max_w/320*width_arr[index-2]/2+'px');
	});

	$(".leftmenu li:eq(3) .m").on('click',function(){
    	self.location="./r360/index.html";
	});
});	