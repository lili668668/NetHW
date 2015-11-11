$(document).ready(function(){
	// 下滑
	$("#pthome").click(function(){
		$("html,body").animate({
			scrollTop: $("#home").offset().top
		},900);
	});
	$("#ptgrow").click(function(){
		$("html,body").animate({
			scrollTop: $("#introduction-grow").offset().top - 70
		},900);
	});
	$("#ptphoto").click(function(){
		$("html,body").animate({
			scrollTop: $("#photo-video").offset().top - 100
		},900);
	});
	$("#ptgame").click(function(){
		$("html,body").animate({
			scrollTop: $("#game").offset().top - 100
		},900);
	});
	$("#ptfb").click(function(){
		window.open("https://www.facebook.com/%E5%A4%A9%E7%AB%BA%E9%BC%A0%E8%92%BD%E8%92%BD%E5%A7%90%E5%A7%90%E5%B0%8F%E5%A4%A9%E4%BD%BF%E5%A7%86%E5%A7%86%E5%A6%B9%E5%A6%B9-772331202830916/?fref=ts", "_self");
	});
	$("#HTgrow").click(function(){
		$("html,body").animate({
			scrollTop: $("#introduction-grow").offset().top - 70
		},900);
	});
	$("#HTphoto").click(function(){
		$("html,body").animate({
			scrollTop: $("#photo-video").offset().top - 100
		},900);
	});
	$("#HTgame").click(function(){
		$("html,body").animate({
			scrollTop: $("#game").offset().top - 100
		},900);
	});
	$("#HTfb").click(function(){
		window.open("https://www.facebook.com/%E5%A4%A9%E7%AB%BA%E9%BC%A0%E8%92%BD%E8%92%BD%E5%A7%90%E5%A7%90%E5%B0%8F%E5%A4%A9%E4%BD%BF%E5%A7%86%E5%A7%86%E5%A6%B9%E5%A6%B9-772331202830916/?fref=ts", "_self");
	});
	
	// 導覽航的變換
	$("#pthome").hover(function(){
		$(this).attr("src","picture/home7(6)2.png");
	}, function(){
		$(this).attr("src","picture/home7(6).png");
	});
	$("#ptgrow").hover(function(){
		$(this).attr("src","picture/drink1422.png");
	}, function(){
		$(this).attr("src","picture/drink142.png");
	});
	$("#ptphoto").hover(function(){
		$(this).attr("src","picture/movie942.png");
	}, function(){
		$(this).attr("src","picture/movie94.png");
	});
	$("#ptgame").hover(function(){
		$(this).attr("src","picture/controller2.png");
	}, function(){
		$(this).attr("src","picture/controller.png");
	});
	$("#ptfb").hover(function(){
		$(this).attr("src","picture/facebok(5)2.png");
	}, function(){
		$(this).attr("src","picture/facebok(5).png");
	});
	$("#HTgrow").hover(function(){
		$(this).attr("src","picture/drink1422.png");
	}, function(){
		$(this).attr("src","picture/drink142.png");
	});
	$("#HTphoto").hover(function(){
		$(this).attr("src","picture/movie942.png");
	}, function(){
		$(this).attr("src","picture/movie94.png");
	});
	$("#HTgame").hover(function(){
		$(this).attr("src","picture/controller2.png");
	}, function(){
		$(this).attr("src","picture/controller.png");
	});
	$("#HTfb").hover(function(){
		$(this).attr("src","picture/facebok(5)2.png");
	}, function(){
		$(this).attr("src","picture/facebok(5).png");
	});
	
	// 導覽行的出現消失
    if ($("body").width() < 960) {
        $("div.straght1").hide();
    } else {
        $("div.straght1").hide();
        $(window).scroll(function(){
            var $HomeHeight = $("#home").height()-100;
            var $ScrollTop = $(this).scrollTop();
            if ($ScrollTop > $HomeHeight) {
                $("div.straght1").fadeIn("fast");
            } else {
                $("div.straght1").fadeOut("fast");
            }
        });
    }
	
	// introduction的特殊效果
	$("#introduction").hover(function(){
		$(this).css({"background-color":"rgb(219, 219, 219)"});
	}, function(){
		$(this).css({"background-color":"white"});
	});
	$("#introduction").click(function(){
		window.open("introduction.html", "_self");
	});
	
	// photo的特殊效果
	$("#slides").cycle({
		fx: "fade",
		timeout: 7200,
		random: 1
	});
	
	$(".slide").click(function(){
		window.open("photo.html","_self");
	});
});
