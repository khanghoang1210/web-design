

setInterval(() => {
    var second = 0;
    var minute = 0;
    var hour = 0;
    var d = new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = d.getHours() * 30 + Math.round(minute / 12);
    document.getElementById("sec-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("min-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
}
)

setInterval(() => {
    var hrs = document.getElementById("hrs");
    var min = document.getElementById("min")
    var sec = document.getElementById("sec")
    var current = new Date();
    hrs.innerHTML = current.getHours();
    min.innerHTML = current.getMinutes();
    sec.innerHTML = current.getSeconds();
}, 1000)
