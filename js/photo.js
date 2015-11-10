$(document).ready(function(){
    if( navigator.userAgent.match( /firefox/gi ) ) {
        [].slice.call( document.querySelectorAll( '.thumb img' ) ).forEach(function( el ) { el.style.boxShadow = 'none'; });
    }

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

    $("#open1").click(function(){
        $("#book1").slideDown(1000);
    });

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

    $("#open2").click(function(){
        $("#book2").slideDown(1000);
    });

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

    $("#open3").click(function(){
        $("#book3").slideDown(1000);
    });

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

    $("#open4").click(function(){
        $("#book4").slideDown(1000);
    });

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

    $("#open5").click(function(){
        $("#book5").slideDown(1000);
    });

    $("#close5").click(function(){
        $('#slides5').cycle("pause");
        $("#play5").attr("src", "picture/play-button4.png");
        flag = true;
        $("#book5").slideUp(1000);
    });
});
