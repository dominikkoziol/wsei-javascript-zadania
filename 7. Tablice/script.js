//Task 1:
var someArray = [1, "pies", false, undefined];

for (var i = 0; i < someArray.length; i++) someArray[i];

//Task 2: 
var p1 = [1, 2, 3, "pies", false, undefined, "bbb", "aaaa"];
console.log(`Pierwszy i drugi element: ${p1[0]} i ${p1[1]}`);
console.log(`Ostatni element: ${p1[p1.length-1]}`);
console.log(`Co drugi element: `);
for (var i = 0; i < p1.length; i++) {
    if (i % 2 == 0) console.log(p1[i]);
}

console.log(`Wszystkie stringi: `);
for (var i = 0; i < p1.length; i++) {
    if (typeof p1[i] === "string") console.log(p1[i]);
}

console.log(`Wszystkie numbery: `);
for (var i = 0; i < p1.length; i++) {
    if (typeof p1[i] === "number") console.log(p1[i]);
}

//Task 3: 
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var difference = 0;

for (var i = 0; i < numberArray.length; i++) sum += numberArray[i];
console.log("Suma: " + sum);

for (var i = 0; i < numberArray.length; i++) difference -= numberArray[i];
console.log("Różnica: " + difference);

console.log("Średnia: " + sum / numberArray.length);

var evenNumbers = [];
var oddNumbers = [];

for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 == 0) evenNumbers.push(numberArray[i]);
    else oddNumbers.push(numberArray[i]);
}

console.log("Parzyste liczby: ", evenNumbers);
console.log("Nieparzyste liczby: ", oddNumbers);

console.log("Największa liczba: " + Math.max.apply(Math, numberArray));
console.log("Największa liczba: " + Math.min.apply(Math, numberArray));

console.log("Tablica od tyłu: ")
for (var i = numberArray.length - 1; i >= 0; i--) {
    console.log(numberArray[i]);
}


//Task 4: I used array from previous exercise
function sumArrayNumber(arrayNumber) {
    var sum = 0;
    for (var i = 0; i < arrayNumber.length; i++) sum += arrayNumber[i];

    return sum;
}

console.log("Funkcja obliczyła sumę: " + sumArrayNumber(numberArray));


//Task 5:  I used array from exercise number 3 and sum function from previous exercise
function multipleByAverage(arrayNumber) {
    var sum = 0;
    for (var i = 0; i < arrayNumber.length; i++) sum += arrayNumber[i];

    var avg = sum / arrayNumber.length;

    for (var i = 0; i < arrayNumber.length; i++) {
        console.log(arrayNumber[i] * avg);
    }
}

multipleByAverage(numberArray);


//Task 6: I used array from exercise number 3
function evenNumbers(arrayNumber) {
    var even = [];
    for (var i = 0; i < arrayNumber.length; i++)
        if (numberArray[i] % 2 == 0) even.push(numberArray[i]);

    var sum = 0;
    for (var i = 0; i < even.length; i++) sum += even[i];

    return sum / even.length;
}

console.log("Średnia liczb parzystych: " + evenNumbers(numberArray));


//Task 7:
var mixedArray = [30, 3, 1, 2, 5, 10, 6];

function sortArray(arrayNumber) {
    return arrayNumber.sort((a, b) => a - b);
}

console.log("Liczby posortowane: " + sortArray(mixedArray));

//Task 8: 
var firstArray = [1, 2, 3, 1, 2, 2];
var secondArray = [2, 2, 2, 2];

function sumArrayIndexes(array1, array2) {
    var sumArray = 0;

    array1.forEach((value, index) => sumArray += index);
    array2.forEach((value, index) => sumArray += index);

    return sumArray;
} 

console.log(`Sum of arrays indexes ${sumArrayIndexes(firstArray, secondArray)}`);

//Task 9: 
function removeFromArray(array, element) {
    var newArray = array.filter((el) => el != element);
    return newArray;
}

console.log("Usuwanie elementu z tablicy: ", removeFromArray(mixedArray, 10));


//Task 10:
var p2 = [1, 2, -3, 11, -23, -42, 52];

function changeValue(numbers) {
    for (var i = 0; i < numbers.length; i++) numbers[i] = numbers[i] * (-1);
    return numbers;
}

console.log("Tablica wersja 1: ", p2);
console.log("Tablica z odwróconymi wartościami: ", changeValue(p2));