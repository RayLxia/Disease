/**
 * Created by Administrator on 2016/12/16.
 */
$(function () {
    $(".last-tab .f-ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".last-tab .s-ul").stop().animate({"top": $(this).index() * (-174)}, 800)
    });
    var speed = -325;
    var index = 0;
    var nowDis = 0
    var len = $(".main-r-m ul").children().length;
    console.log(len)
    function getShow() {
        return $(".main-r-m ul li.show").index();
    }
    $(".main-r-m ul li:nth-child(1)").addClass("show");
    $(".pre").click(function () {
        index = getShow() - 1;
        if(getShow()== 0 || index == 0 ){
            $(".main-r-m ul li:nth-child(1)").addClass("show").siblings().removeClass("show");
            $(".main-r-m ul").stop().animate({"left":0}, 800);
        }else if (index > 0 && index < len-1) {
            $(".pre").bind("click");
            $(".main-r-m ul li:nth-child(" + (index+1) + ")").addClass("show").siblings().removeClass("show");
            $(".main-r-m ul").stop().animate({"left": nowDis + speed*(index)}, 800);
        } else if (index == 0) {
            $(".tab-3-ul li:nth-child(1)").addClass("show").siblings().removeClass("show");
            $(".pre").unbind("click");
        }
    })
    $(".next").click(function () {
        index = getShow() + 1;
        if (index >= 0 && index < len) {
            $(".next").bind("click");
            $(".main-r-m ul li:nth-child(" + (index + 1) + ")").addClass("show").siblings().removeClass("show");
            $(".main-r-m ul").stop().animate({"left": nowDis + speed*(index)}, 800);
        } else if (index == (len-1)) {
            $(".tab-3-ul li:nth-child("+len+")").addClass("show").siblings().removeClass("show");
            $(".tab-3-main .next").unbind("click");
        }
    })
})