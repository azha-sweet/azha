var hous = document.getElementById("hou");
var mins = document.getElementById("min");
var sec = document.getElementById("sec");


function countDown(times) {


    var timer = null;
    timer = setInterval(function() {
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0; //时间默认值
        if (times > 0) {
            day = Math.floor(times / (60 * 60 * 24));
            hour = Math.floor(times / (60 * 60)) - (day * 24);
            minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (day <= 9) day = '0' + day;
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;


        hous.innerHTML = hour;
        mins.innerHTML = minute;
        sec.innerHTML = second;
        //
        // console.log(day + "天:" + hour + "小时：" + minute + "分钟：" + second + "秒");
        times--;
    }, 1000);
    if (times <= 0) {
        clearInterval(timer);
    }


}

countDown(30000);