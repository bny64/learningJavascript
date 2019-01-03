//when we copy an array, javascript do shallow copy.
let a = [1,2,3,4,5];
let b = a;

a[2] = 4;
console.log(a); //1,2,4,4,5
console.log(b); //1,2,4,4,5

//we can copy using array's slice method
let a = [1,2,3,4,5];
let b = Array.prototype.slice.call(a);  //more simple way is [].slice.call()
a[2] = 4;
console.log(a); //1,2,4,4,5
console.log(b); //1,2,3,4,5

//Let,s check in a function
function func1(){
    let c = [].slice.call(arguments);
    console.log(c);
}

func1([1,2,3,4,5]);

//ES6 we can also use rest parameter
function func2(...restParam){
    let c = restParam; //restParameter is an array
    console.log(c);
}

func2([1,2,3,4,5]);

//another way
//ES6 grammar
function func3(){
    let c = Array.from(arguments);
    console.log(c);
}

func3([1,2,3,4,5]);