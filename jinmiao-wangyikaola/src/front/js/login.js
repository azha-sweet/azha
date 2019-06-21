var name1 = document.getElementById("name");
var pass1 = document.getElementById("password");
var register = document.getElementById("register");

var name2 = document.getElementById("name2");
var pass2 = document.getElementById("password2");
var login = document.getElementById("login");

var changeReg = document.getElementById("changeReg");
var changeLogin = document.getElementById("changeLogin");

var span1 = document.getElementsByClassName("login")[0];
var span2 = document.getElementsByClassName("register")[0];

var mes = document.getElementById("messge");
var mes2 = document.getElementById("messge2");

var userOnOff = passOnOff = false;
var userOnOff2 = passOnOff2 = false;

changeReg.onclick = function() {
    span2.style.display = "flex";
    span1.style.display = "none";
}

changeLogin.onclick = function() {
    span2.style.display = "none";
    span1.style.display = "flex";
}


//注册验证
name1.onblur = function() {
    // 5-12位 英文字母下划线 用户名第一位必须大写
    var reg = /^[A-Z|0-9|_][\w]{4,11}$/;
    if (reg.test(this.value)) {
        mes.innerHTML = "用户名注册成功";
        mes.style.color = "green";
        userOnOff = true;
    } else {
        mes.innerHTML = "5-12位 英文字母下划线 用户名第一位必须大写";
        mes.style.color = "red";
        userOnOff = false;
    }
}

pass1.onblur = function() {
    //密码： 6-10位  英文字母数字下划线
    var reg = /^[\w]{6,10}$/;
    if (reg.test(this.value)) {
        mes.innerHTML = "密码输入成功";
        mes.style.color = "green";
        passOnOff = true
    } else {
        mes.innerHTML = "密码输入失败，长度为6-10位";
        mes.style.color = "red";
        passOnOff = false
    }
}

register.onclick = function() {
    if (userOnOff && passOnOff) {
        span2.style.display = "none";
        span1.style.display = "flex";
        if (!localStorage.getItem("user")) {
            localStorage.setItem("user", `[{"username": "${name1.value}", "password": "${pass1.value}","onoff":"0"}]`)
            alert("注册成功");
        } else {
            var off100 = 0;
            var arr = localStorage.getItem("user");
            arr = JSON.parse(arr);
            arr.forEach((item, index) => {
                if (name1.value === item.username) {
                    alert("该账号已被使用")
                    off100 = 1;
                }
            })
            if (off100 !== 1) {
                arr.push({ "username": name1.value, "password": pass1.value, "onoff": 0 });
                localStorage.setItem("user", JSON.stringify(arr));
                alert("注册成功")
            }
        }
        // localStorage.setItem("pass",passWord.value)
    } else {
        alert("注册失败")
    }
}

// var storage = window.localStorage;
// console.log(storage);




// console.log(key, value);

//登录验证
// name2.onblur = function() {
//     if (this.value === key) {
//         mes2.innerHTML = "用户名验证成功";
//         mes2.style.color = "green";
//         userOnOff2 = true;
//     } else {
//         mes2.innerHTML = "用户名不存在";
//         mes2.style.color = "red";
//         userOnOff2 = false;
//     }
// }

// pass2.onblur = function() {

//     if (this.value === value) {
//         mes2.innerHTML = "密码验证成功";
//         mes2.style.color = "green";
//         passOnOff2 = true;
//     } else {
//         mes2.innerHTML = "密码验证失败";
//         mes2.style.color = "red";
//         passOnOff2 = false;
//     }
// }

login.onclick = function() {
    if (userOnOff2 && passOnOff2) {
        alert("登录成功");
        window.open("../index.html");
    }
    var arr = [];
    arr = JSON.parse(localStorage.getItem("user"));
    arr.forEach((item, index) => {
        item.onoff = 0;
        if (name2.value === item.username && pass2.value === item.password) {
            item.onoff = 1;
            alert("登录成功,3秒跳转");
            setTimeout(function() {
                window.location.href = '../index.html';
            }, 3000);
        }
    });
    localStorage.setItem("user", JSON.stringify(arr));
}