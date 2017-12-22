// Made by Rosu Lucian Adrian - http://alurosu.com/

var y;
var scrolling = false;
var doResult = false;

function jqPTR(id, callback) {
	
  $('#' + id).on('vmousemove', function(e) {
			if ($('body').scrollTop() == 0 && e.pageY > y && scrolling) {	
				var dif = $('#ptr .loading'). height() - (e.pageY - y);
				if (dif >= 0) {
					doResult = false;
					dif = '-' + dif + 'px';
					$('#ptr .loading').css({marginTop: dif});
				} else {
					doResult = true;
					$('#ptr .loading').css({marginTop: '0px'});
				}
				
				e.preventDefault();
			}
	})
	.on('vmousedown', function(e) {
		scrolling = true;
		y = e.pageY;
	})
	.on('vmouseup', function(e) {
		scrolling = false;
		if (doResult) {
			doResult = false;
			y = $(this).height();
			$('#ptr .loading').html('Loading..');
			
			callback();
		} else jqPTR_refresh();
	});
}

function jqPTR_refresh() {
	var dif = '-' + ($('#ptr .loading').height() + 3) + 'px';
	$('#ptr .loading').animate({marginTop: dif}, function(){$(this).html('Pull to refresh.')});
}
