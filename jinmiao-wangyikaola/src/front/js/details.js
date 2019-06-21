$(function() {
    function getuser() {
        var a = 0;
        var arr = localStorage.getItem("user");
        arr = JSON.parse(arr);
        console.log(arr);
        arr.forEach((item, index) => {
            if (item.onoff === 1) {
                a = item.username;
            }
        })
        return a;
    }


    console.log(getuser());

    function aa() {
        var arr = localStorage.getItem("user");
        console.log(arr);
        arr = JSON.parse(arr);
        arr.forEach((item, index) => {
            item.onoff = 0;
            arr = JSON.stringify(arr);
            localStorage.setItem("user", arr)
        })

    }

    function href() {
        var b = getuser();
        console.log(b)
        var a = document.getElementsByTagName("a");
        a = Array.from(a)

        a.forEach((item) => {
            item.href += `?${b}`;
        })
    }
    href();

    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }
    var id = getUrlParam('Id')
    console.log(id);
    //接收URL中的参数booksId
    $.ajax({
        type: 'get',
        url: '../data/goods.json',
        dataType: 'json',
        success: function(res, status) {
            console.log(status)
            $.each(res, function(idx, val) {
                //根据id获取详情数据
                if (id == val.id) {
                    var str = `<div class="box"><img src="${val.img}"><span id="Myspan"></span></div><div class="b_box"><img src="${val.img}"></div>`;
                    //console.log('index:' + idx);

                }
                $('.mlTop').append(str);

            });
            $("#money").click(function() {
                var arr = localStorage.getItem("user");
                if (!arr) {
                    return
                }
                var abc = 0;
                arr = JSON.parse(arr);
                arr.forEach(function(item, index) {

                    // if (item.onoff === 1) {
                    if (item.goods) {
                        item.goods.forEach(function(item2, index) {
                            if (parseInt(item2.goodsid) == id) {
                                item2.num++;
                                abc = 1;
                            }
                        })
                        if (abc === 0) {
                            item.goods.push({ "goodsid": id, num: 1 });
                        }
                    } else {
                        item.goods = [];
                        item.goods.push({ "goodsid": id, num: 1 });
                    }
                    arr = JSON.stringify(arr);
                    console.log(arr)
                    localStorage.setItem("user", arr)
                        // } else {
                        //     alert("请登录");
                        // }
                })

            })
        }

    });
});


// $(function() {
//     var arr = [];
//     arr = JSON.parse(localStorage.getItem("user"));
//     arr.forEach((item, index) => {
//         if (item.onoff === 1) {
//             var key = item.username;
//             $("#login").text(key);
//             $("#reg").text("退出登录").click(function() {
//                 window.open("./front/login.html")
//             })
//         }

//     });
// });



//获取元素
//事件
//绑定鼠标滑入事件，span显示
//同时右框显示
//鼠标移动时，span移动，右框图片移动
//鼠标离开时，span消失，右图消失
// function Magnifier() {
//     //获取元素
//     this.obox = document.querySelector(".box");
//     this.ospan = document.getElementById("Myspan")
//     this.bigbox = document.querySelector(".b_box");
//     this.bimg = document.querySelector(".b_box img");
//     this.mouse()
// }
// //绑定事件
// Magnifier.prototype.mouse = function() {
//     var that = this;
//     this.obox.onmouseover = function() {
//         that.show()
//     }
//     this.obox.onmouseout = function() {
//         that.hide()
//     }
//     this.obox.onmousemove = function(eve) {
//         var e = eve || window.event;
//         that.move(e)
//     }
// }
// Magnifier.prototype.move = function(e) {
//     //span移动，右框图片移动
//     //  console.log(e.pageX)
//     var l = e.pageX - (this.obox.offsetLeft) - (this.ospan.offsetWidth / 2);
//     var t = e.pageY - (this.obox.offsetHeight) - (this.ospan.offsetHeight / 2) + 70;

//     if (l < 0) l = 0;
//     if (t < 0) t = 0;
//     if (l > this.obox.offsetWidth - this.ospan.offsetWidth) {
//         l = this.obox.offsetWidth - this.ospan.offsetWidth;
//     }
//     if (t > this.obox.offsetHeight - this.ospan.offsetHeight) {
//         t = this.obox.offsetHeight - this.ospan.offsetHeight
//     }
//     this.ospan.style.left = l + "px";
//     this.ospan.style.top = t + "px";



//     this.x = l / (this.obox.offsetWidth - this.ospan.offsetWidth);
//     this.y = t / (this.obox.offsetHeight - this.ospan.offsetHeight);

//     this.bimg.style.left = -this.x * (this.bimg.offsetWidth - this.bigbox.offsetWidth) + "px";
//     this.bimg.style.top = -this.y * (this.bimg.offsetHeight - this.bigbox.offsetHeight) + "px";
// }
// Magnifier.prototype.show = function() {
//     this.ospan.style.display = "block";
//     this.bigbox.style.display = "block";
// }
// Magnifier.prototype.hide = function() {
//         this.ospan.style.display = "none";
//         this.bigbox.style.display = "none";
//     }
// new Magnifier()