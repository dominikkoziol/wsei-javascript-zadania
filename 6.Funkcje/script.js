//Task 1:
function showConsoleLogItsWorking() {
    console.log("Udało się!");
}

showConsoleLogItsWorking();

//Task 2: 
function getAnyParameterAndShowIt(param) {
    console.log(param);
}

getAnyParameterAndShowIt(1);
getAnyParameterAndShowIt("Hello world");

//Task 3:
function getArray(someArray) {
    return someArray;
}

console.log(getArray([1, "pies", false, undefined]));


//Task 4: 

function showString(someString) {
    var i = 0;
    var interval = setInterval(() => {
        if(i < 5) {
            console.log(someString);
            i++;
        }
        else{
            console.log("Koniec");
            clearInterval(interval);
        } 
    }, 3000);
}


showString("Co 3 sekundy pojawiam się a potem....");