var main = function() {
	$('.days').countdown('2014/12/8', function(event) {
		var $this = $(this).html(event.strftime(''
			+ '<span class="num num-d">%d</span> '));
	});
		
	$('.hours').countdown('2014/12/8', function(event) {
		var $this = $(this).html(event.strftime(''
			+ '<span class="num num-h">%H</span> '));
	});
	
	$('.mins').countdown('2014/12/8', function(event) {
		var $this = $(this).html(event.strftime(''
			+ '<span class="num num-m">%M</span> '));
	});
	
	$('.secs').countdown('2014/12/8', function(event) {
		var $this = $(this).html(event.strftime(''
			+ '<span class="num num-s">%S</span> '));
	});
	
	$(".request").click(function() {
		$(".modal-container").show();
		setTimeout(function() {
			$(".modal-container").addClass("modal-container-active");
			$(".modal-box").addClass("modal-box-active");
			$("body").addClass("no-scroll");
		}, 100);
	});
	
	$('.button').click(function() {
		if (!$('.first').val()) {
			$('.modal-alert').text("Please enter all information!");
			return;
		}
		if (!$('.last').val()) {
			$('.modal-alert').text("Please enter all information!");
			return;
		}
		if (!$('.pass').val()) {
			$('.modal-alert').text("Please enter all information!");
			return;
		}
		if (!$('.hs-input').val()) {
			$('.modal-alert').text("Please enter all information!");
			return;
		}
		$(".modal-container").removeClass("modal-container-active");
		$(".modal-box").removeClass("modal-box-active");
		$("body").removeClass("no-scroll");
		$('.name').val("");
		$('.pass').val("");
		$('.hs-input').val("");	

		setTimeout(function() {
			$(".modal-container").hide();
		}, 300);
	});
	
	$('.modal-overlay').click(function() {
		
		$(".modal-container").removeClass("modal-container-active");
		$(".modal-box").removeClass("modal-box-active");
		$("body").removeClass("no-scroll");
		setTimeout(function() {
			$(".modal-container").hide();
		}, 300);
	});
		
}

$(document).ready(main);