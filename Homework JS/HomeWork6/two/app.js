let divList = document.getElementById("urunler");
let form1 = document.getElementById("form1");

form1.addEventListener("submit" , function(e) {
    
    let urunAdi = document.getElementById("urunadi").value;
    let urunKodu = document.getElementById("urunkodu").value;
    let fiyat = document.getElementById("fiyat").value;
    let katagori = document.getElementById("katagori").value;
    let a = ((/[a-zA-Z]/).test(urunAdi))
    let d = ((/[a-zA-Z]/).test(katagori))
    if ( a === true && urunKodu != "" && fiyat != "" && d === true ) {
        divList.innerHTML = divList.innerHTML + ` 
        <tr>
            <td>${urunAdi}</td>
            <td>${urunKodu}</td>
            <td>${fiyat}</td>
            <td>${katagori}</td>
        </tr>`
    }
    else {
        alert("Lütfen Harf veya Veri Girişi Yapınız!");
    }

    e.preventDefault();
});