/**
 * Created by Administrator on 2016/12/14.
 */
$(function () {
    $(".hd-banner-cot").on("mouseenter",function () {
        $(".jt-cot").stop().fadeIn(800);
    });
    $(".hd-banner-cot").on("mouseleave",function () {
        $(".jt-cot").stop().fadeOut(800);
    });
    function getBannerBoxMove() {
        return $(window).width();
    };
    var moveNum = 0;
    $(".jt-fr-po").click(function () {
        if(moveNum>1){
            moveNum=0;
        }else{
            moveNum++;
        }
        $(".hd-banner-cot-box").stop().animate({"left":-getBannerBoxMove()*moveNum});
    });
    $(".jt-fl-po").click(function () {
        if(moveNum<=0){
            moveNum=2;
        }else{
            moveNum--;
        }
        $(".hd-banner-cot-box").stop().animate({"left":-getBannerBoxMove()*moveNum});
    });
    $(".title1 li").hover(function () {
        var lineLeft = ["7px", "128px"]
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab-1 .line").stop().animate({"left": lineLeft[$(this).index()]}, 800);
        $(".ul-box1 ul.clearfix").stop().animate({"left": -$(this).index() * $(".ul-box1 ul li").width()}, 800);
    });
    $(".lunbo-squera li").hover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".lunbo-main").stop().animate({"left": -$(this).index() * 298}, 800)
    });
    $(".tab-2-ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".tab-2-ulBox > ul").stop().animate({"left": -$(this).index() * 838}, 800);
    });
    $(".tab-2-ul li:last-child").unbind("click");
    $("#index-mainBody .main-l .main-l-t .tab-1 .line").width($("#index-mainBody .main-l .main-l-t .tab-1 .title1 .fl").width());
    // var distance = ["-470","-306","-99"];
    var infoDis = 0;
    var bigDis = 0;
    var smallDis = 0;
    var index = 0;
    var speed1 = -470;
    var speed2 = -306;
    var speed3 = -99;

    function getIndex() {
        return $(".tab-3-ul li.current").index();
    }

    function moveAnimate(index) {
        $(".experts-info").stop().animate({"left": index * speed1}, 800);
        $(".experts-big").stop().animate({"left": index * speed2}, 800);
        $(".experts-small").stop().animate({"left": index * speed3}, 800);
    }

    $(".tab-3-ul li").click(function () {
        index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        moveAnimate(index);
        // $(".tab-3-ul li:first-child").addClass("current");
    });

    $(".tab-3-main .next").click(function () {
        index = getIndex() + 1;
        if (index >= 0 && index < 10) {
            $(".tab-3-main .next").bind("click");
            $(".tab-3-ul li:nth-child(" + (index + 1) + ")").addClass("current").siblings().removeClass("current");
            $(".experts-info").stop().animate({"left": infoDis + speed1 * (index)}, 800);
            $(".experts-big").stop().animate({"left": bigDis + speed2 * (index)}, 800);
            $(".experts-small").stop().animate({"left": smallDis + speed3 * (index)}, 800);
        } else if (index == 9) {
            $(".tab-3-ul li:nth-child(10)").addClass("current").siblings().removeClass("current");
            $(".tab-3-main .next").unbind("click");
        }

    });
    $(".tab-3-main .pre").click(function () {
        index = getIndex() - 1;
        if(getIndex()==0 || index == 0 ){
            $(".tab-3-ul li:nth-child(1)").addClass("current").siblings().removeClass("current");
            $(".experts-info").stop().animate({"left":0}, 800);
            $(".experts-big").stop().animate({"left":0}, 800);
            $(".experts-small").stop().animate({"left": 0}, 800);
        }else if (index > 0 && index < 9) {
            $(".tab-3-main .pre").bind("click");
            $(".tab-3-ul li:nth-child(" + (index+1) + ")").addClass("current").siblings().removeClass("current");
            $(".experts-info").stop().animate({"left": infoDis + speed1*(index)}, 800);
            $(".experts-big").stop().animate({"left": bigDis + speed2*(index)}, 800);
            $(".experts-small").stop().animate({"left": smallDis + speed3*(index)}, 800);
        } else if (index == 0) {
            $(".tab-3-ul li:nth-child(1)").addClass("current").siblings().removeClass("current");
            $(".tab-3-main .pre").unbind("click");
        }
    });
    $(".tab-3-ul li:last-child").unbind("click");
    // $(".tab-3-ul li:first-child").unbind("click");
    $(".last-tab .f-ul li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".last-tab .s-ul").stop().animate({"top": $(this).index() * (-174)}, 800)
    })
})