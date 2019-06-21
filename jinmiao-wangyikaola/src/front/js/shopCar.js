var id = localStorage.getItem("user");

function getuser() {
    var arr2 = [];
    var arr = localStorage.getItem("user");
    if (!arr) {
        return
    }
    arr = JSON.parse(arr);
    arr.forEach((item) => {
        if (item.onoff === 1) {
            item.goods.forEach((item) => {
                display(item.goodsid, item.num)
            });
        }
    });
    return arr2;
}

function display(a, b) {
    ajaxaa(a, b);
}


getuser();



function ajaxaa(a, b) {


    $.ajax({
        type: 'get',
        url: '../data/goods.json',
        dataType: 'json',
        success: function(res, status) {
            $.each(res, function(idx, val) {
                //根据id获取详情数据
                if (a == val.id) {
                    var str = ` <tr>
                <td>${val.describe}</td>
                <td>${val.pirce}</td>
                <td>${val.shop}</td>
                <td>${b}</td>
                <td id="btn">
                    <button id="less">-</button>
                    <button id="add">+</button>
                </td>
            </tr>`;
                    //console.log('index:' + idx);

                }
                $('#table').append(str);

            });

        }
    });

}
// class Car {
//     constructor() {
//         this.tbody = document.querySelector("table");

//         this.url = "../../data/goods.json";

//         this.init();
//         this.addEvent();
//     }
//     init() {
//         var that = this;
//         ajax({
//             url: this.url,
//             ok: function(res) {
//                 //   console.log(res);
//                 that.res = JSON.parse(res);

//                 that.getId();
//             }
//         })
//     }

//     getId() {

//     }
//     display() {
//         var str = "";
//         for (var i = 0; i < this.res.length; i++) {
//             for (var j = 0; j < this.goods.length; j++) {
//                 if (this.res[i].goodsId == this.goods[j].id) {
//                     str += `<tr index="${this.goods[j].id}">
//                             <td><input type="checkbox"/></td>
//                             <td><img src="${this.res[i].url}"/></td>
//                             <td>${this.res[i].data}</td>
//                             <td>${this.res[i].price}</td>
//                             <td><input type="number" value="${this.goods[i].num}" min=1 /></td>
//                             <td><span class="delete">删除</span></td>
//                         </tr>`
//                 }
//             }
//         }
//         this.tbody.innerHTML = str;
//     }

//     addEvent() {
//         var that = this;
//         this.tbody.addEventListener("click", function(eve) {
//             var e = eve || window.event;
//             var target = e.target || e.srcElement;

//             if (e.target.className == "delete") {
//                 that.id = e.target.parentNode.parentNode.getAttribute("index");
//                 e.target.parentNode.parentNode.remove();
//                 that.changeCookie(function(i) {
//                     that.goods.splice(i, 1);
//                 })
//             }
//         })

//         this.tbody.addEventListener("input", function(eve) {
//             var e = eve || window.event;
//             var target = e.target || e.srcElement;

//             if (e.target.type == "number") {
//                 that.id = e.target.parentNode.parentNode.getAttribute("index");

//                 that.changeCookie(function(i) {
//                     that.goods[i].num = e.target.value;
//                 });
//             }
//         })

//     }
//     changeCookie(callback) {
//         for (var i = 0; i < this.goods.length; i++) {
//             if (this.goods[i].id == this.id) {
//                 callback(i);
//                 break;
//             }
//         }
//         setCookie("shangpin", JSON.stringify(this.goods))
//     }
// }
// new Car;