$(document).ready(function(){
	$(window).scroll(function(){
		var h_header = $(".nav-left").height();      // 获取join-header容器的高度
        var fixed_header = $("#fixed-nav").height();      // 获取join-header容器的高度
	    var vh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 1;
		if(vh >= h_header || vh >= fixed_header){            // 判断垂直滚动距离是否大于等于join-header容器的高度
            $("#fixed-nav").css({"display":"none","position":"fixed","top":"0","z-index":"999"});
			$(".drop-down").css({"display":"block","position":"fixed","top":"0","z-index":"999"});
	    }else{
            $("#fixed-nav").css("display","block");
	    	$(".drop-down").css({"position":"static","display":"none"});
	    }	   
		
        var dis = true;
        // 鼠标进入时触发
        $(".drop").mouseenter(function(){
            $(".fixed-nav").css({"display":"block","position":"fixed","top":"0","z-index":"999"});
            $(".drop-down").css({"display":"none"});
            dis = false;
        })
        // 鼠标离开时触发
        $(".fixed-nav").mouseleave(function(){
            if(dis == false){
                $(".drop-down").css({"display":"block","position":"fixed","top":"0","z-index":"999"});
                $(this).css({"display":"none"});
                dis = true;
            }
        })
	});

	// 鼠标经过元素时显示和隐藏
    var onmouseover_img = ["./img/font/nav-sy-font.png","./img/font/nav-gywm-font.png","./img/font/nav-yxcp-font.png","./img/font/nav-xwdt-font.png","./img/font/nav-jrwm-font.png","./img/font/nav-lxwm-font.png"];
    var onmouseout_img = ["./img/nav-sy-font.png","./img/nav-gywm-font.png","./img/nav-yxcp-font.png","./img/nav-xwdt-font.png","./img/nav-jrwm-font.png","./img/nav-lxwm-font.png"];
    $(".fixed-li").hover(
        function(){
            var index = $(this).index();	// 获取当前元素的索引
            for(var i = 0;i < onmouseover_img.length;i++){
				// 判断当前元素下标是否等于数组下标
                if(index == i){
                    $(".fixed-li").eq(index).children().children()[0].src;		// 通过索引获取列表元素下的子元素的src值
                    $(".fixed-li").eq(index).children().children().attr("src",onmouseover_img[i]);		// 修改列表元素下的子元素的src值
                }
            }
        },
        function(){
            var index = $(this).index();
            for(var i = 0;i < onmouseout_img.length;i++){
                if(index == i){
					// 判断元素中是否包含指定的class
					if($(".fixed-li").eq(index).is(".active")){
                        $(".fixed-li").eq(index).children().children()[0].src;
                    	$(".fixed-li").eq(index).children().children().attr("src",onmouseover_img[i]);
                    }else{
                        $(".fixed-li").eq(index).children().children()[0].src;
                    	$(".fixed-li").eq(index).children().children().attr("src",onmouseout_img[i]);
                    }
                }
            }
        }
    );
});