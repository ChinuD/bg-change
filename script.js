let imgBox = document.querySelector(".imgBox");
let imgWrap = document.querySelector(".imgWrap");
let originalImg=document.getElementById("originalImg");
let line=document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft   ;
console.log(imgBox.offsetLeft)
imgBox.onmouseover = function(e){
    let boxWidth = (e.pageX - leftSpace)+"px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
    console.log(e.pageX)
}