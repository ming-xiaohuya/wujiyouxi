$(document).ready(function(){
    // 鼠标经过元素时显示和隐藏
    var onmouseover_img = ["./img/font/nav-sy-font.png","./img/font/nav-gywm-font.png","./img/font/nav-yxcp-font.png","./img/font/nav-xwdt-font.png","./img/font/nav-jrwm-font.png","./img/font/nav-lxwm-font.png"];
    var onmouseout_img = ["./img/nav-sy-font.png","./img/nav-gywm-font.png","./img/nav-yxcp-font.png","./img/nav-xwdt-font.png","./img/nav-jrwm-font.png","./img/nav-lxwm-font.png"];
    $(".nav-li").hover(
        function(){
            var index = $(this).index();        // 获取当前元素的索引
            for(var i = 0;i < onmouseover_img.length;i++){
                // 判断当前元素下标是否等于数组下标
                if(index == i){
                    $(".nav-li").eq(index).children().children()[0].src;        // 通过索引获取列表元素下的子元素的src值
                    $(".nav-li").eq(index).children().children().attr("src",onmouseover_img[i]);        // 修改列表元素下的子元素的src值
                }
            }
        },
        function(){
            var index = $(this).index();
            for(var i = 0;i < onmouseout_img.length;i++){
                // 判断当前元素下标是否等于数组下标
                if(index == i){
                    // 判断元素中是否包含指定的class
                    if($(".nav-li").eq(index).is(".active")){
                        $(".nav-li").eq(index).children().children()[0].src;
                        $(".nav-li").eq(index).children().children().attr("src",onmouseover_img[i]);
                    }else{
                        $(".nav-li").eq(index).children().children()[0].src;
                        $(".nav-li").eq(index).children().children().attr("src",onmouseout_img[i]);
                    }
                }
            }
        }
    );
    // 鼠标经过元素时显示和隐藏
    $(".video").hover(
        function(){
            $(".video-center").css("display","block"); 
        },
        function(){
            $(".video-center").css("display","none"); 
        }
    );
    var video = true;   // 自定义一个条件变量
    // 点击时改变背景显示的位置
    $(".video-center").click(function(){
        if(video == true){
            $(this).css("background-position","left");
            $("video").trigger('pause');    // 暂停播放
            video = false;
        }else{
            $(this).css("background-position","right");
            $('video').trigger('play');     // 开始播放
            video = true;
        }
    });
});   