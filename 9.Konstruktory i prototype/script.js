//TASK 1: 
class Person {
    imie;
    nazwisko;
    wiek;
    kraj;
    miasto;
    jezyk;
    constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        Object.assign(this, { imie, nazwisko, wiek, kraj, miasto, jezyk });
    }

    changeAge(age) {
        this.wiek = age;
    }

    changeCity(city) {
        this.miasto = city;
    }
}

var person1 = new Person("Jan", "Kowalski", 22, "Polska", "Tarnów", "Polski");
var person2 = new Person("Adam", "Nowak", 42, "Niemcy", "Berlin", "Niemiecki");
var person3 = new Person("Ewa", "Kanon", 23, "Polska", "Kanonice", "Polski");
var person4 = new Person("Daria", "Krakowska", 18, "Polska", "Kraków", "Polski");
var person5 = new Person("Dominik", "Janiszewski", 34, "Hiszpania", "Madryt", "Japoński");

person1.changeAge(12);
person2.changeAge(32);
person3.changeAge(11);
person4.changeAge(16);
person5.changeAge(62);

person1.changeCity("Wrocław");
person2.changeCity("Tokyo");
person3.changeCity("Nowy York");
person4.changeCity("Chicago");
person5.changeCity("Krynica Zdrój");


console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);


//TASK 2:
class Calculator {
    method = {
        add: '+',
        substraction: '-',
        multiplication: '*',
        division: '/'
    }

    result = 0;
    memory = [];

    constructor() {

    }

    add(value) {
        this.result += value;
        this.save(this.method.add, value);
    }

    substraction(value) {
        this.result -= value;
        this.save(this.method.substraction, value);
    }

    multiplication(value) {
        this.result = this.result * value;
        this.save(this.method.multiplication, value);
    }

    division(value) {
        // You can't divide by zero!
        if (value != 0) {
            this.result = this.result / value;
            this.save(this.method.division, value);
        }
        else console.error("You can't divide by zero!")
    }

    save(method, value) {
        this.memory.push(`${this.memory.length > 0 ? method + value : this.result + method + value}`);
    }

    showMemory() {
        var mem = "";
        this.memory.forEach(e => {
            mem += e;
        });

        console.log(mem);
    }

    cleanMemory = () => this.memory = [];
}

var calculator1 = new Calculator();


//TASK 3: 
function Game() {
    this.numberChanger = () => {
        Game.prototype.changerInterval = setInterval(() => {
            Game.prototype.number = Math.round(Math.random() * 10);
        }, 1000);
    }

    this.checkCondition = () => {
        Game.prototype.conditionCheckerInterval = setInterval(() => {
            if (Game.prototype.number > 5) {
                clearInterval(Game.prototype.changerInterval);
                clearInterval(Game.prototype.conditionCheckerInterval);
            }
        }, 1000);
    }
}

var numberChanger = new Game();
var numberChecker = new Game();
numberChanger.numberChanger();
numberChecker.checkCondition();
