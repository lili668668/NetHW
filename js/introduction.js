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
});
