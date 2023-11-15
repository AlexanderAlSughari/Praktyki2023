const x = [1, 4, 5];
let wynik = 0;

function sum(i) {
    wynik += x[i];
    if(i < x.length-1)
        sum(i+1);
    else
        console.log(wynik);  
}