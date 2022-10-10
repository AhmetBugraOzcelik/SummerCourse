const form = document.getElementById("form1");
let textUyari;
let inputAd;
let email;
let inputSoyad;
let as ="asd";

function isLetter() {
    inputSoyad = document.getElementById("soyad").value;
    inputAd = document.getElementById("ad").value;
    email = document.getElementById("email").value;

    let a = ((/[a-zA-Z]/).test(inputAd))
    let b = ((/[a-zA-Z]/).test(inputSoyad))
    let c = ((/[a-zA-Z]/).test(email))
    textUyari = document.getElementById("uyari-text");
    if ( a===false || b===false || c===false ) {
        textUyari.innerHTML = "LÜTFEN BİR HARF GİRİŞİ YAPINIZ!"
        if (a == false) {
            document.getElementById("a-div").innerHTML = "Lütfen Düzeltiniz.";
        }
        else {
            document.getElementById("a-div").innerHTML = "";
        }
        if (b == false) {
            document.getElementById("b-div").innerHTML = "Lütfen Düzeltiniz.";
        }
        else {
            document.getElementById("a-div").innerHTML = "";
        }
        if (c == false) {
            document.getElementById("c-div").innerHTML = "Lütfen Düzeltiniz.";
        }
        else {
            document.getElementById("a-div").innerHTML = "";
        }
    }
    else {
        textUyari.innerHTML = "Tebrikler Başarılı."
    }
  }

form.addEventListener("submit",function(e) {

    isLetter();

    e.preventDefault();
})