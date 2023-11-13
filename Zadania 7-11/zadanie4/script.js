function anagram(text1, text2) {
    const input1 = arrayToString(bubbleSort(text1.split("")));
    const input2 = arrayToString(bubbleSort(text2.split("")));

    if(input1 == input2) {
        printResult.innerHTML = "Podane słowa są anagramami!";
        console.log(true);
    }
    else {
        printResult.innerHTML = "Podane słowa nie są anagramami!";
        console.log(false);
    }
}

function bubbleSort(input) {
    for(let i = 0; i < input.length-1; i++)
        for(let j = 0; j < input.length-1; j++) {
            if(input[j].charCodeAt(0) > input[j + 1].charCodeAt(0)) {
                let temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    return input;
}

function arrayToString(array) {
    let output = "";
    for(let i = 0; i < array.length-1; i++)
        output += array[i];
    return output;
}