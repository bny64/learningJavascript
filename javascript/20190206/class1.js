class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R','D'];
        this._userGear = this._userGears[0];
    }
    get userGear(){
        return this._userGear;
    }
    set userGear(value){
        if(this._userGears.indexOf(value) < 0){
            throw new Error(`Invalid gear:${value}`);
        }
        this._userGear = value;
    }
    shift(gear){ this.userGear = gear; }
}

const car1 = new Car('Tesla', 'Model S');
const car2 = new Car('Mazda', '3i');

car1.shift('D');
car2.shift('R');
console.log(car1, car2);