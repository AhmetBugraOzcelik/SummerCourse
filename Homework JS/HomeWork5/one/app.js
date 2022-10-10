
const btn = document.getElementById('btn');
const pText = document.getElementById('metin')

var fontType = [ "Arial", "Verdana", "Helvetica" , "Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS"];
var num;

let fontSize=1;

btn.addEventListener( "click", function onClick(event) {
    let random1 = Math.random()*255;
    let random2 = Math.random()*255;
    let random3 = Math.random()*255;
    num=Math.floor(Math.random()*7);
    pText.style.fontFamily = fontType[num];
    pText.style.fontSize = ` ${fontSize+=1}rem`
    pText.style.color= `rgb(${random1}, ${random2}, ${random3})`;
})