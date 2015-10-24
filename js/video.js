$(document).ready(function(){
	$("a#img1").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("羞恥黑歷史的範例影片");
		$("video#play").append("<source src=\"video/123.ogv\" type=\"video/ogg\"><source src=\"video/123.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img1").hover(function(){
		$(this).append("<div class=\"video-wrap\">黑歷史</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img16").hover(function(){
		$(this).append("<div class=\"video-wrap\">回家</div>");
	}, function(){
		$(this).empty();
	});
	
	$("#close-img").hover(function(){
		$(this).attr("src","picture/close402.png");
	},function(){
		$(this).attr("src","picture/close40.png");
	});
	
	$("#close").click(function(){
		document.getElementById("play").pause();
		$("source").remove();
		Avgrund.hide();
	});
});