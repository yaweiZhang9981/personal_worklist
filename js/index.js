

$(function(){
  		//轮播
  		$('#myCarousel').carousel({interval: 3000});
  		
  		//选项卡
    	$(".l_item").click(function(){
    		$(this).addClass("active").siblings().removeClass("active");
    		
    	})
    	//旋转logo
    	var i = 0;
		var timer=setInterval(function(){
			$(".logo").css({"transform":"rotateZ("+36*i+"deg)"});
			$(".logo").css({"transition":"all linear .1s"});
			i++;
		},100);
		//屏幕滚动事件
		$(window).scroll(function(){
			if($(window).scrollTop()>1000){
				$(".totop").show();
			}else{
				$(".totop").hide();
			}
		});
		$(".nav_home").click(function(){
			$("html,body").animate({'scrollTop':0});
		});
		$(".nav_work").click(function(){
			var top = $(".mian").offset().top;
			$("html,body").animate({'scrollTop':top});
		});
		$(".nav_mine").click(function(){
			var top = $("footer").offset().top;
			$("html,body").animate({'scrollTop':top});
		});
		//回到顶部
		$(".totop").click(function(){
			$("html,body").animate({'scrollTop':0});
		});
		

  		
  	})