$(document).ready(function(){
	// meny
	var meny = Meny.create({
		// The element that will be animated in from off screen
		menuElement: document.querySelector( '.meny' ),

		// The contents that gets pushed aside while Meny is active
		contentsElement: document.querySelector( '.contents' ),

		// The alignment of the menu (top/right/bottom/left)
		position: 'bottom',

		// The height of the menu (when using top/bottom position)
		height: 50,

		// The width of the menu (when using left/right position)
		width: 100,

		// The angle at which the contents will rotate to.
		angle: 30,

		// The mouse distance from menu position which can trigger menu to open.
		threshold: 40,

		// Width(in px) of the thin line you see on screen when menu is in closed position.
		overlap: 15,

		// The total time taken by menu animation.
		transitionDuration: '0.5s',

		// Transition style for menu animations
		transitionEasing: 'ease',

		// Gradient overlay for the contents
		gradient: 'rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)',

		// Use mouse movement to automatically open/close
		mouse: true,

		// Use touch swipe events to open/close
		touch: true
	});
	
	// page
	// basic paging logic to demo the buttons
	var pr = document.querySelector( '.paginate.left' );
	var pl = document.querySelector( '.paginate.right' );

	pr.onclick = slide.bind( this, -1 );
	pl.onclick = slide.bind( this, 1 );

	var index = 0, total = 5;

	function slide(offset) {
	  index = Math.min( Math.max( index + offset, 0 ), total - 1 );

	  document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

	  pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
	  pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	}

	slide(0);
	
	$("button.paginate.left").click(function(){
		var con = "#con" + (index + 1);
		$("html, body").animate({
			scrollLeft: $(con).offset().left
		},"slow");
	});
	
	$("button.paginate.right").click(function(){
		var con = "#con" + (index + 1);
		$("html, body").animate({
			scrollLeft: $(con).offset().left
		},"slow");
	});
	
	// click
	$("#nav1").click(function(){
		$("html, body").animate({
			scrollLeft: $("#con1").offset().left
		},"slow");
		index = 0;
		document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
		pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
		pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	});
	$("#nav2").click(function(){
		$("html, body").animate({
			scrollLeft: $("#con2").offset().left
		},"slow");
		index = 1;
		document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
		pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
		pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	});
	$("#nav3").click(function(){
		$("html, body").animate({
			scrollLeft: $("#con3").offset().left
		},"slow");
		index = 2;
		document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
		pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
		pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	});
	$("#nav4").click(function(){
		$("html, body").animate({
			scrollLeft: $("#con4").offset().left
		},"slow");
		index = 3;
		document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
		pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
		pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	});
	$("#nav5").click(function(){
		$("html, body").animate({
			scrollLeft: $("#con5").offset().left
		},"slow");
		index = 4;
		document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
		pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
		pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
	});
	
	// keyup
	document.addEventListener( 'keyup', function( event ) {
		if( event.keyCode === 39 ) {
			index = Math.min( Math.max( index + 1, 0 ), total - 1 );

		    document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

		    pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
		    pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
			
			var con = "#con" + (index + 1);
			$("html, body").animate({
				scrollLeft: $(con).offset().left
			},"slow");
		}
		if( event.keyCode === 37 ) {
			index = Math.min( Math.max( index - 1, 0 ), total - 1 );

		    document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

		    pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
		    pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
			
			var con = "#con" + (index + 1);
			$("html, body").animate({
				scrollLeft: $(con).offset().left
			},"slow");
		}
	}, false );
	
	// touch
	document.addEventListener( 'touchstart', function( event ) {
		touchConsumed = false;
		lastX = event.touches[0].clientX;
	}, false );

	document.addEventListener( 'touchmove', function( event ) {
		event.preventDefault();

		if( !touchConsumed ) {
			if( event.touches[0].clientX > lastX + 10 ) {
				
				index = Math.min( Math.max( index - 1, 0 ), total - 1 );

				document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

				pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
				pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
				
				var con = "#con" + (index + 1);
				$("html, body").animate({
					scrollLeft: $(con).offset().left
				},"slow");
				
				touchConsumed = true;
			}
			else if( event.touches[0].clientX < lastX - 10 ) {
				
				index = Math.min( Math.max( index + 1, 0 ), total - 1 );

				document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

				pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
				pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
				
				var con = "#con" + (index + 1);
				$("html, body").animate({
					scrollLeft: $(con).offset().left
				},"slow");
				
				touchConsumed = true;
			}
		}
	}, false );
});
