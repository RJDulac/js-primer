const Car = require('./Car');

class FancyCar extends Car {
    constructor(brand, model, year) {
        super(brand, model, year);
        this.priority = 'High Priority'
    }
    getStatus() {
        console.log('2 hours to finish repair');
    }
    displayCarInformations() {
        console.log("I'm a super fancy car!");

        super.displayCarInformations();
    }

}

module.exports = FancyCar;