
aTag = document.getElementById("baglanti");
let tipA;
let tipB;
let tipC;
let tipD;
let text;

function ozelliklerial() {
    tipA = aTag.getAttribute("hreflang");
    tipB = aTag.getAttribute("type");
    tipC = aTag.getAttribute("target");
    tipD = aTag.getAttribute("href");
    text = `Type : ${tipB} \nhrefLang : ${tipA}\nTarget : ${tipC}\nhref : ${tipD}`;
    console.log(text);
}