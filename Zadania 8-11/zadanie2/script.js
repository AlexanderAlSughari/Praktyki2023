function fibbonacci(x, y) {
    console.log(x);
    if(y < 50)
        fibbonacci(y, x+y);
}