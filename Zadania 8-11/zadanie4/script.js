const x = [10, 11, "ania", 11];
const f = 11;

let wynik = [];

function filter(i) {
    if(i <= x.length-1) {
        if(x[i] == f)
            wynik.push(x[i]);
        filter(i+1);
    }
    else
        console.log(wynik);
}