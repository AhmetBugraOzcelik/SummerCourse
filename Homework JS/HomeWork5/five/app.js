
let text = document.getElementById("textp").textContent;
let textSplit = text.split(" ");
let number = 1;
let toplam = 0;


textSplit.forEach(element => {
    toplam += number;
    console.log(toplam);
});

let x = document.getElementById("kelime-sayi-text");
x.style.color="red";
x.style.fontSize="5rem";
x.innerHTML = toplam;

