function forEach(array, callbackfunction) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        callbackfunction(arrayElement);
    }
}

class CarService {
    constructor(name, country) {
        this.name = name;
        this.country = country;
        
        this.carsToRepair = new Array();
    }

    addCar(car) {
        // this.carsToRepair.push(car);

        // if (car.brand === 'Toyota') {
        //     console.log('I cannot add Toyota!');
        // } else {
        //     this.carsToRepair.push(car);
        // }

        car.brand === 'toyota' ? console.log('I cannot add Toyota!') : this.carsToRepair.push(car);
    }

    displayCustomName() {
        // console.log('I am a custom name function');
    }
    displayAllCars() {
        const self = this;
        // this.carsToRepair.forEach(function(car) {
        //     car.displayCarInformations();
        // });
        forEach(this.carsToRepair, (car) => {
            this.displayCustomName();
            car.displayCarInformations();
        });
    }
    getAllCars() {
        return this.carsToRepair;
    }
}

module.exports = CarService;