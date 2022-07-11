$(document).ready(function(){
	$(window).scroll(function(){
		var h_header = $(".nav-left").height();      // 获取join-header容器的高度
	    var vh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(vh >= h_header){            // 判断垂直滚动距离是否大于等于join-header容器的高度
			$(".drop-down").css({"display":"block","position":"fixed","top":"0","z-index":"999","background-position":"center"});
	    }else{
	    	$(".drop-down").css({"position":"static","display":"none"});
	    }	   
		$(".drop").onmouseover(function(){
			$(".fixed-nav").css({"display":"block","position":"fixed","top":"0","z-index":"999"});
		})
	});
});