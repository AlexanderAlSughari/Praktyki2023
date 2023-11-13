function calculate(choice) {
    let n1 = parseFloat(number1.value);
    let n2 = parseFloat(number2.value);
    let result = 0;

    switch(choice) {
        case 1:
            result = n1 + n2;
            break;
        case 2:
            result = n1 - n2;
            break;
        case 3:
            result = n1 * n2;
            break;
        case 4:
            result = n1 / n2;
            break;
    }

    if(isNaN(n1) || isNaN(n2))
        printResult.innerHTML = "Pola formularza nie mogą być puste!"
    else if(n2 == 0)
        printResult.innerHTML = "Nie dziel przez zero!";
    else
        printResult.innerHTML = "Wynik: " + result;
}