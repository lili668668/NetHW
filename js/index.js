$(document).ready(function(){
	// 下滑
	$("a#tithome").click(function(){
		$("html,body").animate({
			scrollTop: $("#home").offset().top
		},900);
	});
	$("a#titgrow").click(function(){
		$("html,body").animate({
			scrollTop: $("#introduction-grow").offset().top - 70
		},900);
	});
	$("a#titphoto").click(function(){
		$("html,body").animate({
			scrollTop: $("#photo-video").offset().top - 100
		},900);
	});
	$("a#titgame").click(function(){
		$("html,body").animate({
			scrollTop: $("#game").offset().top - 100
		},900);
	});
	$("a#HTgrow").click(function(){
		$("html,body").animate({
			scrollTop: $("#introduction-grow").offset().top - 70
		},900);
	});
	$("a#HTphoto").click(function(){
		$("html,body").animate({
			scrollTop: $("#photo-video").offset().top - 100
		},900);
	});
	$("a#HTgame").click(function(){
		$("html,body").animate({
			scrollTop: $("#game").offset().top - 100
		},900);
	});
	
	// 導覽航的圖文變換
	$("a#tithome").hide();
	$("a#titgrow").hide();
	$("a#titphoto").hide();
	$("a#titgame").hide();
	$("a#titfb").hide();
	$("a#HTgrow").hide();
	$("a#HTphoto").hide();
	$("a#HTgame").hide();
	$("a#HTfb").hide();
	$("img#pthome").hover(function(){
		$(this).hide(100);
		$("a#tithome").show(100);
	});
	$("a#tithome").hover(function(){
	}, function(){
		$(this).hide(100);
		$("img#pthome").show(100);
	});
	$("img#ptgrow").hover(function(){
		$(this).hide(100);
		$("a#titgrow").show(100);
	});
	$("a#titgrow").hover(function(){
	}, function(){
		$(this).hide(100);
		$("img#ptgrow").show(100);
	});
	$("img#ptphoto").hover(function(){
		$(this).hide(100);
		$("a#titphoto").show(100);
	});
	$("a#titphoto").hover(function(){
	}, function(){
		$(this).hide(100);
		$("img#ptphoto").show(100);
	});
	$("img#ptgame").hover(function(){
		$(this).hide(100);
		$("a#titgame").show(100);
	});
	$("a#titgame").hover(function(){
	}, function(){
		$(this).hide(100);
		$("img#ptgame").show(100);
	});
	$("img#ptfb").hover(function(){
		$(this).hide(100);
		$("a#titfb").show(100);
	});
	$("a#titfb").hover(function(){
	}, function(){
		$(this).hide(100);
		$("img#ptfb").show(100);
	});
	$("img#HPgrow").hover(function(){
		$(this).hide();
		$("a#HTgrow").show();
	});
	$("a#HTgrow").hover(function(){
	}, function(){
		$(this).hide();
		$("img#HPgrow").show();
	});
	$("img#HPphoto").hover(function(){
		$(this).hide();
		$("a#HTphoto").show();
	});
	$("a#HTphoto").hover(function(){
	}, function(){
		$(this).hide();
		$("img#HPphoto").show();
	});
	$("img#HPgame").hover(function(){
		$(this).hide();
		$("a#HTgame").show();
	});
	$("a#HTgame").hover(function(){
	}, function(){
		$(this).hide();
		$("img#HPgame").show();
	});
	$("img#HPfb").hover(function(){
		$(this).hide();
		$("a#HTfb").show();
	});
	$("a#HTfb").hover(function(){
	}, function(){
		$(this).hide();
		$("img#HPfb").show();
	});
	
	// 導覽行的出現消失
	/*$("div.straght1").hide();
	$(window).scroll(function(){
		var $HomeHeight = $("#home").height()-100;
		var $ScrollTop = $(this).scrollTop();
		if ($ScrollTop > $HomeHeight) {
			$("div.straght1").fadeIn("fast");
		} else {
			$("div.straght1").fadeOut("fast");
		}
	});*/
	
	// introduction的特殊效果
	$("#introduction").hover(function(){
		$(this).css({"background-color":"rgb(219, 219, 219)"});
	}, function(){
		$(this).css({"background-color":"white"});
	});
	$("#introduction").click(function(){
		window.open("introduction.html", "_self");
	});
	
	// grow的特殊效果
	/*$(".forkit").hide();
	$(window).scroll(function(){
		var $HomeHeight = $("#home").height()-100;
		var $GrowHeight = $("#home").height() + $("#introduction-grow").height() - 300;
		var $ScrollTop = $(this).scrollTop();
		if ($ScrollTop > $HomeHeight && $ScrollTop < $GrowHeight) {
			$(".forkit").fadeIn("fast");
		} else {
			$(".forkit").fadeOut("fast");
		}
	});*/
});