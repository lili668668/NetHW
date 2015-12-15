$(document).ready(function(){
	$("a#img1").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("給獸醫剪指甲");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Encut.ogv\" type=\"video/ogg\"><source src=\"video/encut.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img2").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("無法抗拒的大陸妹");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Endonteat.ogv\" type=\"video/ogg\"><source src=\"video/endonteat.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img3").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("蒽蒽的日常生活");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Enlife.ogv\" type=\"video/ogg\"><source src=\"video/enlife.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img4").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("甜甜的感冒糖漿");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Enmedicine.ogv\" type=\"video/ogg\"><source src=\"video/enmedicine.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img5").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("七草吃到飽");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Ennlittleen.ogv\" type=\"video/ogg\"><source src=\"video/ennlittleen.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img6").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("洗完澡澡的時刻");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Enshower.ogv\" type=\"video/ogg\"><source src=\"video/enshower.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img7").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("午睡時刻");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Ensleep.ogv\" type=\"video/ogg\"><source src=\"video/ensleep.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img8").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("奔跑吧！滾滾！");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/Gunrun.ogv\" type=\"video/ogg\"><source src=\"video/gunrun.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img9").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("有更好吃的東西出現了");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/IMG_0033.ogv\" type=\"video/ogg\"><source src=\"video/IMG_0033.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img10").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("飽餐一頓");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/IMG_0326.ogv\" type=\"video/ogg\"><source src=\"video/IMG_0326.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img11").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("摸摸");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/IMG_0659.ogv\" type=\"video/ogg\"><source src=\"video/IMG_0659.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img12").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("為什麼要拿走？全都是我的");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/IMG_0703.ogv\" type=\"video/ogg\"><source src=\"video/IMG_0703.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img13").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("天竺鼠們");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/IMG_0858.ogv\" type=\"video/ogg\"><source src=\"video/IMG_0858.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img14").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("在床上玩耍");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/IMG_1362.ogv\" type=\"video/ogg\"><source src=\"video/IMG_1362.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img15").click(function(){
		Avgrund.show("#video-window");
		$("h2#video-title").text("喝水");
		$("#video-window").append("<video id=\"play\" poster=\"picture/Squirrel.jpg\" controls></video>");
		$("video#play").append("<source src=\"video/IMG_1759.ogv\" type=\"video/ogg\"><source src=\"video/IMG_1759.mp4\" type=\"video/mp4\">");
	});
	
	$("a#img1").hover(function(){
		$(this).append("<div class=\"video-wrap\">剪指甲</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img2").hover(function(){
		$(this).append("<div class=\"video-wrap\">吃菜</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img3").hover(function(){
		$(this).append("<div class=\"video-wrap\">日常生活</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img4").hover(function(){
		$(this).append("<div class=\"video-wrap\">吃感冒藥</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img5").hover(function(){
		$(this).append("<div class=\"video-wrap\">吃飯飯</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img6").hover(function(){
		$(this).append("<div class=\"video-wrap\">洗澡澡</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img7").hover(function(){
		$(this).append("<div class=\"video-wrap\">午睡</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img8").hover(function(){
		$(this).append("<div class=\"video-wrap\">奔跑</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img9").hover(function(){
		$(this).append("<div class=\"video-wrap\">更好吃的東西</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img10").hover(function(){
		$(this).append("<div class=\"video-wrap\">飽餐一頓</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img11").hover(function(){
		$(this).append("<div class=\"video-wrap\">摸摸</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img12").hover(function(){
		$(this).append("<div class=\"video-wrap\">吃水果囉</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img13").hover(function(){
		$(this).append("<div class=\"video-wrap\">天竺鼠們</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img14").hover(function(){
		$(this).append("<div class=\"video-wrap\">在床上玩耍</div>");
	}, function(){
		$(this).empty();
	});
	
	$("a#img15").hover(function(){
		$(this).append("<div class=\"video-wrap\">喝水</div>");
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
		$("#play").remove();
		Avgrund.hide();
	});
});