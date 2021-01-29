//Ex 1:
class Person {
    imie;
    nazwisko;
    wiek;
    kraj;
    miasto;

    constructor(imie, nazwisko, wiek, kraj, miasto) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.kraj = kraj;
        this.miasto = miasto;
    }
}


Person.prototype.showAll = function (){
 console.log(Object.values(this));   
}


Person.prototype.addAge = function (){
    this.wiek ++;   
}

var person = new Person("Adam", "Mickiewicz", 35, "Litwa", "Wiedeń");
var person2 = new Person("Adam", "Mickiewicz", 35, "Litwa", "Wiedeń");
person.addAge();
person2.addAge();

person.showAll();
person2.showAll();

//Ex 2:
person.favouriteFood = [];
person2.favouriteFood = [];

Person.prototype.addFood = function(food) {
    this.favouriteFood.push(food);
}

Person.prototype.showFood = function() {
    console.log(this.favouriteFood)
}

person.addFood("Kotlet");
person2.addFood("Buraki");


person.showFood();
person2.showFood();

//Ex 3

var calculator = {
    setNumbers(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },
    
    sum() {
        console.log(this.num1 + this.num2);
    },

    substract() {
        console.log(this.num1 - this.num2);
    },

    multiply() {
        console.log(this.num1 * this.num2);
    },
    
    divide() {
        if(this.num2 == 0) {
            console.log("Nie mozna dzielic przez 0");
            return;
        }
        console.log(this.num1 / this.num2);
    }
   
}

calculator.setNumbers(10, 5);
calculator.sum();
calculator.substract();
calculator.multiply();
calculator.divide();

//Ex 4:
function Drabina(steps){
    this.position = 0;
    this.height = steps;

    this.getOn = function(){
        
        if(this.height <=0){
            throw new Error("Drabina mniej lub 0")
        } else {
            this.position =1;
            console.log(`Twoja startowa pozycja to ${this.position}`)
        }
    }
    this.checkIfFinished =function(){
        if(this.position === this.height){
            console.log("Udalo sie wejsc")
        }
        
    }
    this.addStep = function(){
        if(this.position == this.height){
            console.log("Jestes na samej gorze")
        }else{
            this.position += 1;
            console.log(`Twoja pozycja to ${this.position}`)
            this.checkIfFinished()
        }
    }
    this.removeStep = function(){
        if(this.position === 1){
            this.position =0;
            console.log("Zszedles z drabiny")
        }else{
            this.position -=1;
        }
    }
}

let drabina = new Drabina(3)
drabina.getOn();
drabina.addStep()
drabina.addStep()
drabina.addStep()


