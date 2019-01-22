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

let result1 = arr.find(p=>p.id===juleit.id);
console.log(result1);
let result2 = arr.find(function(p){
    
    return p.id === this.id
}, juleit);
console.log(result2);