class Super{
    constructor(){
        this.name = 'Super';
        this.isSuper = true;
    }
}

Super.prototype.sneaky = 'not recommended!';

class Sub extends Super{
    constructor(){
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

//obj의 hasOwnProperty는 프로토타입에 정의했을 때 true를 반환.
for(let p in obj){
    console.log(`${p} : ${obj[p]}` + (obj.hasOwnProperty(p) ? '':'(inherited)'));
}

console.log(Object.keys(obj));