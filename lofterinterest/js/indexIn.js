$(function(){
	ceshi();

});

function ceshi(){
	$(".chosebox").click(function(){
		var flag = $(this).attr("openflag");
		var flagx = $(this).attr("slid");
		if (flag == "no") {
			$(this).find(".icn").css("visibility","visible");
			$.each($(".item"),function(){
				var flagy = $(this).attr("slid");
				if (flagx == flagy) {
					$(this).slideDown("normal");
				};
			});
			$(this).attr("openflag","yes")
		}else{
			$(this).find(".icn").css("visibility","hidden");
			$.each($(".item"),function(){
				var flagy = $(this).attr("slid");
				if (flagx == flagy) {
					$(this).slideUp("normal");
				};
			});
			$(this).attr("openflag","no");
		}
	});
}		
			
		



