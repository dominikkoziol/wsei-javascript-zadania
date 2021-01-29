//Task 1:
console.log(document.getElementById("buz").parentElement);
console.log(document.getElementById("buz").nextSibling);
console.log(document.getElementById("foo").children);
console.log(document.getElementById("foo").parentElement);
console.log(document.getElementById("foo").children[0]);
console.log(document.getElementById("foo").children[Math.floor(document.getElementById("foo").children.length / 2)]);

//Task 2:
function setEventListenerOnEx2Element(ex2Element) {
    ex2Element.addEventListener("click", function () {
        var divs = ex2Element.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++)
            if (divs[i].innerText && divs[i].children.length == 0) console.log(divs[i].innerText);
    });
}


var ex2 = document.getElementById("ex2");
setEventListenerOnEx2Element(ex2);

//Task 3: Task is commented, because Task 4 use the same elements
    
        /*
        function setEventListenerOnEx3Buttons(ex3Element) {
            var divs = ex3.getElementsByTagName("div");

            for (var i = 0; i < divs.length; i++) {
                let div = divs[i];
                div.getElementsByTagName("button")[0].addEventListener("click", function () {
                    var temp = div.getElementsByTagName("span")[0];
                    temp.style.display = (temp.style.display == "none" ? "block" : "none");
                });
            }
        }

        var ex3 = document.getElementById("ex3");

        setEventListenerOnEx3Buttons(ex3);

        */

//TASK 4: 
function setEventListenerOnEx3Buttons(ex3Element) {
    var divs = ex3.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        let div = divs[i];
        div.getElementsByTagName("button")[0].addEventListener("click", function () {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            div.parentElement.style.backgroundColor = randomColor;
        });
    }
}

var ex3 = document.getElementById("ex3");

setEventListenerOnEx3Buttons(ex3);

//TASK 5:
var list = document.querySelector("div#ex5 ul");
var divs = document.querySelectorAll("div#ex5 div");
let allLi = document.querySelectorAll("div#ex5 li");
var firstLi = allLi[0];
var lastLi = allLi[allLi.length - 1];
let oddElements = [];
allLi.forEach((element, index) => {
    if(index% 2 !== 0) oddElements.push(element);
});



for(let i=0; i<divs.length; i++){
    divs[i].addEventListener("mouseover", function() {
        const color = this.style.backgroundColor;
        //firstLi.style.backgroundColor = color; 
        //lastLi.style.backgroundColor = color;
        
        /*oddElements.forEach((element) => {
            element.style.backgroundColor = color;
        });*/
        
      /*  allLi.forEach((element) => {
            element.style.backgroundColor = color;
        }); */
        list.style.backgroundColor = color;
        
    });

}

//TASK 6:
const mainDiv = document.getElementById('ex6');

let one = mainDiv.firstElementChild.firstElementChild.firstElementChild;

let two = mainDiv.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

let three = mainDiv.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;


console.log(one);
console.log(two);
console.log(three);