//Task 1: 
var isTrue = true;
var isFalse = false;

console.log(isTrue == isFalse);


//Task 2: 
var firstValue = 10;
var secondValue = 20;
var moduloResult = 0;
moduloResult = firstValue % secondValue;

console.log(moduloResult);


//Task 3: 
var firstString = "Ala ma";
var secondString = "kota Puszka";
var stringsResult = "";

stringsResult = firstString + " " + secondString;

console.log(stringsResult);

//Task 4:
var someNumber = 425;
var someString = "425";

//Wynik jest true, ponieważ znak '==' przyrównuje wartości a nie typy
console.log(someNumber == someString);
//Wynik jest false, ponieważ oprócz porównania wartość jest porównywany również typ zmiennej
console.log(someNumber === someString);

//Task 5: 
var counter = 30;

console.log(counter++);
console.log(counter--)

//Task 6:
var result = null;
var firstNumber = 10;
var secondNumber = 20;

result = firstNumber > secondNumber;

console.log(result);