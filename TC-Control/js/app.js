let btn = document.getElementById("btn");
let tcText
let tcTextSplit
let sonuc = document.getElementById("sonuc");
let hata = true;
let teksayilar;
let haneSorgu;
let ciftsayilar;
let sonHane;

btn.addEventListener("click" , function (e)  {
    hata = true;
    tcText = document.getElementsByClassName("input-text")[0].value;
    tcTextSplit = tcText.split('');

    teksayilar = 7 * (Number(tcTextSplit[0]) + Number(tcTextSplit[2]) + Number(tcTextSplit[4]) + Number(tcTextSplit[6]) + Number(tcTextSplit[8]));

    ciftsayilar = Number(tcTextSplit[1]) + Number(tcTextSplit[3]) + Number(tcTextSplit[5]) + Number(tcTextSplit[7]);

    haneSorgu = (teksayilar - ciftsayilar) % 10;

    sonHane = (Number(tcTextSplit[0]) + Number(tcTextSplit[1]) + Number(tcTextSplit[2]) + Number(tcTextSplit[3]) + Number(tcTextSplit[4]) + Number(tcTextSplit[5]) + Number(tcTextSplit[6]) + Number(tcTextSplit[7]) + Number(tcTextSplit[8]) + Number(tcTextSplit[9])) % 10;

    if (tcTextSplit.length == 11) {
        if (tcTextSplit[0]!='0') {
            if (haneSorgu == Number(tcTextSplit[9])) {
                if (sonHane == Number(tcTextSplit[10])) {
                    hata = false;
                }
            }
        }
    }

    if (hata) {
        sonuc.style.color = "red"
        sonuc.innerHTML = "TC Kimlik Numarası Yanlıştır."
    }
    else {
        sonuc.style.color = "green"
        sonuc.innerHTML = "TC Kimlik Numarası Doğrudur."
    }
    
})