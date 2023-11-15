const arr1 = ["Hania", "Ania"];
const arr2 = ["Gregor", "Henio"];

let arr3 = [];

function connect() {
    join(arr1, 0);
    join(arr2, 0);
    console.log(arr3);
}


function join(arr, i) {
    arr3.push(arr[i]);
    if(i < arr.length-1)
        join(arr, i+1);
}