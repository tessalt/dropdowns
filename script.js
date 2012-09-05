$(function() {
	if ($(window).width() < 768) {
		$(".toggleMenu").css("display", "inline-block");
		$(".nav").hide();
		$(".toggleMenu").click(function() {
			$(".nav").toggle();
		});
		$(".nav li a").click(function(){
			$(this).parent("li").toggleClass("hover");
		});
	} else {
		$(".nav li").hover(function() {
			$(this).addClass("hover");
		}, function() {
			$(this).removeClass("hover");
		})
	}
});