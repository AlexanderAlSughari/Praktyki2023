function secondLargestValue(text) {
    let array = text.split(", ");

    if(array[0].charCodeAt(0) >= 65) {
        for(let i = 0; i < array.length-1; i++)
            for(let j = 0; j < array.length-1; j++) {
                if(array[j].length > array[j + 1].length) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }

        console.log(array[array.length-2]);
        printResult.innerHTML = "Druga największa/najdłuższa wartośc to: " + array[array.length-2];
    }
    else {
        let tab = [];
        for(let i = 0; i < array.length; i++)
            tab.push(parseFloat(array[i]));

        for(let i = 0; i < tab.length; i++)
            for(let j = 0; j < tab.length; j++) {
                if(tab[j] > tab[j + 1]) {
                    let temp = tab[j];
                    tab[j] = tab[j + 1];
                    tab[j + 1] = temp;
                }
            }

        let tablica = [];
        for(let i = 0; i < tab.length; i++){
            if(tab[i] != tab[i+1])
                tablica.push(tab[i]);
        }

        console.log(tablica[tablica.length-2]);
        printResult.innerHTML = "Druga największa/najdłuższa wartośc to: " + tablica[tablica.length-2];
    }
}