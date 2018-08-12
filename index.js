class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayCarInformations() {
        console.log(this.brand + ' ' + this.model + ' ' + this.year)
    }
}

//creating instance of class
const car1 = new Car('Ford', 'Focus', 2018);
const car2 = new Car('Ford', 'Fiesta', 2000)

car1.displayCarInformations();


