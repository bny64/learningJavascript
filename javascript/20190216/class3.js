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
//v.deployAirbags();
c.deployAirbags();

class Motorcycle extends Vehicle{};
const d = new Car();
const m = new Motorcycle();
console.log(d instanceof Car);
console.log(d instanceof Vehicle);


class InsurancePolicy{};
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
const SYMBOL_CHECK = Symbol();
function makeInsurable(o){
    o[ADD_POLICY] = function(p){this[_POLICY] =p;};
    o[GET_POLICY] = function(){return this[_POLICY];};
    o[IS_INSURED] = function(){return !!this[_POLICY];};
    o[SYMBOL_CHECK] = () => { return console.log('symbol check') };
}
/* 
const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.getInsurancePlicy()); */

makeInsurable(Car.prototype);
const car1 = new Car();
car1[SYMBOL_CHECK]();
//symbol은 점으로 접근할 수 없다.