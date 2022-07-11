$(document).ready(function(){
    $(window).scroll(function(){
        var fixed_header = $("#fixed-nav").height();      // 获取join-header容器的高度
	    var vh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(vh >= fixed_header){            // 判断垂直滚动距离是否大于等于join-header容器的高度
            $("#fixed-nav").css({"display":"none","position":"fixed","top":"0","z-index":"999"});
            $(".drop-down").css({"display":"block","position":"fixed","top":"0","z-index":"999"});
			
	    }else{
	    	$("#fixed-nav").css("display","block");
            $(".drop-down").css({"position":"static","display":"none"});
	    }	   
		$(".drop").mouseenter(function(){
			$(".fixed-nav").css({"display":"block","position":"fixed","top":"0","z-index":"999"});
			$(".drop-down").css({"display":"none"});
		})
		$(".fixed-nav").mouseleave(function(){
			$(".drop-down").css({"display":"block","position":"fixed","top":"0","z-index":"999"});
			$(this).css({"display":"none"});
		})
	});
});
