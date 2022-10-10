var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error illo, recusandae neque modi enim eveniet, iure qui fuga, vitae quae. Eius nam culpa quis nesciunt eos. Velit, quibusdam, atque nam voluptates obcaecati ad earum corporis placeat eum deleniti illum laudantium natus tenetur consequuntur perferendis inventore soluta iure eligendi... Accusantium!"

var arr = text.split(" ");


for (var i = 0; i < arr.length; i++) {
    var s3=arr[i][arr[i].length-1]
    var s4=arr[i][arr[i].length-3]
    if (s4=="." || s4=="!") {
        arr[i] = arr[i].slice(0, -4) + arr[i].slice(-4).toUpperCase();
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        const usingSplit = arr[i].split('');
    }
    else if (s3=="." || s3=="!" || s3==",") {
        // arr[i] = arr[i].slice(-2).toUpperCase();
        arr[i] = arr[i].slice(0, -2) + arr[i].slice(-2).toUpperCase();
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        const usingSplit = arr[i].split('');
    }
    else {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        const usingSplit = arr[i].split(''); 
        arr[i] = arr[i].slice(0, -1) + arr[i].slice(-1).toUpperCase();
    }
}


// for (var i = 0; i < arr.length; i++) {
    
// }

const str2 = arr.join(" ");
console.log(str2);

// arr[i] = arr[i].slice(0, -2) + arr[i].slice(-2).toUpperCase();

