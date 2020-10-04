//Task 1: 
var i = 13;
var timer = setInterval(function() {
    if(i < 15) {
        console.log(`Cześć po raz ${i}`);
        i++;
    } 
    else clearInterval(timer);
}, 3000);


//Task 2: 
var sampleArray = [1, "pies", false, undefined];

setTimeout(function()  {
  console.log(sampleArray);
  
  let i = 0;

  var arrayInterval = setInterval(() => {
      if(i < sampleArray.length) {
          console.log(sampleArray[i]);
          i++;
      }
      else clearInterval(arrayInterval);
  }, 3000);
}, 2000);

