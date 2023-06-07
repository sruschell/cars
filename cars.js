
//create class for Garage. should have a property vehicles which will store an array of vehicles, 
// a property capacity which is a number indicating how many will fit in garage. when you create a garage, 
// vehicles will always be empty. you only need to add capacity. a garage should also have an add method, 
// which adds a vehicle to the array of vehicles. adding something which is not a vehicle returns 
// "Only vehicles are allowed here", and if garage is full, "Sorry, we're full"

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep.";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM";
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addVehicles(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            throw new Error('Only vehicles are allowed here.');
        }

        if(this.vehicles.length >= this.capacity ){
            throw new Error('Sorry, we are full.');
        }

        this.vehicles.push(newVehicle);
        
    }
}