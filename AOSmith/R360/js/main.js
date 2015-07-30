$(document).ready(function() {
	// 点击返回首页
	$('.top').on('click',function(event) {
		self.location="../index.html";
	});
    
    $('section .tips').on('click',function(event) {
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
	    // self.location="./index.html?id=room1";
	});
	$('.menu .m2').on('click',function(event) {
		$('.menu .m1').animate({"opacity":0,"margin-left":$(window).width()+"px"}, 600,function(){
			$('.menu .m1').hide();
			$('.menu .m2').hide();
		});
	    $('.menu .m2').animate({"opacity":0,"margin-left":-$(window).width()+"px"}, 600);
	    // self.location="./index.html?id=room2";
	});

	$('.maps').on('click',function(event) {
		$('.maps_big').show();
		$('.maps_big').animate({"opacity":1}, 600);
	});

	$('.maps_big').on('click',function(event) {
		$('.maps_big').animate({"opacity":0}, 600,function(){
			$('.maps_big').hide();
		});
	});


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
	
    $('#pano').animate({"opacity":1}, 1000);
    $('.tools').animate({"opacity":1}, 1000);
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

	$('.tips').css("width",($(window).width()-80)+"px");
	$('.tips').css("height",($(window).height()-88)+"px");
	$('.tips').css("left","20px");
	$('.tips').css("top","68px");
	
}