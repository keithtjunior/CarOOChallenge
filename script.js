class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    honk = () => 'Beep.';
    toString() {
        const { make, model, year } = this;
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
        this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
        this.numWheels = 2;
	}
    revEngine = () => 'VROOM!!!';
}

class Garage {
    constructor(capacity) {
        if (!Number.isFinite(capacity) || capacity <= 0) 
            throw new Error('Capacity must be a positive number');
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        const { vehicles, capacity } = this;
        if(!(vehicle instanceof Vehicle))
            throw new Error('Only vehicles are allowed in here!');
        if(vehicles.length >= capacity)
            throw new Error("Sorry, we're full.");
        vehicles.push(vehicle);
    }
}