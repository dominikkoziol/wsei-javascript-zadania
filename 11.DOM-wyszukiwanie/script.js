
//Task 1
var listClassElements = document.getElementsByClassName("list");


//Task 2: 
function getTags(tagName) {
    return document.getElementsByTagName(tagName);
} 

var tag = getTags("ul");
console.log(tag)


//Task 3:

var allLi = getTags("li");
var allUl = getTags("ul");
var allSpans = getTags("span");
var spanElementsInSpans = document.getElementById("spans").getElementsByTagName("span");

function writeResult(li, ul, spans, classLi,spansInSpans) {
    console.log("All li elements: ", li);
    console.log("All ul elements: ", ul);
    console.log("All span elements", spans);
    console.log("All li with 'li' class: ", classLi);
    console.log("All spans in element with id 'spans': ", spansInSpans);
}
writeResult(allLi, allUl, allSpans, listClassElements, spanElementsInSpans);