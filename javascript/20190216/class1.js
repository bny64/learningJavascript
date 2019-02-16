//2019.02.16 14:24
class Vehicle{
    constructor(){
        this.passengers = [];
        console.log('Vehicle created');
    }
    addPassenger(p){
        this.passengers.push(p);
    }
}

class Car extends Vehicle{
    constructor(){
        super();
        console.log(`Car created`);       
    }
    deployAirbags(){
        console.log(`BWOOSH!`);
    }
}

const v = new Vehicle();
v.addPassenger('Frank');
v.addPassenger('Judy');
console.log(v.passenger);
const c = new Car();
c.addPassenger('Allice');
c.addPassenger('Cameron');
c.passenger;
v.deployAirbags();
c.deployAirbags();

class Motorcycle extends Vehicle{};
const c = new Car();
const m = new Motorcycle();
console.log(c instanceof Car);
console.log(c instanceof Vehicle);
