let oList = document.getElementById('list');

function fn(data) {
    console.log(data);

    let html = '';

    if (data.s.length) {
        for (let i = 0; i < data.s.length; i++) {
            html += `<li><a href="http://www.baidu.com/s?wd=${data.s[i]}">${data.s[i]}</a></li>`;
        }

        oList.innerHTML = html;
    } else {
        oList.style.display = 'none';
    }


}



let q = document.getElementById('q');

let oBtn = document.getElementById('btn');

oBtn.onclick = function() {
    let info = q.value;
    // console.log(info);
    let url = "http://www.baidu.com/s?wd=" + info;
    window.location.assign(url);
}

q.onkeyup = function() {
    oList.style.display = "block";
    if (this.value != "") {
        var script = document.createElement('script');

        script.src = "http://suggestion.baidu.com/su?wd=" + this.value + "&cb=fn";
        document.body.appendChild(script);
    } else {
        oList.style.display = 'none';
    }


};