//ex1: 
var newDiv = document.createElement("div");
newDiv.innerHTML = "To jest nowy element";
document.body.appendChild(newDiv)
//ex2:
var fruitList = document.createElement("ul");

var fruits = ["jabłko", "ananas", "pomarańcza", "mandarynka", "mango", "pomidor"];

fruits.forEach(e => {
    var element = document.createElement("li");
    element.innerHTML = e;
    fruitList.appendChild(element);
});

document.body.appendChild(fruitList);

//ex3:
var buttonOnEvent = document.createElement("button");
buttonOnEvent.innerHTML = "zadanie 3";
document.body.appendChild(buttonOnEvent);

buttonOnEvent.addEventListener("click", function () {
    var list = fruitList.querySelectorAll('li');
    list.forEach((element, i) => {
        if (i % 2 == 0) element.remove();
    });

});


//ex4: 
var buttonEx4 = document.createElement("button");


buttonEx4.innerHTML = "zadanie 4";
document.body.appendChild(buttonEx4);
buttonEx4.addEventListener("click", function () {
    buttonEx4.remove();
});


//ex5: 
var randomNumber = Math.floor(Math.random() * 10);

for (var i = 0; i < randomNumber; i++) {
    var divElement = document.createElement("div");
    divElement.innerHTML = `To jest div numer ${i + 1} <br />`;
    document.body.appendChild(divElement);
}

//ex6: 


var divEx6 = document.createElement("div");
divEx6.innerHTML = "to jest div <br />";

var spanEx6 = document.createElement("span");
spanEx6.innerHTML = "to jest span <br />";

var span2Ex6 = document.createElement("span");
span2Ex6.innerHTML = "to jest span <br />";

var div2Ex6 = document.createElement("div");

var secondDiv = document.createElement("div");

secondDiv.innerHTML = "to jest div <br />";
div2Ex6.appendChild(secondDiv);

document.body.appendChild(divEx6);
document.body.appendChild(spanEx6);
document.body.appendChild(div2Ex6);
document.body.appendChild(span2Ex6);



//ex 7:

var firstList = document.createElement("ul");
var secondList = document.createElement("ul");

function checkIfIsDisabled(element) {
    return !element.length ? true : false;
};

function moveElement(source, target, button1, button2) {

    var position = source.querySelectorAll('li').length - 1;
    var sourceLastElement = source.querySelectorAll('li')[position];

    target.append(sourceLastElement);

    var sourceElements = source.querySelectorAll('li');
    var targetElements = target.querySelectorAll('li');
    console.log(sourceElements, targetElements)
    button1.disabled = checkIfIsDisabled(sourceElements);
    button2.disabled = checkIfIsDisabled(targetElements);
}


fruits.forEach(e => {
    var element = document.createElement("li");
    element.innerHTML = e;
    firstList.appendChild(element);
});

document.body.appendChild(firstList);
document.body.appendChild(secondList);

var firstListButton = document.createElement("button");
firstListButton.innerHTML = "Button pierwsza lista";

var secondListButton = document.createElement("button");
secondListButton.innerHTML = "Button druga lista";

document.body.appendChild(firstListButton);
document.body.appendChild(secondListButton);

var firstListElements = firstList.querySelectorAll('li');
var secondListElements = secondList.querySelectorAll('li');

firstListButton.disabled = checkIfIsDisabled(firstListElements);
secondListButton.disabled = checkIfIsDisabled(secondListElements);

firstListButton.addEventListener("click", function () {
    moveElement(firstList, secondList, firstListButton, secondListButton);
});

secondListButton.addEventListener("click", function () {
    moveElement(secondList, firstList, secondListButton, firstListButton);
});



//ex 8: 

var form = document.createElement("form");

var inputText = document.createElement("input");
inputText.setAttribute("placeholder", "Wpisz tekst");

form.appendChild(inputText);

var inputTextColor = document.createElement("input");
inputTextColor.setAttribute("placeholder", "Wpisz nazwę koloru (np.: 'red'");

form.appendChild(inputTextColor);

var inputHowManyTimesRepeat = document.createElement("input");
inputHowManyTimesRepeat.type = "number";
inputHowManyTimesRepeat.setAttribute("placeholder", "Ile razy powtórzyć?");

form.appendChild(inputHowManyTimesRepeat);
document.body.appendChild(form);

//ex 9:
var breakex9 = document.createElement("br");
document.body.appendChild(breakex9);


var form2 = document.createElement("form");
var inputId = 0;
function createFormLine() {
    var div = document.createElement("div");

    var inputText = document.createElement("input");
    inputText.setAttribute("placeholder", "Imię");
    inputText.setAttribute("name", "name" + inputId);

    var inputText2 = document.createElement("input");
    inputText2.setAttribute("placeholder", "Nazwisko");
    inputText2.setAttribute("name", "name" + inputId);

    var inputText3 = document.createElement("input");
    inputText3.setAttribute("placeholder", "Wiek");
    inputText3.setAttribute("name", "name" + inputId);

    var inputText4 = document.createElement("input");
    inputText4.setAttribute("placeholder", "Ilość dzieci");
    inputText4.setAttribute("name", "name" + inputId);

    div.appendChild(inputText);
    div.appendChild(inputText2);
    div.appendChild(inputText3);
    div.appendChild(inputText4);

    form2.appendChild(div);
    if(inputId == 0) document.body.appendChild(form2);
    inputId++;
}

function createTable() {
    var isTable = document.getElementById("table");
    if(isTable) isTable.remove();

    var table = document.createElement("table");
    table.setAttribute("id", "table");
    var headerRow = document.createElement("tr");

    var columnName1 = document.createElement("th");
    columnName1.innerHTML = "Imię";
    var columnName2 = document.createElement("th");
    columnName2.innerHTML = "Nazwisko";
    var columnName3 = document.createElement("th");
    columnName3.innerHTML = "Wiek";
    var columnName4 = document.createElement("th");
    columnName4.innerHTML = "Ilość dzieci";

    headerRow.appendChild(columnName1);
    headerRow.appendChild(columnName2);
    headerRow.appendChild(columnName3);
    headerRow.appendChild(columnName4);

    table.appendChild(headerRow);

    document.body.appendChild(table);
    
    for(let i = 0; i < inputId; i++) {
        var elements = document.getElementsByName("name" + i);
        var row = document.createElement("tr");
        elements.forEach(e => {
            var column = document.createElement("th");
            column.innerHTML = e.value;
            column.setAttribute("name", "column" + i);
            row.appendChild(column);
        });

        var buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = "Usuń";
      
        
        buttonRemove.addEventListener("click", function() {
          var rowToDelete = document.getElementById("row" + i);
          
          rowToDelete.remove();
        });
        
        var deleteColumn = document.createElement("th");
        deleteColumn.appendChild(buttonRemove);
        row.appendChild(deleteColumn);
        row.setAttribute("id", "row"+ i);
        table.appendChild(row);
        console.log(elements);
    }
}



createFormLine();

var buttonMore = document.createElement("button");
buttonMore.innerHTML = "Więcej";
document.body.appendChild(buttonMore);

buttonMore.addEventListener("click", function() {
    createFormLine();
});



var buttonCreateTable = document.createElement("button");
buttonCreateTable.innerHTML = "Stwórz tabelę";
document.body.appendChild(buttonCreateTable);

buttonCreateTable.addEventListener("click", function() {
    createTable();
    setUpperCaseToTableElementsEx9();
});



//ex 10: 
function setUpperCaseToTableElementsEx9() {
    for(var i = 0; i < inputId; i++) {
        var elements = document.getElementsByName("column" + i);
        elements.forEach(e => {
            if(e.innerHTML) e.innerHTML = e.innerHTML[0].toUpperCase() + e.innerHTML.slice(1);
        });

    }
}

// //ex 11:
// function getStrings(anyString) {
//     var getNumbers = anyString.replace(/[^0-9]/g, "");
//     var product = getNumbers.length > 0 ? 1 : 0;
//     for (var i = 0; i < getNumbers.length; i++)
//         product = +getNumbers[i] * product;


//     console.log(product);

//     for (var i = 0; i < product; i++) {
//         var divWithText = document.createElement("div");
//         divWithText.innerHTML = anyString;
//         document.body.appendChild(divWithText);
//     }
// }

// getStrings("ala1 ma2 kota5");


// //ex 12:
// function getStringSaveToObject(someString) {
//     var obj = { text: someString };

//     if (obj.text.includes("Ala")) {
//         obj.text = obj.text.replace("Ala", "Ola");
//         console.log(obj.text);
//     }

//     else {
//         var divWithText = document.createElement("div");
//         divWithText.innerHTML = "Słowo Ala nie występuje w tekście.";
//         document.body.appendChild(divWithText);
//     }
// }

// getStringSaveToObject("Ola ma kota");

// //ex 13: 
// function getStringArrayAndCalc(strArr) {
//     var numArr = [];
//     for (var i = 0; i < strArr.length; i++) {
//         numArr.push(strArr[i].length);
//     }

//     return numArr;
// }

// function sumArr(numArr) {
//     var total = 0;
//     for (var i = 0; i < numArr.length; i++) {
//         total += numArr[i];
//     }
//     return total;
// }

// function avgArr(sum, arrLength) {
//     return sum / arrLength;
// }

// var strArr = ["kot", "adam", "kowalski", "kasza"];
// var numArr = getStringArrayAndCalc(strArr);
// var total = sumArr(numArr);
// var avg = avgArr(total, numArr.length);

// console.log(avg);

// //ex 14: 
// var objEx14 = {
//     name: '',
//     surname: '',
//     age: ''
// }

// function rewriteObj() {
//     objEx14.name = "Jacek";
//     objEx14.surname = "Kowalski";
//     objEx14.age = "32"

//     objEx14.nameLength = objEx14.name.length;
//     objEx14.surnameLength = objEx14.surname.length;
//     objEx14.ageLength = objEx14.age.length;

//     if (objEx14.nameLength > 5 || objEx14.surnameLength > 5 || objEx14.ageLength > 5) {
//         var buttonOnEvent = document.createElement("button");
//         buttonOnEvent.innerHTML = "Resetuj obiekt";
//         document.body.appendChild(buttonOnEvent);

//         buttonOnEvent.addEventListener("click", function () {
//             objEx14 = {
//                 name: '',
//                 surname: '',
//                 age: ''
//             }

//         });

//     }
// }

// rewriteObj();