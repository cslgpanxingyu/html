$(function(){

	testt();
		$(".myTest").click(function(){
		var flag = $(this).attr("openflag");
		if (flag == "no") {
			$(this).css("background-color","#444");
			$(this).attr("openflag","yes");
		}else{
			$(this).css("background-color","#eee");
			$(this).attr("openflag","no");
		}
	});
});



function testt(){
	$(".myTest").slideDown("slow");
}