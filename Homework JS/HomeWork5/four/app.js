let text = document.getElementById("textp").textContent;
let splitText = text.split(" ");
text="";

splitText.forEach(element => {
    let queryLength = element.length;
    if (queryLength == 5) {
        element = "<span class=spans>"+element+"</span>";
        element.toString();
    }
    text = text + element + " ";
});

console.log(text);

document.getElementById("textp").innerHTML = text;