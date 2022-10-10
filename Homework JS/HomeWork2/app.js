var personel = [
{
    "id" : "1",
    "ad" : "Ahmet",
    "soyad" : "Kapan",
    "Departman" : "Temizlik"
},
{
    "id" : "2",
    "ad" : "Yeliz",
    "soyad" : "Ak",
    "Departman" : "Mühendis"
},
{
    "id" : "3",
    "ad" : "Deniz",
    "soyad" : "Koz",
    "Departman" : "Teknisyen"
}

]

for (const x in personel) {
    console.log(personel[x]);
}

// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date();
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

let year = date.getFullYear();

let month = date.getMonth()+1;
;

// Will display time in 10:30:23 format
var formattedTime = year + " : " + month + " : " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);


// 3. homework

var rasgele = Math.round((Math.random()*80)+20)
var rasgele2 = Math.round((Math.random()*80)+20)
function ort() {
    var ort = (rasgele+rasgele2)/2
    console.log(rasgele,rasgele2)
    ort=Math.round(ort);
    alert("Ortalama : "+ort)
}
ort()