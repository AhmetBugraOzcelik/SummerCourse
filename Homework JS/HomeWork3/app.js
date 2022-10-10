
let random1, random2, random3;

let p = document.getElementById("pColor")

const btn = document.getElementById("btn");

btn.addEventListener("click", function onClick(event) {
  // 👇️ Change text color globally
  random1 = Math.random()*255
  random2 = Math.random()*255
  random3 = Math.random()*255 
  console.log(random1,random2,random3)
  p.style.color="rgb(" + random1 + "," + random2 + "," + random3 + ")";

  // 👇️ Change text color for clicked element only
  // event.target.style.color = 'salmon';
});
