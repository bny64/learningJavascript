class Person{
    constructor(name){
        this.name = name;
        this.id = Person.nextId++;
    }
}


Person.nextId = 0;
const jamie = new Person("Jamie"),
    juleit = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");
const arr = [jamie, juleit, peter, jay];

let result1 = arr.some(o=>o.name==="Peter");
console.log(result1);

let result2 = arr.every(o=>o.id < 3);
console.log(result2);