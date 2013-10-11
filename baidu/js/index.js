$(function(){
	showbglayer();
	showaddpnl();
	changemusic();
	nameshow();
	changebgimg();
	setbgimg();
	setopacity();
});



function showbglayer(){
	$("#s-bg-entrance a").click(function(){
		$("#s-bg-layer").show();
	});
	$("#s-bg-close").click(function(){
		$("#s-bg-layer").hide();
	});
}

function showaddpnl(){
	$(".add").click(function(){
		var flag = $(this).attr("openflag");
		if (flag == "no") {
		$("#s-menu-addpnl").animate({height:'223px',
			width:'550px',
			opacity:'1',
			 },500);
		$("#effect").css("opacity","0.5");
	    $(this).attr("openflag","yes");
		}else{
			$("#s-menu-addpnl").animate({height:'0',
				width:'0',
				opacity:'0',
		       },500);
			$("#effect").css("opacity","0");
		    $(this).attr("openflag","no");
		
		}})
	$("#effect").click(function(){
		$("#s-menu-addpnl").animate({height:'0',
				width:'0',
				opacity:'0',
		       },500);
			$("#effect").css("opacity","0");
		    $(this).attr("openflag","no");
		});
}

function changemusic(){
	$("#change").click(function(){
		var changebz =$(this).attr("openflag");
		if (changebz == "no") {
			$(".fm-wrap").animate({top:'0'},500);
			$(this).attr("openflag","yes");
		}else{
			$(".fm-wrap").animate({top:'-205'},500);
			$(this).attr("openflag","no");
		}
	});
}

function nameshow(){
	$(".s-bg-allimgs li").hover(
		function(){
			$(this).find(".img-name").animate({bottom:'3px'},200)
		;},
		function(){
			$(this).find(".img-name").animate({bottom:'-15px'},200)
		}


	);
}


function changebgimg(){
	var index = 0;
	var position = 0;
	$("#nxt-pg").click(function(){
		index = index - 1;
		if (index > -5) {$(".s-bg-allimgs").animate({marginLeft:index * 876 + "px"},500);};
		position = index * 876;
	});
	$("#pre-pg").click(function(){
		var flag = (index + 1)/index;
		if (position < 0) {$(".s-bg-allimgs").animate({marginLeft:position*flag + "px"},500);};
		index = index +1;
	});

}

function setbgimg(){
	$(".s-bg-allimgs li").click(function(){
		var flag = $(this).attr("data-index");
		$.each($(".s-bg-allimgs li"),function(){
				var flagy = $(this).attr("data-index");
				if (flag == flagy) {
					$(this).find(".add-tag").css("visibility","visible");
				}else{
					$(this).find(".add-tag").css("visibility","hidden");
				}
			});
		
	});
	$(".s-bg-noimg").click(function(){
		$(".add-tag").css("visibility","hidden");
	});
}

function setopacity(){
	var leftlen = document.getElementById("s_bg_ajust_btn").offsetLeft;
	$(".s-bg-ajust-btn").mousedown(function(e){
		var positionX = e.clientX;
		$(".s-bg-ajust-bar").mousemove(function(o){
			var posX = o.clientX;
			var leftX = posX - positionX;
			var leftNow = leftlen + leftX;
			if (leftNow>-1 && leftNow<100) {
				$(".s-bg-ajust-btn").css("left",leftNow + "px");
			};
					
		});
		
	});
	
}