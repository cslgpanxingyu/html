$(function(){
	testt();
	search();
});


function smoothscroll(id) {
	var section = $(id);
	var sectionOffset = section.offset().top;
	$('html,body').animate({scrollTop:sectionOffset}, 500);
}
	
function testt(){
	$('#main_nav a').click(function(e) {
		e.preventDefault();
		var hash = '#' + $(this).attr('href');
		smoothscroll(hash);
	});
}

// Store locator
function search(){
	var lastEntry = "";
	var zipOrigin = $('#zip_origin');
	var locationCount = $('#location_list li').length;
	$('#no_match').hide();
	
	zipOrigin.keyup(function(event) {
		var zipVal = $('#zip_origin').val();
		$('#no_match').hide();
		if (zipVal == '') {
			$('#location_list li').show();
		} else if(zipVal != lastEntry) {       
			var zip = zipOrigin.val();
			var matched = $("#location_list li:not([data-zip*='" + zip + "'])");
			if (matched.length < locationCount) {
				matched.hide();
			} else {
				$('#location_list li').hide();
				$('#no_match').show();
			}
		}
		lastEntry = zipOrigin.val()
	});
}	
	