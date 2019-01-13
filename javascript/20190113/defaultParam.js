function f(a, b = "default", c= 3){
    return console.log(`${a} - ${b} - ${c}`);
}

f(5,6,7); //5 - 6 - 7
f(5,6); //5 - 6 - 3
f(5); //5 - default - 3
f(); //undefined - default - 3

const o = {
    name : "Wallannce",
    bark(){return "Woof!"},
}

console.log(o.bark());