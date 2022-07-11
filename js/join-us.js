$(document).ready(function(){  
    $(".point-li").click(function(){
        $(this).siblings(this).removeClass("point-ativan");     // 删除其他兄弟元素的样式
        $(this).addClass("point-ativan");       // 添加当前元素的样式
    });
    // 固定侧边锚点导航
    $(window).scroll(function(){
		var h_header = $(".join-header").height();      // 获取join-header容器的高度
        var vh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(vh >= h_header){            // 判断垂直滚动距离是否大于等于join-header容器的高度
			$(".join-point").css("position","fixed").css("top","0");
        }else{
        	$(".join-point").css("position","static");
        }
        console.log(vh);
        // 锚点样式切换
        if(vh >= 2715){
            $(".point-li").siblings(this).removeClass("point-ativan");     // 删除其他兄弟元素的样式
            $("#operation-bg").addClass("point-ativan");       // 添加当前元素的样式
        }else if(vh >= 2342){
            $(".point-li").siblings(this).removeClass("point-ativan");     // 删除其他兄弟元素的样式
            $("#csgcs-bg").addClass("point-ativan");       // 添加当前元素的样式
        }else if(vh >= 1973){
            $(".point-li").siblings(this).removeClass("point-ativan");     // 删除其他兄弟元素的样式
            $("#plan-bg").addClass("point-ativan");       // 添加当前元素的样式
        }else if(vh >= 1501){
            $(".point-li").siblings(this).removeClass("point-ativan");     // 删除其他兄弟元素的样式
            $("#art-bg").addClass("point-ativan");       // 添加当前元素的样式 
        }else if(vh >= 1100){
            $(".point-li").siblings(this).removeClass("point-ativan");     // 删除其他兄弟元素的样式
            $("#program-bg").addClass("point-ativan");       // 添加当前元素的样式
        }else{
            $("#unlimited-bg").addClass("point-ativan");       // 添加当前元素的样式
            $("#program-bg").removeClass("point-ativan");     // 删除元素的样式
        }
    });
});
