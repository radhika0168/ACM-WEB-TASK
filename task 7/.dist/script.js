var btn = document.getElementById("btn"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    resultSec = document.getElementById("seconds"),
    nodSec = 0,
    resSec = parseInt(nodSec, 10),
    resultMin = document.getElementById("minutes"),
    nodMin = 0,
    resMin = parseInt(nodMin, 10),
    resultHrs = document.getElementById("hours"),
    nodHrs = 0,
    resHrs = parseInt(nodHrs, 10),
    intervalID,
    counter4draw = resSec,
    counter4drawmin = 0,
    canvas = document.getElementById("mycanvas"),
    context = canvas.getContext("2d"),
    canvas2 = document.getElementById("mycanvas2"),
    context2 = canvas2.getContext("2d"),
    canvas4 = document.getElementById("mycanvas4"),
    context4 = canvas4.getContext("2d"),
    canvas3 = document.getElementById("mycanvas3"),
    context3 = canvas3.getContext("2d"),
    canvas6 = document.getElementById("mycanvas6"),
    context6 = canvas6.getContext("2d"),
    canvas5 = document.getElementById("mycanvas5"),
    context5 = canvas5.getContext("2d"),
    dynamicCircle = {lineWidth : 11, centerX : 185, centerY : 185, ray : 124, pathStart : 0, inverse : false, strokeStyle : "#4CE8FF", fillStyle : "rgba(0,0,0,0)"},
    staticCircle = {lineWidth : 10, centerX : 185, centerY : 185, ray : 124, pathStart : 0, inverse : false, strokeStyle : "#005b7f", fillStyle : "rgba(0,0,0,0)"};

function btnTrigger(arg1, arg2, arg3) {
    "use strict";
    btn.disabled = arg1;
    btn2.disabled = arg2;
    btn3.disabled = arg3;
}

function sec2Rad(sec) {
    "use strict";
    var factor = Math.PI / 30;
    return factor * sec;
}

function circleDraw(ctx, circle, pe) {
    "use strict";
    ctx.lineWidth = circle.lineWidth;
    ctx.beginPath();
    ctx.arc(circle.centerX, circle.centerY, circle.ray, circle.pathStart, pe, circle.inverse); // pe = sec2Rad(counter4draw)
    ctx.strokeStyle = circle.strokeStyle; // #D1F2FF
    ctx.fillStyle = circle.fillStyle;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function circleReset() {
    "use strict";
    context.clearRect(0, 0, 450, 450);//0 0 300 300
    counter4draw = 1;
    circleDraw(context, dynamicCircle, sec2Rad(counter4draw));
    counter4draw += 1;
}

function circleReset2() {
    "use strict";
    circleDraw(context3, dynamicCircle, sec2Rad(counter4drawmin));
    context3.clearRect(0, 0, 450, 450);
    counter4drawmin = 1;
    circleDraw(context3, dynamicCircle, sec2Rad(counter4drawmin));
}

circleDraw(context2, staticCircle, sec2Rad(60));
circleDraw(context4, staticCircle, sec2Rad(60));
circleDraw(context6, staticCircle, sec2Rad(60));



function convert2Digits(num) {
    "use strict";
    var str;
    if (num < 10) { str = "0" + num.toString(); } else { str = num.toString(); }
    return str;
}

function convert2Minutes() {
    "use strict";
    if (resSec >= 60) { resMin += 1; resSec = 0; counter4drawmin += 1; circleDraw(context3, dynamicCircle, sec2Rad(counter4drawmin)); }
}

function convert2Hours() {
    "use strict";
    if (resMin >= 60) { resHrs += 1; resMin = 0; }
    if (counter4drawmin > 60) { circleReset2(); }
    circleDraw(context5, dynamicCircle, sec2Rad(resHrs));
}

function ajoutSec() {
    "use strict";
    resSec += 1;
    convert2Minutes();
    convert2Hours();
    resultSec.innerHTML = convert2Digits(resSec);
    resultMin.innerHTML = convert2Digits(resMin);
    resultHrs.innerHTML = convert2Digits(resHrs);
    circleDraw(context, dynamicCircle, sec2Rad(counter4draw));
    counter4draw += 1;
    if (counter4draw > 61) { circleReset(); }
}

function startCounter() {
    "use strict";
    resSec -= 1;
    window.clearInterval(intervalID);
    intervalID = window.setInterval(ajoutSec, 1000);
    ajoutSec();
    btnTrigger(true, false, false);
}

function pauseCounter() {
    "use strict";
    counter4draw -= 1;
    resSec -= 1;
    counter4draw -= 1;
    window.clearInterval(intervalID);
    ajoutSec();
    btnTrigger(false, true, false);
}

function stopCounter() {
    "use strict";
    window.clearInterval(intervalID);
    resSec = 0;
    resMin = 0;
    resHrs = 0;
    resultSec.innerHTML = "00";
    resultMin.innerHTML = "00";
    resultHrs.innerHTML = "00";
    counter4draw = 0;
    counter4drawmin = 0;
    resHrs = 0;
    context.clearRect(0, 0, 450, 450);
    context3.clearRect(0, 0, 450, 450);
    context5.clearRect(0, 0, 450, 450);
    btnTrigger(false, true, true);
}

btn.addEventListener("click", startCounter);
btn2.addEventListener("click", pauseCounter);
btn3.addEventListener("click", stopCounter);