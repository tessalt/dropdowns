var adjustMenu = function() {

	$(".toggleMenu").click(function(e) {
		// can't use toggle because we don't know original state
		e.preventDefault();
		if ($(".nav").css("display") === "none") {
			$(".nav").show();
		} else {
	 		$(".nav").hide();
	 	}
	});
	
	if ($(window).width() < 768) {
		$(".toggleMenu").css("display", "inline-block");
		$(".nav").hide();
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a").unbind('click').bind('click', function() {
			// must be attached to anchor element to prevent bubbling
			$(this).parent("li").toggleClass("hover");
		});
	} 

	else if ($(window).width() >= 768){
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
};


$(window).bind('load resize orientationchange', function() {
	adjustMenu();
});