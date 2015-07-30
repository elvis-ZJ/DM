$(document).ready(function() {
	// 点击返回首页
	$('.top').on('click',function(event) {
		self.location="../index.html";
	});
    
    $('section .tips').on('click',function(event) {
    	$('section .tips').animate({"opacity":0,"margin-top":$(window).height()+"px"}); 
		$('section .tips .bg').animate({"opacity":0,"margin-top":$(window).height()+"px"}, 600,function(){
			$('section .tips .bg').hide();
		});
	});

    $('.menu .m1').on('click',function(event) {
		$('.menu .m1').animate({"opacity":0,"margin-left":-$(window).width()+"px"}, 600,function(){
			$('.menu .m1').hide();
			$('.menu .m2').hide();
		});
	    $('.menu .m2').animate({"opacity":0,"margin-left":$(window).width()+"px"}, 600);
	    self.location="./test/2.html";
	});
	$('.menu .m2').on('click',function(event) {
		$('.menu .m1').animate({"opacity":0,"margin-left":$(window).width()+"px"}, 600,function(){
			$('.menu .m1').hide();
			$('.menu .m2').hide();
		});
	    $('.menu .m2').animate({"opacity":0,"margin-left":-$(window).width()+"px"}, 600);
	    self.location="./test/1.html";
	});

	// $('.maps').on('click',function(event) {
	// 	$('.maps_big').show();
	// 	$('.maps_big').animate({"opacity":1}, 600);
	// });

	// $('.maps_big').on('click',function(event) {
	// 	$('.maps_big').animate({"opacity":0}, 600,function(){
	// 		$('.maps_big').hide();
	// 	});
	// });

    $(window).resize(function() {
		resizeHandler();
	});
	resizeHandler();

	setTimeout(init,200);
});

function init(){
	var url=String(self.location);
	$('section .tips').animate({"opacity":1}, 500);
	$('section .tips .bg').animate({"opacity":1}, 500);
	$('section .tips').animate({"opacity":1}, 500);
	$('section .tips .bg').animate({"opacity":1}, 500);
	
	$('.menu .m1').animate({"opacity":1}, 500);
	$('.menu .m2').animate({"opacity":1}, 500);
}

function resizeHandler(){
	var temp_h=($(window).height()-48)/2
	var temp_w=temp_h/190*320;
	if(temp_w>640){
		temp_w=640;
	}
	$('.menu .m1').css("width",temp_w+"px");
	$('.menu .m1').css("height",temp_h+"px");	
	$('.menu .m2').css("width",temp_w+"px");
	$('.menu .m2').css("height",temp_h+"px");
	$('.menu .m1').css('margin-left',-temp_w/2+"px");
	$('.menu .m2').css('margin-left',-temp_w/2+"px");
	$('.menu .m1').css('top',"48px");
	$('.menu .m2').css('top',(temp_h+48)+"px");

	$('.tips').css("width",($(window).width()-18)+"px");
	$('.tips').css("height",($(window).height()-62)+"px");
	$('.tips').css("left","9px");
	$('.tips').css("top","55px");

	// $('.maps_big').css("width",($(window).width()-20)+"px");
	// $('.maps_big').css("height",(($(window).width()/320)*418.5)+"px");
	// $('.maps_big').css("margin-left",(-($('.maps_big').width())/2)+"px");
	// $('.maps_big').css("margin-top",(-($('.maps_big').height())/2)+"px");
	
}