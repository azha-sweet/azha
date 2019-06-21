$(function() {　　
    $(".tabbox li").click(function()　　 {　　　　 //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
        　　　　
        $(this).addClass("active").siblings().removeClass("active");　　　　 //获取选中元素的下标
        　　　　
        var index = $(this).index();　　　　
        $(this).parent().siblings().children().eq(index).addClass("active")　　　　.siblings().removeClass("active");　　
    });
});