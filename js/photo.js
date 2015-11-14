$(document).ready(function(){
    if( navigator.userAgent.match( /firefox/gi ) ) {
        [].slice.call( document.querySelectorAll( '.thumb img' ) ).forEach(function( el ) { el.style.boxShadow = 'none'; });
    }
	$("#button").click(function(){
		window.open("index.html", "_self");
	});
	if ($('body').height()>480) {
		$(".img-content").remove();
	}
	
	/*//////////////////////////////////*/
    $('#slides1').cycle({ 
        fx:    'shuffle',
        delay: -4000
    });
    $('#slides1').cycle("pause");

    var flag = true;
    $("#play1").click(function(){
        if (flag) {
            $('#slides1').cycle("resume");
            $(this).attr("src", "picture/multimedia.png");
            flag = false;
        } else {
            $('#slides1').cycle("pause");
            $(this).attr("src", "picture/play-button4.png");
            flag = true;
        }
    });

    if ($('body').height()>480) {
        $("#open1").click(function(){
            $("#book1").slideDown(1000);
        });
    }

    $("#close1").click(function(){
        $('#slides1').cycle("pause");
        $("#play1").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book1").slideUp(1000);
    });
    /*/////////////////////////////////////////////*/	
    $('#slides2').cycle({ 
        fx:    'shuffle',
        delay: -4000
    });
    $('#slides2').cycle("pause");

    var flag = true;
    $("#play2").click(function(){
        if (flag) {
            $('#slides2').cycle("resume");
            $(this).attr("src", "picture/multimedia.png");
            flag = false;
        } else {
            $('#slides2').cycle("pause");
            $(this).attr("src", "picture/play-button4.png");
            flag = true;
        }
    });

    if ($('body').height()>480) {
        $("#open2").click(function(){
            $("#book2").slideDown(1000);
        });
    }

    $("#close2").click(function(){
        $('#slides2').cycle("pause");
        $("#play2").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book2").slideUp(1000);
    });
    /*/////////////////////////////////////////////*/	
    $('#slides3').cycle({ 
        fx:    'shuffle',
        delay: -4000
    });
    $('#slides3').cycle("pause");

    var flag = true;
    $("#play3").click(function(){
        if (flag) {
            $('#slides3').cycle("resume");
            $(this).attr("src", "picture/multimedia.png");
            flag = false;
        } else {
            $('#slides3').cycle("pause");
            $(this).attr("src", "picture/play-button4.png");
            flag = true;
        }
    });

    if ($('body').height()>480) {
        $("#open3").click(function(){
            $("#book3").slideDown(1000);
        });
    }

    $("#close3").click(function(){
        $('#slides3').cycle("pause");
        $("#play3").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book3").slideUp(1000);
    });
    /*/////////////////////////////////////////////*/	
    $('#slides4').cycle({ 
        fx:    'shuffle',
        delay: -4000
    });
    $('#slides4').cycle("pause");

    var flag = true;
    $("#play4").click(function(){
        if (flag) {
            $('#slides4').cycle("resume");
            $(this).attr("src", "picture/multimedia.png");
            flag = false;
        } else {
            $('#slides4').cycle("pause");
            $(this).attr("src", "picture/play-button4.png");
            flag = true;
        }
    });

    if ($('body').height()>480) {
        $("#open4").click(function(){
            $("#book4").slideDown(1000);
        });
    }

    $("#close4").click(function(){
        $('#slides4').cycle("pause");
        $("#play4").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book4").slideUp(1000);
    });
    /*/////////////////////////////////////////////*/	
    $('#slides5').cycle({ 
        fx:    'shuffle',
        delay: -4000
    });
    $('#slides5').cycle("pause");

    var flag = true;
    $("#play5").click(function(){
        if (flag) {
            $('#slides5').cycle("resume");
            $(this).attr("src", "picture/multimedia.png");
            flag = false;
        } else {
            $('#slides5').cycle("pause");
            $(this).attr("src", "picture/play-button4.png");
            flag = true;
        }
    });

    if ($('body').height()>480) {
        $("#open5").click(function(){
            $("#book5").slideDown(1000);
        });
    }

    $("#close5").click(function(){
        $('#slides5').cycle("pause");
        $("#play5").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book5").slideUp(1000);
    });
    /*/////////////////////////////////////////////*/	
    $('#slides6').cycle({ 
        fx:    'shuffle',
        delay: -4000
    });
    $('#slides6').cycle("pause");

    var flag = true;
    $("#play6").click(function(){
        if (flag) {
            $('#slides6').cycle("resume");
            $(this).attr("src", "picture/multimedia.png");
            flag = false;
        } else {
            $('#slides6').cycle("pause");
            $(this).attr("src", "picture/play-button4.png");
            flag = true;
        }
    });

    if ($('body').height()>480) {
        $("#open6").click(function(){
            $("#book6").slideDown(1000);
        });
    }

    $("#close6").click(function(){
        $('#slides6').cycle("pause");
        $("#play6").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book6").slideUp(1000);
    });
    /*/////////////////////////////////////////////*/	
    $('#slides7').cycle({ 
        fx:    'shuffle',
        delay: -4000
    });
    $('#slides7').cycle("pause");

    var flag = true;
    $("#play7").click(function(){
        if (flag) {
            $('#slides7').cycle("resume");
            $(this).attr("src", "picture/multimedia.png");
            flag = false;
        } else {
            $('#slides7').cycle("pause");
            $(this).attr("src", "picture/play-button4.png");
            flag = true;
        }
    });

    if ($('body').height()>480) {
        $("#open7").click(function(){
            $("#book7").slideDown(1000);
        });
    }

    $("#close7").click(function(){
        $('#slides7').cycle("pause");
        $("#play7").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book7").slideUp(1000);
    });
});
