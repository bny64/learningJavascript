//原始型以外、String, Object, Array などなど
// 原始型以外(=)この符号は参照コピー
//薄いコピー
var foo = {key:"value"};
var bar = $.extend({}, foo);
//コピーしたいオブジェクトをextend functionのパラメーターで取り入れる
foo.key = "other value";

console.log(foo);
console.log(bar);

//vanila.js 方法
function clone(obj){

    //タイプがobjectじゃなくもしくはnullの場合
    if(obj === null && typeof(obj) !== "object") return;
  

    var copy = obj.constructor();//生成者
    
    for(var attr in obj){
        //propertyを一個ずつコピー
        if(obj.hasOwnProperty(attr)){
        copy[attr] = obj[attr];
        }
    }
    return copy;
}

var foo = {key:"value"};
var bar = clone(foo);
foo.key = "other value";

console.log(foo);
console.log(bar);

//ES6からコピーができるメソッドが作られた
const object = {a:1, b:2, c:3};

const object2 = Object.assign({c:5, d:6}, object);
//Object.assign(ターゲット、出処)
console.log(object2);
//Object{c=3, d:6, a=1, b=2}

//深いコピー
// Deep Clone
obj1 = { a: 0 , b: { c: 0}};
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.a = 4;
obj1.b.c = 4;
console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}

//objectの併合
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }後ろからかぶる