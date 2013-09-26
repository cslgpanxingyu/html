$(function(){
	toTop();

});

function toTop(){
	alert('ddddddddddddddddddddd');
	var flag = 0;
	var fflag = 0;
		$("#logoT").click(function(){
			$("#stwrap").animate({top:'40%'},200);
			$("#loginbox").css("top","154px");
			$("#loginbox").css("height","0px");
			$("#loginbox").fadeTo("normal", 0);
			$("#denglu").css("visibility","hidden");
			$("#zhuce").css("visibility","hidden");
			flag = 0;
			fflag = 0;

		});
		$(".logbg img").click(function(){
			$("#stwrap").animate({top:'40%'},200);
			$("#loginbox").css("top","154px");
			$("#loginbox").css("height","0px");
			$("#loginbox").fadeTo("normal", 0);
			$("#denglu").css("visibility","hidden");
			$("#zhuce").css("visibility","hidden");
			flag = 0;
			fflag = 0;
		});
		$(".m-userlnks .login").click(function(){
			if (flag == 0 && fflag ==0) {
				$("#stwrap").animate({top:'22.4919%'},200);
				$("#loginbox").css("top","262px");
				$("#loginbox").css("height","328px");
				$("#loginbox").fadeTo("normal", 1);
				$(".arr span").animate({left:'34%'},200);
				$("#denglu").css("visibility","visible");
				flag = 1;
			}
			else{
				if (flag == 1) {
					$("#stwrap").animate({top:'40%'},200);
					$("#loginbox").css("top","154px");
					$("#loginbox").css("height","0px");
					$("#loginbox").fadeTo("normal", 0);
					$("#denglu").css("visibility","hidden");
					flag = 0;
				}
				else{
					if (flag == 0 && fflag ==1) {
						$(".arr span").animate({left:'34%'},200);
						$("#denglu").css("visibility","visible");
						$("#zhuce").css("visibility","hidden");
						flag = 1;
						fflag = 0;
					};

				}
				
				
			}
	    });
	    $(".m-userlnks .reg").click(function(){
			if (fflag == 0 && flag == 0) {
				$("#stwrap").animate({top:'22.4919%'},200);
				$("#loginbox").css("top","262px");
				$("#loginbox").css("height","328px");
				$("#loginbox").fadeTo("normal", 1);
				$(".arr span").animate({left:'48%'},200);
				$("#zhuce").css("visibility","visible");
				fflag = 1;
			}
			else{
				if (fflag == 1) {
					$("#stwrap").animate({top:'40%'},200);
					$("#loginbox").css("top","154px");
					$("#loginbox").css("height","0px");
					$("#loginbox").fadeTo("normal", 0);
					$("#zhuce").css("visibility","hidden");
					fflag = 0;
				}
				else{
					if (fflag == 0 && flag == 1) {
						$(".arr span").animate({left:'48%'},200);
						$("#denglu").css("visibility","hidden");
						$("#zhuce").css("visibility","visible");
						flag = 0;
						fflag = 1;
					};
						
				}
				
			}
	    });
	   
	}
	
		
			
		



