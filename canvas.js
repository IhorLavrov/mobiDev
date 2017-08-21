let canv = document.getElementsByTagName("canvas");
let con;
for (var i = 0; i < canv.length; i++) {
    canv[i].width = 800;
    canv[i].height = 300;
}
let wrap = document.getElementById("wrap");
wrap.addEventListener("mouseup", function () {
    go = false;
});
wrap.addEventListener("mouseover", function () {
    go = false;
});
for (var i = 0; i < canv.length; i++) {

    wrap.addEventListener("mousedown", function (e) {
        newCanv1 = document.createElement("canvas");
        con22 = newCanv1.getContext("2d");
        newCanv1.width = 800;
        newCanv1.height = 300;
        wrap.insertBefore(newCanv1, canv[0]);
        if (canv.length >= 20) {
            con19 = canv[19].getContext("2d");
            con19.drawImage(canv[18], 0, 0);
            canv[18].remove()
        }
        let x, y;
        x = e.pageX;
        y = e.pageY;
        con22.moveTo(x, y);
        go = true;
    });
    canv[i].addEventListener("mousemove", function (e) {
        if (go) {
            let x, y;
            x = e.pageX;
            y = e.pageY;
            con22.lineTo(x, y);
            con22.stroke();
        }
    });
}

let clear = document.getElementById("clear");
clear.addEventListener("mousedown", function () {
    console.log(canv);
    canv[0].remove();

});
let weight = document.getElementById("weight");
weight.addEventListener("mousedown", function () {
    let select = document.getElementById("select");
    let value = select.options[select.selectedIndex].value;
    con.lineWidth = value;
});
let colorDiv = document.getElementById("colorDiv");
colorDiv.addEventListener("mousedown", function () {
    let selectColor = document.getElementById("selectColor");
    let color = selectColor.options[selectColor.selectedIndex].value;
    con.strokeStyle = color;
});
let undo = document.getElementById("undo");
undo.addEventListener("mousedown", function () {
        canv[0].style.display = "none";

});
let redo = document.getElementById("redo");
redo.addEventListener("mousedown", function () {
        canv[0].style.display = "block";
});
