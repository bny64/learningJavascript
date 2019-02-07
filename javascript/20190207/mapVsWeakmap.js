var k1 = {a: 1};
var k2 = {b: 2};

var map = new Map();
var wm = new WeakMap();

map.set(k1, 'k1');
wm.set(k2, 'k2');

console.log(map.get(k1)); //k1
console.log(wm.get(k2)); //k2

k1 = null;
k2 = null;
wm.get(k2); // undefined

console.log(map.get(k1)); //'undefined'
console.log(wm.get(k2)); //'undefined'
console.log(map.get({a:1})); //'undefined'
console.log(wm.get({b:2})); //'undefined'

//map, weakmap이 gc에 의해 지워지면 둘다 키:값 이 지워지지만
//map은 강한참조 이기 때문에 값이 남아 foreach로 키:값을 찾을 수 있다.
map.forEach(function (val, key) {
    console.log(key, val); // k1 {a: 1}
});

let iter = map.values();
for(ele of iter){
    console.log(ele);
}