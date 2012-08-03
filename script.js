$(function() {
	if ($(window).width() < 600) {
		$(".nav").hide();
		$(".toggleMenu").click(function(e) {
			$(".nav").toggle();
			e.preventDefault();
		});
		$(".parent > a, .subParent > a").click(function(e){
			$(this).parent().toggleClass("hover");
			e.preventDefault();
		})
	} else {
		$(".parent, .subParent").hover(function(){
			$(this).addClass("hover");
		}, function() {
			$(this).removeClass("hover");
		})
	}
});