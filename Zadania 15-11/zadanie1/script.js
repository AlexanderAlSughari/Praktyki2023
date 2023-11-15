const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const connectTwoArrays = (array1, array2) => array1.concat(array2);
console.log(connectTwoArrays(arr1, arr2));

const findLastElementOfArray = (arr) => arr.reverse().at(0);
console.log(findLastElementOfArray(arr1));

const filterArray = (arr, arg) => arr.filter(number => number == arg);
console.log(filterArray(numbers, 4));

const sumOfArraysElements = (arr) => arr.reduce((total, item) => total + item);
console.log(sumOfArraysElements(numbers));

const mathTheseNumbers = (arr) => arr.map(number => Math.pow(number, 2)+3);
console.log(mathTheseNumbers(numbers));

const filterEvenNumbers = (arr) => arr.filter((number => number%2==0));
console.log(filterEvenNumbers(numbers));

filterSmallestNumber = (arr) => arr.reduce((a, b) => Math.min(a, b));
console.log(filterSmallestNumber(numbers));