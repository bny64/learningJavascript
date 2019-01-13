const bruce = {name : "bruce"};
const madeline = {name :"Madeline"};

function greet(...age){
    console.log(age);
    /* for(value of age){
        console.log(value);
    } */
    return console.log(`Hello, I'm ${this.name}, age is ${age}`);
}
var a = [1,2,3,4,5];
greet.apply(bruce, a);

//apply를 사용하는 경우 apply에서 배열로 파라미터를 넘기는 것 뿐만 아니라
//apply를 사용한 함수 안에서 파라미터를 갯수만큼 파라미터를 받아야함.
//ES5 arguments ES6 확산 연산자 등을 사용해도 된다.