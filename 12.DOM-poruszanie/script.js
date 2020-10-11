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
