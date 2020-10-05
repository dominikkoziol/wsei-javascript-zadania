//TASK 1: 
class Person {
    imie;
    nazwisko;
    wiek;
    kraj;
    miasto;
    jezyk;
    constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        Object.assign(this, {imie, nazwisko, wiek, kraj, miasto, jezyk});
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