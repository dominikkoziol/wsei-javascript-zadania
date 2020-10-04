//Task 1:
var firstNumber = 10;
var secondNumber = 20;

if(firstNumber > secondNumber) console.log(firstNumber);
else if(firstNumber == secondNumber) console.log("Są równe");
else console.log(secondNumber);

//Task 2:
var firstNumberValue = 15;
var secondNumberValue = 25;
var thirdNumberValue = 30;

if(firstNumberValue > secondNumberValue && firstNumberValue > thirdNumberValue) console.log(firstNumber);
else if(secondNumberValue > firstNumberValue && secondNumberValue > thirdNumberValue) console.log(secondNumberValue);
else console.log(thirdNumberValue);

//Task 3: 
for(var i = 0; i < 10; i++) console.log("Lubię JavaScript");

//Task 4:
var result = 0;
for(var i = 1; i < 11; i++) result += i;

console.log(result);

//Task 5:
for(var n = 0; n < 5; n++);
{
    if(n % 2 == 0) console.log(`${n} - parzysta`);
    else console.log(`${n} - nieparzysta`);
}

//Task 6: 
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 10; j++) {
            console.log(`i = ${i}, j = ${j}`);
        }
    }

//Task 7:
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


//Task 8: 
//a) 

for(var i = 0; i < 6; i++){
    var result = "";

    for(var j = 0; j < i; j++) result += "*";
    
    console.log(result);
}

//b)

for(var i = 0; i < 5; i++)
{
    var result = "";
    for(var j = 0; j < i; j++) result += "* ";
    
    console.log(result);
}