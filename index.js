const Car = require('./Car');
const CarService = require('./services/CarService');

const carService = new CarService('SuperCars', 'Spain', 'Malaga');



//creating instance of class
const car1 = new Car();
const car2 = new Car('Ford', 'Fiesta', 2000);
const car3 = new Car('Fiat', 'Punto', 2011);
const car4 = new Car('toyota', 'Yaris', 2003);

// car1.displayCarInformations();


carService.addCar(car1);
carService.addCar(car2);
carService.addCar(car3);
carService.addCar(car4);

console.log(carService.getAllCars());
// [...rest] = carService.getAllCars();

// // console.log(...rest);

// const allCars = carService.getAllCars();
// // console.log(...allCars);

// const newArray = [];
// newArray.push(...allCars);

// // console.log(...newArray);
// const { brand, model, year } = car1;

// debugger;

carService.displayAllCars();


function getName(name) {
    return name;
}

const getName2 = name => name;

console.log(getName('Joe'));
console.log(getName2('Brian'));

// function displayPhilip() {
//     console.log('Philip');
// }
// function displayName(callbackFunction) {
//     callbackFunction();
// }

// displayName(displayPhilip);

// displayPhilip();