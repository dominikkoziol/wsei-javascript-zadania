//EX 1:
// var testEvent = document.getElementById("test-event");
// testEvent.addEventListener("click", (e) => console.log(e));
// document.addEventListener("mousemove", (e) => console.log(e));
// testEvent.addEventListener("mouseover", (e) => console.log(e));
// document.addEventListener("keydown", (e) => console.log(e));
// document.addEventListener("scroll", (e) => console.log(e));
// document.getElementById("input-test").addEventListener("input", (e) => console.log(e));

//EX2 :
var ex2 = document.getElementById("ex2").addEventListener("click", (e) => getDataTextFromEx2(e))
function getDataTextFromEx2(e) {
    console.log(e.toElement.getAttribute("data-text"))
}

//EX3

document.getElementById("ex3").addEventListener("mouseover", (e) => changeSquareBackgroundColor(e.toElement, "blue"));
document.getElementById("ex3").addEventListener("mouseleave", (e) => changeSquareBackgroundColor(e.target, "red"));


function changeSquareBackgroundColor(e, color) {
    console.log(e)
    e.style.backgroundColor = color;
}



//ex 4:
var err = document.getElementById("ex3-err");
document.getElementById("input-test").addEventListener("input", (e) => {
    if (checkInput(e)) err.innerHTML = "Nie możesz wpisywać cyfr";
});

function checkInput(e) {
    return /^\d+$/.test(e.data);
}


// ex5:
// var x = 1;

// document.getElementById("ex5").addEventListener("click", (e) => {
//     if(x >= 10) x = 1;
//     e.target.innerHTML = x;
//     x++;
// })


//ex6:
var body = document.getElementsByTagName("body")[0];
document.addEventListener("scroll", (e) => {
    if (window.scrollY >= 200)
        body.style.backgroundColor = "red";
    else
        body.style.backgroundColor = "white";
});



//ex7: 
const calc = () => {
    let input = document.querySelectorAll('#calculator>div:first-of-type>button');
    let output = document.querySelector('#calculator>input');
    let actions = document.querySelectorAll('#calculator>:nth-child(5)>button');

    for (const el of input) {
        el.addEventListener('click', () => {
            output.value = el.innerHTML;
        })
    }

    let tempWynik = [];

    const actionCreators = (object) => {
        tempWynik.push(output.value, object.innerText)
        console.log(tempWynik)
        output.value = null
        if (tempWynik.length > 3) {
            output.value = eval(tempWynik.slice(0, -1).join(""))
        }
    }

    for (const element of actions) {
        element.addEventListener('click', () => {
            console.log(element.innerText)
            actionCreators(element)

        })
    }



}

calc();
