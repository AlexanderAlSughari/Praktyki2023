function multiplyAsync(x, y){
    return myPromise = new Promise((resolve, reject) => {
        if(typeof(x) != 'number' || typeof(y) != 'number')
            reject("Niepoprawny argument");
        else
            resolve(x * y);
    });
}

multiplyAsync(3, 7)
.then((output) =>{
    console.log("Wynik mnożenia -> " + output);
})
.catch(console.error);

multiplyAsync(3, '7')
.then((output) =>{
    console.log("Wynik mnożenia -> " + output);
})
.catch(console.error);