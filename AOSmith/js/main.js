$(document).ready(function() {
	resizeHandler();

	$.ajaxSetup({
		cache: false
	});
	$('.sidebar').simpleSidebar({
		settings: {
			opener: '#open-sb',
			wrapper: '.wrapper',
			animation: {
				duration: 600,
				easing: 'easeOutQuint'
			}
		},
		sidebar:{
			align: 'left',
			width: ($(window).width()-64),
			closingLinks: '.close',
			style:{
                zIndex: 3000
            }
		}

	});

	for(var i=0;i<3;i++){
		$('.leftmenu ul li').eq(i).find(".m").on('click',function(){
			if($(this).find(".menu").hasClass('active')){
				$(this).find(".menu").removeClass('active');
				$(this).parent().find('.more').stop(true,true).slideUp(300);
			}else{
				$(this).find(".menu").addClass('active');
				$(this).parent().find('.more').stop(true,true).slideDown(500);
			}
		});

    	// bottom menu
    	$('dropdown').eq(i).find(".animate").on('click',function(){
			if($(this).find(".menu").hasClass('active')){
				$(this).find(".menu").removeClass('active');
				$(this).parent().find('.more').stop(true,true).slideUp(300);
			}else{
				$(this).find(".menu").addClass('active');
				$(this).parent().find('.more').stop(true,true).slideDown(500);
			}
		});
	}

	$('.leftmenu ul li').eq(0).find(".more").find("p").eq(0).on('click',function(){
		if($(this).find(".menu").hasClass('active')){
			$(this).find(".menu").removeClass('active');
			$(this).parent().find('.moreChild').stop(true,true).slideUp(300);
		}else{
			$(this).find(".menu").addClass('active');
			$(this).parent().find('.moreChild').stop(true,true).slideDown(500);
		}
	});

	$('dropdown').eq(0).find(".more").find("p").eq(0).on('click',function(){
		if($(this).find(".menu").hasClass('active')){
			$(this).find(".menu").removeClass('active');
			$(this).parent().find('.moreChild').stop(true,true).slideUp(300);
		}else{
			$(this).find(".menu").addClass('active');
			$(this).parent().find('.moreChild').stop(true,true).slideDown(500);
		}
	});

	$(".qq").on('click',function(){
        shareToSNS.qq("", "http://www.aosmith.com.cn/", "艾欧史密斯(中国)热水器有限公司，全国统一24小时服务热线：4008288988。A.O.Smith建立了完善的研发、生产、销售及服务一体化的现代化管理体系，产品体系跨工业、商业、家用三大领域，为中国消费带来了国际品质的热水器产品和专业服务。");
    });
    $(".sina").on('click',function(){
        shareToSNS.sina("", "http://www.aosmith.com.cn/", "艾欧史密斯(中国)热水器有限公司，全国统一24小时服务热线：4008288988。A.O.Smith建立了完善的研发、生产、销售及服务一体化的现代化管理体系，产品体系跨工业、商业、家用三大领域，为中国消费带来了国际品质的热水器产品和专业服务。");
    });

    // home kv
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        spaceBetween: 0
    }); 

	// home floatMenu
	var homeFloatMenu_swiper = new Swiper('.swiper-container-floatMenu', {
        scrollbar: '.swiper-scrollbar-floatMenu',
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true
    });

    // popup 
    var popup_swiper = new Swiper('.swiper-container-popupMenu', {
        spaceBetween: 0,
        freeMode: true,
        height:80-($(window).height()-480)/5,//($(window).height()-100),
        direction: 'vertical'
    }); 

    // popup了解更多 
    $('.popup_index .swiper-slide:eq(0)').on('click',function(){
    	self.location="./production.html";
    });
    // popup了解更多
    $('.popup_index .swiper-slide:eq(1)').on('click',function(){
    	self.location="./production.html";
    });

    // home kv点击
    $(".main .kv .swiper-slide:eq(0)").on('click',function(){
    	self.location="./production1.html";
    });
    $(".main .kv .swiper-slide:eq(1)").on('click',function(){
    	self.location="./production.html";
    });
    $(".main .kv .swiper-slide:eq(2)").on('click',function(){
    	self.location="./history_cover.html";
    });

    $(".main .centerMenu .container .row:eq(1) div:eq(0)").on('click',function(){
    	self.location="./r360/index.html";
	});

	$("dropdown:eq(3)").on('click',function(){
    	self.location="./r360/index.html";
	});

	$(".leftmenu li:eq(3) .m").on('click',function(){
    	self.location="./r360/index.html";
	});

	$(".leftmenu li:eq(1) .more p:eq(0)").on('click',function(){
    	self.location="./history_cover.html";
	});

	$("dropdown:eq(1) .more p:eq(0)").on('click',function(){
    	self.location="./history_cover.html";
	});

	$('.wrapper .sidebar .container .row:eq(3) div:eq(0)').on('click',function(){
    	self.location="./r360/index.html";
	});



    $(".main .centerMenu .cover .right_1").on('click',function(){
    	$(".main .centerMenu .cover").css("display","none");
    	$(".main .centerMenu .container").css("display","block");
    });

    $(".main .centerMenu .container .row:eq(0) div:eq(1)").on('click',function(){
    	$(".main .centerMenu .container").css("display","none");
    	$(".main .centerMenu .cover").css("display","block");
    });

    $('.form-control').keyup(function(event) {
    	// var str=String(document.getElementById("searchTxt").value);
    	// if(str.indexOf("热水")!=-1){
    	// 	$(this).parent().find('.product_list1').stop(true,true).slideDown(500);
    	// }else if(str.indexOf("炉")!=-1){
    	// 	$(this).parent().find('.product_list2').stop(true,true).slideDown(500);
    	// }else if(str.indexOf("净水")!=-1){
    	// 	$(this).parent().find('.product_list3').stop(true,true).slideDown(500);
    	// }else if(str.indexOf("净化")!=-1){
    	// 	$(this).parent().find('.product_list4').stop(true,true).slideDown(500);
    	// }else if(str!="热水" && str!="炉" && str!="净水" && str!="净化"){
    	// 	$(this).parent().find('.product_list1').stop(true,true).slideUp(500);
    	// 	$(this).parent().find('.product_list2').stop(true,true).slideUp(500);
    	// 	$(this).parent().find('.product_list3').stop(true,true).slideUp(500);
    	// 	$(this).parent().find('.product_list4').stop(true,true).slideUp(500);
    	// }

    });

    $('.form-control').bind('input propertychange', function() {
	    var str=String(document.getElementById("searchTxt").value);
    	if(str.indexOf("热水")!=-1){
    		$(this).parent().find('.product_list1').stop(true,true).slideDown(500);
    	}else if(str.indexOf("炉")!=-1){
    		$(this).parent().find('.product_list2').stop(true,true).slideDown(500);
    	}else if(str.indexOf("净水")!=-1){
    		$(this).parent().find('.product_list3').stop(true,true).slideDown(500);
    	}else if(str.indexOf("净化")!=-1){
    		$(this).parent().find('.product_list4').stop(true,true).slideDown(500);
    	}else if(str!="热水" && str!="炉" && str!="净水" && str!="净化"){
    		$(this).parent().find('.product_list1').stop(true,true).slideUp(500);
    		$(this).parent().find('.product_list2').stop(true,true).slideUp(500);
    		$(this).parent().find('.product_list3').stop(true,true).slideUp(500);
    		$(this).parent().find('.product_list4').stop(true,true).slideUp(500);
    	}
	});

    $('.product_list1 p:eq(0)').on('click',function(){
    	self.location="./production1.html";
    });
    $('.product_list1 p:eq(2)').on('click',function(){
    	self.location="./production.html";
    });

    // 顶部导航搜索
    $('.search').on('click',function(){
    	if(!$('.search').hasClass('active')){
    		$('.navbar .container .form-controls').css("display","block");
    		$('#searchBtn').css("display","block");
    		$('.search').addClass('active');
    	}else{
    		$('.navbar .container .form-controls').css("display","none");
    		$('#searchBtn').css("display","none");
    		$('.search').removeClass('active');
    	}
    });

    $('#searchBtn').on('click',function(){
    	var str=String(document.getElementById("searchTxts").value);
    	if(str.indexOf("EWH-E9",0)!=-1 || str.indexOf("ewh-e9",0)!=-1){
    		self.location="./production1.html";
    	}
    	if(str.indexOf("JSQ-N3L",0)!=-1 || str.indexOf("jsq-n3l",0)!=-1){
    		self.location="./production.html";
    	}
    });



    var stopSrollBoo=true;
	var floatMenu_Id=0;
	var floatMenu_max=10;
    // footmenu
    for(var k=0;k<floatMenu_max;k++){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').removeClass('swiper-slide-actives');
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').on('click',function(event){
			if($(this).hasClass('swiper-slide-actives')){
				closeFloatMenuContainer();
			}else{
				
				for(var t=0;t<floatMenu_max;t++){
					if($('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+t+')').html()==$(this).html()){
						break;
					}
				}
				openBottomMenu(t);

			}
		});
	}

	function openBottomMenu(k){
		var t_id=0;
		for(var t=0;t<floatMenu_max;t++){
			$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+t+')').removeClass('swiper-slide-actives');
		}
		// if(parseInt($('.popup_index').css("top"))==$(window).height()){
			$('.popup_index').css("top","30%");
			$('.popup_index').css("opacity","0");
			$('.popup_index').animate({"top":"48px",'opacity':1},0);	
		// }
		
		stopSrollBoo=false;
		floatMenu_Id=k;
		
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').addClass('swiper-slide-actives');
		
		try{
			event.stopPropagation();//组织冒泡
			event.preventDefault();//阻止浏览器默认事件
		}catch(e){

		}
	}

	// 左侧菜单点击菜单产品调用底部菜单
	$.each($(".wrapper .moreChild p"), function(index, val) {
		$(this).on('click',function(){
			$(".close").click();
			if(!stopSrollBoo){
				closeFloatMenuContainer();
			}
			for(var t=0;t<floatMenu_max;t++){
				if($('.moreChild p:eq('+t+')').html()==$(this).html()){
					break;
				}
			}
			openBottomMenu(t);
		});
	});

	// 底部菜单(非浮动)
	$.each($("dropdown .moreChild p"), function(index, val) {
		$(this).on('click',function(){
			if(!stopSrollBoo){
				closeFloatMenuContainer();
			}
			for(var t=0;t<floatMenu_max;t++){
				if($('.moreChild p:eq('+t+')').html()==$(this).html()){
					break;
				}
			}
			openBottomMenu(t);
		});
	});

	// popup关闭
	$(".popup_index .close").on('click',function(){
		if(!stopSrollBoo){
			closeFloatMenuContainer();
		}
	});

	// 关闭事件
	function closeFloatMenuContainer(){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+floatMenu_Id+')').removeClass('swiper-slide-actives');
		stopSrollBoo=true;
		floatMenu_Id=-1;
		$('.popup_index').animate({"top":"100%",'opacity':0},0);
	}

	// centerMenu 按钮事件
	$(".centerMenu .container .row").find("div:eq(1)").on('click',function(){
		
	});

	setTimeout(function(){
		if(!stopSrollBoo){
			closeFloatMenuContainer();
		}
		if(GetQueryString("p")){
			openBottomMenu(GetQueryString("p"));
		}
	},1000);
});

// 获取地址栏参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

$(window).resize(function() {
	resizeHandler();
});


window.addEventListener('orientationchange', createOrientationChangeProxy(function() {  
    resizeHandler(); // 无论是Safari还是Android浏览器都能正确的输出屏宽 
}, window), false); 
//代码库默认依赖了Zepto框架  
function createOrientationChangeProxy(fn, scope) {  
    return function() {  
        /* 
         * 如果是Android浏览器，我们设想一种场景，手机从 竖屏-横屏-竖屏-横屏 时， 
         * 这个过程经历了四次切换，但实际我们只需要处理最后一次切横屏的结果， 
         * 那么，延迟300ms执行回调函数，可以在最开始时清除冗余的orientationChangedTimeout。 
         */  
        clearTimeout(scope.orientationChangedTimeout);  
        var args = Array.prototype.slice.call(arguments, 0);  
        scope.orientationChangedTimeout = setTimeout($.proxy(function() {  
            /* 
             * 再设想一种场景，手机从 竖屏-横屏-竖屏 时，在这个过程，系统并未改变任何东西， 
             * 将lastOrientation保存下来，能有效的避免垃圾操作产生的回调处理 
             */  
            var ori = window.orientation;  
            if (ori != scope.lastOrientation) {  
                fn.apply(scope, args); // 这里才是真正执行回调函数  
            }  
            scope.lastOrientation = ori;  
        }, scope), $.os.android ? 300 : 0);  
    };  
}

function resizeHandler(){
	$('.main .kv').css("height",$(window).width()/1080*600*1.05+"px");
	$('.kv .swiper-container').css("height",$(window).width()/1080*600*1.05+"px");
	$('.kv .swiper-slide').css("height",$(window).width()/1080*600*1.05+"px");
	$('section .main .product .row').css('height',$(window).width()/2/530*340+"px")
	$('section .main .product .row .col-xs-6').css('height',$(window).width()/2/530*340*1.15+"px");
	$('.wrapper .sidebar').css("width",($(window).width())+"px");
	$('.wrapper .sidebar nav .container .row:eq(1) div .form-control').css("width",($(window).width()-95)+"px");
	$('.wrapper .sidebar nav .container .row:eq(2) div').css("width",(($('.wrapper .sidebar').width()-95-7)*0.5)+"px");
	$('.wrapper .sidebar nav .container .row:eq(3) div').css("width",(($('.wrapper .sidebar').width()-95-7)*0.5)+"px");
	$('.sidebar li').css("width",($('.wrapper .sidebar').width()-95)+"px");
	$('.leftmenu .more p').css("width",($('.wrapper .sidebar').width()-95)+"px");
	if($(window).width()>880){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide').css("margin-left",(($(window).width()-680)/11)+"px");
	}

	if($(window).width()==1024){
		$('.close').css("margin-right","18px");
		$('.glyphicon-search').css("right","34px");
		$('header .search').css("right","12px");
	}else if($(window).width()==768){
		$('.close').css("margin-right","18px");
		$('.glyphicon-search').css("right","71px");
		$('header .search').css("right","6px");
	}else{
		$('.close').css("margin-right","15px");
		$('.glyphicon-search').css("right","21px");
		// $('header .search').css("right","-22px");
		$('header .search').css("right",((320-$(window).width())/12-22)+"px");
	}

	// popup
	$('.popup_index .swiper-wrapper').css("width",$(window).width()+"px");
	$('.popup_index .swiper-wrapper').css("height",($(window).height()-48)+"px");
	
	// console.log('s:'+$('.popup_index .swiper-wrapper .swiper-slide'));
}

function setIntervalHandler(){
	// console.log('s:'+document.body.scrollTop+"|"+$('body').height()+"|"+$(window).height());
	if(document.body.scrollTop<$('body').height()-$(window).height()-100){
		if($('.folatMenu').css("bottom")=="-48px"){
			$('.folatMenu').animate({'bottom': "0px",'opacity':1},800);	
			$('.folatMenuLine').animate({'bottom': "45px",'opacity':1},800);
		}
	}else{
		$('.folatMenu').animate({'bottom': "-48px",'opacity':0},800);
		$('.folatMenuLine').animate({'bottom': "0px",'opacity':0},800);
	}

	$('div[data-ssbplugin="sub-wrapper"]').css({"overflow": 'auto',"overflow-x": 'hidden'});
	$('body').css({"overflow": 'auto',"overflow-x": 'hidden'});

	// popup
	$('.popup_index .swiper-wrapper').css("height",($(window).height()-48)+"px");
	$('.popup_index .swiper-wrapper .swiper-slide').css("height",125+"px");
    
	if($(window).height()>670){
		$('.popup_index .swiper-slide:eq(0)').css("margin-top",($(window).height()-120*6-48+50)/2+"px");
	}else{
		$('.popup_index .swiper-slide:eq(0)').css("margin-top","25px");
	}

	$('dropdown:eq(0)').css("margin-top","17.5px");
}
setIntervalHandler();
setInterval(setIntervalHandler,900)