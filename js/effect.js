window.onload = function(){
	$(document).ready(function(){
		$(".loader_icon").fadeOut(1000,function(){
			$(".left-slide,.right-slide").animate({
				"width":"0%"
			},500,function(){
				$(".loader_container").fadeOut();
			});
		});
	});
}