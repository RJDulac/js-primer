const Car = require('./Car');
const CarService = require('./services/CarService');

const carService = new CarService('SuperCars', 'Spain', 'Malaga');



//creating instance of class
const car1 = new Car();
const car2 = new Car('Ford', 'Fiesta', 2000);

// car1.displayCarInformations();


carService.addCar(car1);
carService.addCar(car2);

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