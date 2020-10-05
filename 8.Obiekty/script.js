//TASK 1: 
var car = {
    name: "BMW",
    color: "blue",
    enginePower: 150,
    cubicCapacity: 2.0,
    nameChanger: function(name) {
        this.name = name;
    },

    subCar: {
        name: "MULTIPLA",
        numberOfDoors: 5,
        ownersName: "Jacek",
        ownersSurname: "Kowalski"
    }
};
console.log("Object car: ", car.color, car.cubicCapacity, car.enginePower, car.name);

//TASK 2: 
car.nameChanger("AUDI");
console.log("Change name from BMW to AUDI: ", car);


//TASK 3: 
var taskThreeObject = {
    sum: 0,
    sumArray: function(array) {
        let t = this;
        array.forEach((q) => t.sum += q);
    }
 };

 taskThreeObject.sumArray([1,2,3,4,5]);

 console.log("Object wit summed array values", taskThreeObject.sum);


 //TASK 4: 
 var newCar = {
    name: "BMW",
    color: "blue",
    enginePower: 150,
    cubicCapacity: 2.0,
};

for(var property in newCar) 
    console.log(`${property}: ${newCar[property]}`);


//TASK 5: 
for(var property in car.subCar)
    console.log(property);

//TASK 6:
car.price = 200;
car.sayHello = () => console.log("Hello");

car.sayHello();
console.log(car.price);