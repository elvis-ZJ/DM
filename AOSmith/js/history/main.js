$(document).ready(function() {

	// 原始图片高度数组
	var picArr=[];
	$.each($(".main .p_time"), function(index, val) {
		// 存储原始图片高度，宽度都是320
		var temph=$(".main .p_time:eq("+index+") .pic").height();
		picArr.push(temph);
	});


	// timeline
	var arr=[1874,1906,1921,1928,1929,1930,1936,1947,1970,1974,1985,1992,1998,2004,2008,2009,2009,2010,2012,2012,2013,2013,2014];
	$('.timeLineMain').append('<div class="timeline"></div>');
	for(var i=0;i<arr.length;i++){
		$('.timeLineMain .timeline').append('<div class="point"><span class="circle">●</span><span class="time1">'+arr[i]+'</span><span class="time2">'+arr[i]+'</span></div>');
		if(i==0){
			$('.timeLineMain .timeline .point:eq('+i+')').css("padding-top",15+"px");
		}else if(i==1){
			$('.timeLineMain .timeline .point:eq('+i+')').css("padding-top","100px");
		}else {
			$('.timeLineMain .timeline .point:eq('+i+')').css("padding-top","0px");
		}
		
	}
	$('.timeLineMain').css("height",(15+100*i)+"px");
	$('.timeline').css("height",(15+100*i)+"px");

	main_init();
	// 显示历史长页面
	function main_init(){
		// 回到顶部
		document.documentElement.scrollTop = document.body.scrollTop =0;
		// 瀑布流显示
		refreshPic();
		setInterval(refreshPic,400);
		// 显示时间轴
		$('.timeLineMain').css("opacity",1);
		$('footer .footCopy').css("opacity",1);
	}
	
	resizeHandler();
	// 触摸结束，重置页面吸附
	// 吸顶位置
	var endTop=document.body.scrollTop;
	var startT;
	$('body').bind('touchstart', function(e){
		$('.tips').stop().animate({"opacity": 0}, 0);
	});

	$('body').bind('touchend', function(e){
		$('.tips').animate({"opacity": 1}, 2000);
		
	});

	$('body').bind('touchmove', function(e){
		
	});

	// 点击返回首页
	$('.top').on('click',function(event) {
		self.location="./index.html";
	});

	$('.toTop').on('click',function(event) {
		if($(this).css("opacity")==1){
			$('body,html').animate({scrollTop:0},1000); 
		}
	});
	// 
	
	// 瀑布流显示
	function refreshPic(){
		var id=Math.floor(document.body.scrollTop/($(window).height()));
		if($(".main .p_time:eq("+id+")").css("opacity")==0){
			$(".main .p_time:eq("+id+")").animate({"opacity":1},1000);
		}

		var temp_t_id=id-1;
		var temp_d_id=id+1;
		
		if(temp_t_id<0){
			temp_t_id=0
		};
		if(temp_d_id>=picArr.length){
			temp_d_id=picArr.length-1;
		};

		if($(".main .p_time:eq("+temp_t_id+")").css("opacity")==0){
			$(".main .p_time:eq("+temp_t_id+")").animate({"opacity":1},1000);
		}
		if($(".main .p_time:eq("+temp_d_id+")").css("opacity")==0){
			$(".main .p_time:eq("+temp_d_id+")").animate({"opacity":1},1000);
		}

		id=Math.floor(document.body.scrollTop/($(window).height())+0.5);
		if(id<0){
			id=0;
		}
		// console.log('tid'+id);

		if($('.timeLineMain .timeline .point:eq('+id+')').find('.time2').css("opacity")==0){
			for(var i=0;i<arr.length;i++){
				$('.timeLineMain .timeline .point:eq('+i+')').find('.circle').removeClass("active");
				$('.timeLineMain .timeline .point:eq('+i+')').find('.time1').stop().animate({"opacity":1,"margin-left":"5px"},0);
				$('.timeLineMain .timeline .point:eq('+i+')').find('.time2').stop().animate({"opacity":0,"margin-left":"5px"},0);
			}
			$('.timeLineMain .timeline .point:eq('+id+')').find('.circle').addClass("active");
			$('.timeLineMain .timeline .point:eq('+id+')').find('.time1').stop().animate({"opacity":0,"margin-left":"-10px"},600);
			$('.timeLineMain .timeline .point:eq('+id+')').find('.time2').stop().animate({"opacity":1,"margin-left":"-12px"},2000);
		}

		id=(document.body.scrollTop/$(window).height());
		$('.timeLineMain').stop().animate({'top':((document.body.scrollTop+((-100-15)*id+63))+'px')},300);

		if(document.body.scrollTop>200){
			$('.toTop').animate({"opacity":1},300);
		}else{
			$('.toTop').animate({"opacity":0},300);
		}

	}
	// 自适应
	function resizeHandler(){
		$.each($(".main .p_time"), function(index, val) {
			// 图片自适应
			var tempw=$(window).width();
			tempw=tempw>640?640:tempw;
			tempw=tempw<320?320:tempw;

			var temp_s_h=$(window).height();
			temp_s_h=temp_s_h<420?420:temp_s_h;

			if($(window).height()>481){
				$(".main .p_time:eq("+index+") .pic").css("width",tempw+"px");
				$(".main .p_time:eq("+index+") .pic").css("margin-left",-tempw*0.5+"px");
				$(".main .p_time:eq("+index+") .pic").css("height",tempw/320*picArr[index]+"px");
			}
			
			var p_01=parseInt($(".main .p_time:eq("+index+") .p_01").css("height"));
			var p_02=parseInt($(".main .p_time:eq("+index+") .p_02").css("height"));
			var p_03=parseInt($(".main .p_time:eq("+index+") .p_03").css("height"));

			if(parseInt($(".main .p_time:eq("+index+") .p_01").css("margin-top"))!=0){
				$(".main .p_time:eq("+index+") .p_01").css("margin-top",(temp_s_h-(p_01+p_02+p_03))/2+"px");
			}
			// page定位
			$(".main .p_time:eq("+index+")").css("height",temp_s_h+"px");
			$(".main .p_time:eq("+index+")").css("top",temp_s_h*index+"px");
			
		});

		for(var i=0;i<arr.length;i++){
			if(i==0){
				$('.timeLineMain .timeline .point:eq('+i+')').css("padding-top",15+"px");
			}else if(i==1){
				$('.timeLineMain .timeline .point:eq('+i+')').css("padding-top",(100)+"px");
			}else {
				$('.timeLineMain .timeline .point:eq('+i+')').css("padding-top",(100)+"px");
			}
			
		}
		$('.timeLineMain').css("height",(63+100*arr.length)+"px");
		$('.timeline').css("height",(63+115*arr.length)+"px");
	};

	$(window).resize(function() {
		resizeHandler();
	});
});