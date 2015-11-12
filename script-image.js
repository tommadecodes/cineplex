$(document).ready(function(){

	if (!$('html').hasClass('mobile')) {
		$('#wrapper table td.control').on('mouseenter mouseleave', function(){
			var t = $(this);
			var id = t.attr("id");
			$("#bg1").className = '';
			$('#bg1').toggleClass(id);
		});
	}
});

$(document).ready(function(){

	if (!$('html').hasClass('mobile')) {
		$('#wrapper table td.control').on('mouseenter mouseleave', function(){
			var t = $(this);
			var id = t.attr("id");
			$("#bg2").className = '';
			$('#bg2').toggleClass(id);
		});
	}
});

$(document).ready(function(){

	if (!$('html').hasClass('mobile')) {
		$('#wrapper table td.control').on('mouseenter mouseleave', function(){
			var t = $(this);
			var id = t.attr("id");
			$("#bg3").className = '';
			$('#bg3').toggleClass(id);
		});
	}
});

$(document).ready(function(){

	if (!$('html').hasClass('mobile')) {
		$('#wrapper table td.control').on('mouseenter mouseleave', function(){
			var t = $(this);
			var id = t.attr("id");
			$("#bg4").className = '';
			$('#bg4').toggleClass(id);
		});
	}
});

$(document).ready(function(){

	if (!$('html').hasClass('mobile')) {
		$('#wrapper table td.control').on('mouseenter mouseleave', function(){
			var t = $(this);
			var id = t.attr("id");
			$("#bg5").className = '';
			$('#bg5').toggleClass(id);
		});
	}
});