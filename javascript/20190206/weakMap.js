const Car = (function(){
    const carProps = new WeakMap();

    class Car {
        constructor(make, model){
            this.make = make;
            this.model = model;
            this._userGears = ['P','N','R','D'];
            carProps.set(this, {userGear : this._userGears[0]});
            //약한 참조. carProps weakmap에 userGear 추가
        }
        get userGear(){return carProps.get(this).userGear};
        set userGear(value){
            if(this._userGears.indexOf(value)<0){
                throw new Error(`Invalid gear:${value}`);
            }
            carProps.get(this).userGear = value;
        }
        shift(gear) {this.userGear = gear;}
    }

    return Car;
})()

var car1 = new Car('Benz', 'do');
console.log('a');