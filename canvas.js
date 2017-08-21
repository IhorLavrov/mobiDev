let canv = document.getElementsByTagName("canvas");
let con;
for (i = 0; i < canv.length; i++){
    con = canv[i].getContext("2d");
    let width = 800;
    let height = 300;
    canv[i].width = width;
    canv[i].height = height;
}


let wrap = document.getElementById("wrap")
wrap.addEventListener("mousedown", function (e) {
    let x, y;
    x = e.pageX;
    y = e.pageY;
    con.moveTo(x, y);
    go = true;
});
wrap.addEventListener("mouseup", function () {
    go = false;
    var newCanv = "<canvas width='800' height='300'></canvas>";

    wrap.innerHTML += newCanv;
});
wrap.addEventListener("mouseover", function () {
    go = false;
});
wrap.addEventListener("mousemove", function (e) {
    if (go) {
        let x, y;
        x = e.pageX;
        y = e.pageY;
        con.lineTo(x, y);
        con.stroke();
    }
});
var clear = document.getElementById("clear");
clear.addEventListener("mousedown", function () {
    let widthCanv = canv.width;
    canv.width = 0;
    canv.width = widthCanv;
});
var weight = document.getElementById("weight");
weight.addEventListener("mouseout", function () {
    let select = document.getElementById("select");
    let value = select.options[select.selectedIndex].value;
    con.lineWidth = value;
});
var colorDiv = document.getElementById("colorDiv");
colorDiv.addEventListener("mouseout", function(){
    let selectColor = document.getElementById("selectColor");
    let color = selectColor.options[selectColor.selectedIndex].value;
    con.strokeStyle = color;
})
