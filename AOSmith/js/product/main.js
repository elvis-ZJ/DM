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
    	try{
			event.stopPropagation();//组织冒泡
			event.preventDefault();//阻止浏览器默认事件
		}catch(e){

		}
    });
    $(".sina").on('click',function(){
        shareToSNS.sina("", "http://www.aosmith.com.cn/", "艾欧史密斯(中国)热水器有限公司，全国统一24小时服务热线：4008288988。A.O.Smith建立了完善的研发、生产、销售及服务一体化的现代化管理体系，产品体系跨工业、商业、家用三大领域，为中国消费带来了国际品质的热水器产品和专业服务。");
    	try{
			event.stopPropagation();//组织冒泡
			event.preventDefault();//阻止浏览器默认事件
		}catch(e){

		}
    });

    $(".main .video_btn").on('click',function(){
    	if($(".main .video_btn").css("opacity")==1){
			var myPlayer = _V_("my_video_1");
			myPlayer.currentTime(0);
			myPlayer.play();

			myPlayer.width($(window).width());
			myPlayer.height($(window).height());
			$('#my_video_1').css("display","block");
		}
    });

    $('#my_video_1').on('click',function(){
		var myPlayer = _V_("my_video_1");
		myPlayer.pause();
		$('#my_video_1').css("display","none");
    });
    $('body').on("touchstart",function(){
    	$('#my_video_1').click();
    });


    $(".leftmenu li:eq(3) .m").on('click',function(){
    	self.location="./r360/index.html";
	});

    $(".leftmenu li:eq(1) .more p:eq(0)").on('click',function(){
    	self.location="./history_cover.html";
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

    $('.wrapper .sidebar .container .row:eq(3) div:eq(0)').on('click',function(){
    	self.location="./r360/index.html";
	});


    // 顶部导航搜索
    $('.search').on('click',function(){
    	if(!$('.search').hasClass('active')){
    		$('.navbar .row-fluid  .form-controls').css("display","block");
    		$('#searchBtn').css("display","block");
    		$('.search').addClass('active');
    	}else{
    		$('.navbar .row-fluid  .form-controls').css("display","none");
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

    // 购买
    $('.buy').on('touchstart',function(){
    	$('.buyList').css("display","block");
    	$('.buyList').animate({"opacity":1},500);
    });
    $('.buyList').on('touchstart',function(){
    	$('.buyList').animate({"opacity":0},500,function(){
    		$('.buyList').css("display","none");
    	})
    });

	// home floatMenu
	var homeFloatMenu_swiper = new Swiper('.swiper-container-floatMenu', {
        scrollbar: '.swiper-scrollbar-floatMenu',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true,
        width:$(window).width()-20
    });

    // 左侧菜单点击菜单产品调用底部菜单
	$.each($(".wrapper .moreChild p"), function(index, val) {
		$(this).on('click',function(){
			for(var t=0;t<index;t++){
				if($('.moreChild p:eq('+t+')').html()==$(this).html()){
					break;
				}
			}
			self.location="./index.html?p="+t;
		});
	});

    // 规格参数 kv
	var swiper_specifications;

    // 安装效果 kv
	var swiper_showEffects;


	if(!swiper_specifications){
		swiper_specifications = new Swiper('.specifications .kv .swiper-container', {
	        pagination: '.specifications .kv .swiper-container .swiper-pagination',
	        paginationClickable: true,
	        spaceBetween: 0,
	        loop: false
	    });
	}
	if(!swiper_showEffects){
		swiper_showEffects = new Swiper('.showEffects .kv .swiper-container', {
	        pagination: '.showEffects .kv .swiper-container .swiper-pagination',
	        paginationClickable: true,
	        spaceBetween: (20+($(window).width()-320)/2)
	    });
	}

	// 180旋转
	function rotation180_init(){
		$.ajax({  
            url:"./images/product_1/JSQ-LS/JSQ-LS.xml",  
            type:"POST",  
            dataType:"xml",  
            timeout: 1000,  
            error: function(xml){  
                console.log('Error loading XML document'+xml);  
            },  
            success: function(xml){  
            	var max=0;
                // $(xml).find("data>item").each(function(i){  
                // 	var path_name=$(this).attr("path");
                //     $(".popup .containers .rotation .menu .list").append("<li><img src=./images/product_1/JSQ-LS/"+path_name+"></li>");
                //     max++;
                // });
                for(var j=30;j<180;j++){
                	var path_name=j;
                	if(j<100){
                    	$(".popup .containers .rotation .menu .list").append("<li><img src=./images/product_1/JSQ-LS/JSQ_000"+path_name+".png ></li>");
                    }else {
                    	$(".popup .containers .rotation .menu .list").append("<li><img src=./images/product_1/JSQ-LS/JSQ_00"+path_name+".png ></li>");
                    }
                    max++;
                }
                rotation180_complete(max);


                var iLen = max;
				var _num = 0;
				var scale;
				$('.rotation .loading').show();
				for(var i=0;i<iLen;i++){
					if(i+30<100){
				    	loadImage("./images/product_1/JSQ-LS/JSQ_000"+(i+30)+".png");
					}else{
						loadImage("./images/product_1/JSQ-LS/JSQ_00"+(i+30)+".png");
					}
				}
				function loadImage(url) {
				    var img = new Image();
				    
				    img.onload = function () {
				        _num++;
				        $('.rotation .loading').text("loading..."+parseInt((_num/iLen)*100)+'%');
				        if(_num >= iLen){
				            $('.rotation .loading').hide();
				        }
				        // console.log('载入进度:'+_num);
				    };
				    
				    setTimeout(function() {
				        img.src = url;
				    },500);
				};

            }  
        }); 
	}
	function rotation180_complete(pic_max){
		var pic_X=0;
		var pic_W=$(window).width();
		var center_X=$(window).width();//pic_X+pic_W;
		$('.list li').eq(pic_max/2).show().siblings().hide();
		var movestop=pic_max;
		$('.rotation').bind('touchstart', function(e){
			// stopSrollBoo=true;
		});
		$('.rotation').bind('touchend', function(e){
			stopSrollBoo=false;
		});
		$('.rotation').bind('touchmove', function(e){
			var touch = window.event.touches[0];
			var mouse_X=touch.pageX;
			moveImg(mouse_X);
		});
		function moveImg(m_X){
			var index=Math.ceil(Math.abs(m_X/center_X)*movestop);
			// console.log('index:'+index);
			$('.list li').eq(index).show().siblings().hide();
		}
	}
	
	var stopSrollBoo=true;
	var floatMenu_Id=0;
    // 底部菜单
    $('.popup').hide();
    $('.popup .containers .share').hide();
	$('.popup .containers .favorite').hide();
	$('.popup .containers .specifications').hide();
	$('.popup .containers .showEffects').hide();
	$('.popup .containers .rotation').hide();

    for(var k=0;k<5;k++){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').removeClass('swiper-slide-actives');
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').removeClass('swiper-slide-next');
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').on('click',function(event){
			if($(this).hasClass('swiper-slide-actives')){
				closeFloatMenuContainer();
			}else{
				var t_id=0;
				for(var t=0;t<5;t++){
					$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+t+')').removeClass('swiper-slide-actives');
				}
				for(var t=0;t<5;t++){
					if($('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+t+')').html()==$(this).html()){
						break;
					}
				}

				stopSrollBoo=false;
				// if(floatMenu_Id==t)return;
				floatMenu_Id=t;
				// swiper.activeIndex=t;
				$(this).addClass('swiper-slide-actives');
				$('.popup').css("height",$(window).height());
				$('.popup .containers').css("height",$(window).height());

				$('.popup').show();
				$('.popup').css("bottom",-document.body.scrollTop);

				$('.popup .containers .share').hide();
				$('.popup .containers .favorite').hide();
				$('.popup .containers .specifications').hide();
				$('.popup .containers .showEffects').hide();
				$('.popup .containers .rotation').hide();

				if(floatMenu_Id==0){
					$('.popup .containers .rotation').show();
					rotation180_init();
				}else if(floatMenu_Id==1){
					$('.popup .containers .showEffects').show();
					$('.popup .containers .showEffects .kv .swiper-container .swiper-slide:eq(0)').css("margin-left",(-($(window).width()-320)*0.5-103.25)+"px");
				}else if(floatMenu_Id==2){
					$('.popup .containers .specifications').show();
					// $('.popup .containers .specifications .swiper-container').css("height",($(window).width()/1080*1142+80)+"px");		
					// $('.popup .containers .specifications .swiper-wrapper .swiper-slide').css("height",($(window).width()/1080*1142)+"px");
					// $('.popup .containers .specifications .swiper-wrapper .swiper-slide .hot').css("zoom",$(window).width()/344);
				}else if(floatMenu_Id==3){
					$('.popup .containers .favorite').show();
				}else if(floatMenu_Id==4){
					$('.popup .containers .share').show();
				}
				
				
			}
		});

	}

	$(".swiper-slide .hot").on('click',function(){
		event.stopPropagation();//组织冒泡
        event.preventDefault();//阻止浏览器默认事件
	});

	$(".swiper-slide .con").on('click',function(){
		event.stopPropagation();//组织冒泡
        event.preventDefault();//阻止浏览器默认事件
	});

	$(".swiper-pagination").on('click',function(){
		event.stopPropagation();//组织冒泡
        event.preventDefault();//阻止浏览器默认事件
	});

	$(".popup .containers .rotation .menu ul li img").on('click',function(){
		event.stopPropagation();//组织冒泡
        event.preventDefault();//阻止浏览器默认事件
	});
	
	$(".popup .close").on('click',function(){
		if(!stopSrollBoo){
			closeFloatMenuContainer();
		}
	});

	$(".popup .containers").on('click',function(){
		if(!stopSrollBoo){
			closeFloatMenuContainer();
		}
	});

	$(".popup .containers .favorite .favoriteLogo").on('click',function(){
		addFavorite(window.location,document.title);
		event.stopPropagation();//组织冒泡
        event.preventDefault();//阻止浏览器默认事件
	});

	//加入收藏
	function addFavorite(url, title) {
	    url = encodeURI(url); 
	    try{
	    	//ie浏览器收藏方式
	        window.external.addFavorite(url, title);
	    }catch(e) {
	        try{
	            //火狐浏览器收藏方式
	            window.sidebar.addPanel(title, url, "A.0.simth");
	        }catch (e) {
	            alert("加入收藏失败，请手动在浏览器里进行设置.");
	        }
	   }
	}

	// 关闭事件
	function closeFloatMenuContainer(){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+floatMenu_Id+')').removeClass('swiper-slide-actives');
		
		$('.popup').hide();
		$('.popup .containers .share').hide();
		$('.popup .containers .favorite').hide();
		$('.popup .containers .specifications').hide();
		$('.popup .containers .showEffects').hide();

		stopSrollBoo=true;
		floatMenu_Id=-1;
	} 

	// 阻止滑动事件
	document.addEventListener('touchmove',function(event){
		console.log('stopSrollBoo:'+stopSrollBoo);
		if(!stopSrollBoo){
	    	event.stopPropagation();//组织冒泡
          	event.preventDefault();//阻止浏览器默认事件
	    }
	})
});

$(window).resize(function() {
	resizeHandler();
});

function resizeHandler(){
	var menu_w_max=0

	// kv
	if($(window).height()>480){
		$('.main .p_kv').css("margin-top",($(window).height()-500)/2+"px");
		$('.main .p_1').css("margin-top",$(window).height()/480*120+"px");
	}

	for(var k=0;k<5;k++){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').css("width",(($(window).width())/5)+"px");
	}
	for(k=0;k<5;k++){
		if(k<3){
			$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').find('.container').css("margin-left",(($(window).width()-240)/5/2)+"px");
		}else{
			$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').find('.container').css("margin-left",(((($(window).width()-240)/5)+25)/2)+"px");
		}

		// $('.popup .containers .showEffects .swiper-wrapper .swiper-slide:eq('+k+')').css("height",($(window).width()/640*952)+"px");
		// $('.popup .containers .showEffects .swiper-wrapper .swiper-slide:eq('+k+') .con').css("height",($(window).width()/640*952)+"px");
	}
	
	$('.main .kv').css("height",$(window).width()/1080*600*1.05+"px");
	$('.swiper-container').css("height",$(window).width()/1080*600*1.05+"px");
	$('.swiper-slide').css("height",$(window).width()/1080*600*1.05+"px");
	$('section .main .product .row .col-xs-6').css('height',$(window).width()/2/530*340*1.05+"px")
	$('.wrapper .sidebar').css("width",($(window).width())+"px");
	$('.wrapper .sidebar nav .container .row:eq(1) div .form-control').css("width",($(window).width()-95)+"px");
	$('.wrapper .sidebar nav .container .row:eq(2) div').css("width",(($('.wrapper .sidebar').width()-95-7)*0.5)+"px");
	$('.wrapper .sidebar nav .container .row:eq(3) div').css("width",(($('.wrapper .sidebar').width()-95-7)*0.5)+"px");
	$('.sidebar li').css("width",($('.wrapper .sidebar').width()-95)+"px");
	$('.leftmenu .more p').css("width",($('.wrapper .sidebar').width()-95)+"px");
	if($(window).width()>880){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide').css("margin-left",(($(window).width()-680)/11)+"px");
	}else{
		$('.swiper-container-floatMenu').css("width",($(window).width())+"px");
	}

	if($(window).width()==1024){
		$('.close').css("margin-right","18px");
		$('.glyphicon-search').css("right","34px");
		$('header .search').css("right","-6px");
	}else if($(window).width()==768){
		$('.close').css("margin-right","18px");
		$('.glyphicon-search').css("right","71px");
		$('header .search').css("right","-6px");
	}else{
		$('.close').css("margin-right","15px");
		$('.glyphicon-search').css("right","21px");
		// $('header .search').css("right","-22px");
		$('header .search').css("right",((320-$(window).width())/12-21-11)+"px");
	}


	// popup 规格参数
	$('.popup .containers .specifications .swiper-container').css("height",($(window).width()/1080*1142+80)+"px");		
	$('.popup .containers .specifications .swiper-wrapper .swiper-slide').css("height",($(window).width()/1080*1142)+"px");
	// $('.popup .containers .specifications .swiper-wrapper .swiper-slide .hot').css("zoom",$(window).width()/344);
	$('.popup .containers .specifications .swiper-container').css("margin-top",($(window).height()-($(window).width()/1080*1142)-48-60)/2+"px");
	
	// popup 安装效果
	$('.popup .containers .showEffects .swiper-wrapper .swiper-slide .con').css("width",($(window).width()-112)+"px");
	var con_scale=parseInt($('.popup .containers .showEffects .swiper-wrapper .swiper-slide .con').css("width"))/207.5;
	$('.popup .containers .showEffects .swiper-wrapper .swiper-slide .con').css("height",con_scale*326+"px");
	$('.popup .containers .showEffects .swiper-container').css("height",(con_scale*326+50)+"px");
	$('.popup .containers .showEffects .swiper-container').css("margin-top",($(window).height()-(con_scale*326+10)-48)/2+"px");
	$('.popup .containers .showEffects .kv .swiper-container .swiper-slide:eq(0)').css("margin-left",(-($(window).width()-320)*0.5-103.25)+"px");

	// popup 180
	$('.popup .containers .rotation .menu').css("margin-top",($(window).height()-450)/2+"px");
	$('.popup .containers .rotation .menu ul').css("margin-left",(($(window).width()-320)/2-208)+"px");


	$('.popup .containers .rotation').css("width",($(window).width())+"px");
	$('.popup .containers .rotation').css("height",($(window).width()/640*1138)+"px");
	
	$('#my_video_1').css("width",$(window).width()+"px");
	$('#my_video_1').css("height",$(window).height()+"px");

	$('#my_video_1').css("left","50%");  
	$('#my_video_1').css("margin-left",(-$(window).width()/2)+"px");
	$('#my_video_1').css("top","50%");  
	$('#my_video_1').css("margin-top",(-$(window).height()/2)+"px");	

	if($(window).height()>480){
		$('footer').css("margin-top",($(window).height()-480)/2+"px");
		$('.p_5').css("margin-top",(($(window).height()-480)/2+100)+"px");
	}
	
}

setInterval(function(){
	if(document.body.scrollTop<$('body').height()-$(window).height()-100){
		if($('.folatMenu').css("bottom")=="-48px"){
			$('.folatMenu').animate({'bottom': "0px",'opacity':1},800);	
		}
	}else{
		$('.folatMenu').animate({'bottom': "-48px",'opacity':0},800);
	}

	$('div[data-ssbplugin="sub-wrapper"]').css({"overflow": 'auto',"overflow-x": 'hidden'});
	$('body').css({"overflow": 'auto',"overflow-x": 'hidden'});
	for(k=0;k<5;k++){
		$('.swiper-container-floatMenu .swiper-wrapper .swiper-slide:eq('+k+')').css("margin-left","0px");
	}
	$('.popup .containers .showEffects .kv .swiper-container .swiper-slide:eq(0)').css("margin-left",(-($(window).width()-320)*0.5-103.25)+"px");
},800)

setInterval(function(){
	if(document.body.scrollTop>41){
		if($('#topTitle').css("position")!="fixed"){
			$('#topTitle').css("position","fixed");
			// $('#topTitle').animate({'top': "-48px"},0);
			$('#topTitle').animate({'top': "0px"},100);
		}
	}else{
		$('#topTitle').css("position","relative");
		$('#topTitle').animate({'top': "0px"},0);
	}
},10);