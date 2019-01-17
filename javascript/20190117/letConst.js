let a = {
    one : 1,
    two : 2
}

const b = {
    one : 1,
    two : 2
}

console.log(a);
console.log(b);
a.two = 3;
b.two = 3;
console.log(a);
console.log(b);

a = {}
//b = {}
console.log(a);
console.log(b);

let c = [];
const d = [];
c.push(10);
d.push(20);
c = [];
d = [];