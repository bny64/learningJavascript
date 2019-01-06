//해체 할당
//객체나 배열을 변수로 해체 가능
//객체를 해체할 때는 변수 이름과 객체의 프로퍼티 이름이 일치해야 한다.
const obj = {b:2, c:3, d:4};

const {a,b,c} = obj;
console.log(a, b, c);

const arr = [1,2,3,4,5];

let [x, y] =arr;
console.log(x,y);
//1,2

//확산 연산자를 통해서도 해체 가능
let [d,e, ...rest] = arr;
console.log(d,e, rest);
//1,2, [3,4,5] 

let f = 5, g = 10;
[f, g] = [g, f];
console.log(f, g);
//10, 5