$(document).ready(function(){
	// 左旋返回旗標
	var back_left = false;
	// 左旋返回變色
	var tmptext_left = $("#left1 .text-container h1").text();
	$("#left1").hover(function() {
		if (back_left) {
			$("#left1 .text-container h1").text("Back");
		}
	}, function(){
		if (back_left) {
			$("#left1 .text-container h1").text(tmptext_left);
		}
	});
	
	// 左旋開啟關閉
	$("#left1").click(function(){
		if (back_left) {
			$(this).animate({
				left: "0%",
				borderWidth: "5px"
			},"normal");
			$("#right1").css("z-index","90");
			$(this).css("z-index","100");
			$("#left1 .text-container h1").text(tmptext_left);
			back_left = false;
		} else {
			$(this).css("z-index","200");
			$(this).animate({
				left: "50%",
				borderWidth: "0px"
			},"normal");
			back_left = true;
		}
	});
	
	// 右旋返回旗標
	var back_right = false;
	// 右旋返回變色
	var tmptext_right = $("#right1 .text-container h1").text();
	$("#right1").hover(function() {
		if (back_right) {
			$("#right1 .text-container h1").text("Back");
		}
	}, function(){
		if (back_right) {
			$("#right1 .text-container h1").text(tmptext_right);
		}
	});
	
	// 右旋開啟關閉
	$("#right1").click(function(){
		if (back_right) {
			$(this).animate({
				right: "0%",
				borderWidth: "5px"
			},"normal");
			$(this).css("z-index","100");
			$("#right1 .text-container h1").text(tmptext_right);
			back_right = false;
		} else {
			$(this).css("z-index","200");
			$(this).animate({
				right: "50%",
				borderWidth: "0px"
			},"normal");
			back_right = true;
		}
	});
	
	$("#pp2").hover(function(){
		$(this).append("<div class=\"video-wrap\"><div class=\"text-wrap\">喜歡吃跟睡，最常出現的姿勢是趴著或躺著，夏天會把肚子冰在涼涼的石頭上，吃菜時會把嘴巴塞滿食物且嘴巴下面會被菜汁染成綠色的，討厭洗澡、剪指甲或是健康檢查，被摸手會咬人，喜歡待在籠子裡面，尤其是直角趴在便盆上面，只要一聽到食物的聲音就會開始一直啃籠子直到食物出現在面前，喝水量非常大。</div></div>");
	}, function(){
		$(this).empty();
	});
	
	$("#ee2").hover(function(){
		$(this).append("<div class=\"video-wrap\"><div class=\"text-wrap\">喜歡吃跟到處跑來跑去，整個家都是滾滾的活動範圍，常常放風到馬麻都找不到她，很常邊走路邊碎碎念，有時會跟著馬麻走動，聽到名字會馬上湊過來，會討摸摸的同時把身體喬到自己想要的角度，不時會說話或尖叫，不喜歡剪指甲和健康檢查，是很調皮的小孩，只要一聽到食物的聲音就是滾滾出現的地方，喝水量非常大。</div></div>");
	}, function(){
		$(this).empty();
	});
});
