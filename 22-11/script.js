var myFetch = new Array();
let index = 0;

const assign = (arr) => {
    myFetch = arr;
    console.log(myFetch)
} 

const next = (x) => {
    if(index < 100) {
        index++;
        document.getElementById('output').innerHTML = myFetch[index].title;
    }
    else
        document.getElementById('output').innerHTML = "Id nie może być większe niż 100";
    document.getElementById('id').innerHTML = "ID:" + index;
}
const previous = (x) => {
    if(index > 0) {
        index--;
        document.getElementById('output').innerHTML = myFetch[index].title;
    }
    else
        document.getElementById('output').innerHTML = "Id nie może być mniejsze niż 100";
    document.getElementById('id').innerHTML = "ID:" + index;
}

const change = (x) => {
    fetch('https://jsonplaceholder.typicode.com/' + x) 
        .then((response) => response.json())
        .then((json) => assign(json))
}