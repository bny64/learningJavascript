var sym1 = Symbol();
var sym2 = Symbol("foo");

console.log(Symbol("foo")===Symbol("foo"));;
//期待的输出是false

//symbol是原始数据类型
//不能用new Symbol()作对象
//该生成明示对象

var sym = Symbol("foo");
var symObj = Object(sym);

//这样的方法来能生成对象
//symbol非字符串非对象

const obj = {};
const mySymbol = Symbol("mySymbol");
obj[mySymbol] = 123;

console.log(obj);
console.log(obj[mySymbol]);

//因为symbol不可能重复，所以首先写在上面然后要声明

let myName = Symbol("Paolo");
console.log(myName.toString());
//Symbol(Paolo)
let obj2 = {};
obj2.myName = "Smith";
obj2[myName] = "Jenny";
console.log(obj2);
//{myName: "Smith", Symbol(Paolo): "Jenny"}
console.log(obj2.myName);
//Smith
console.log(obj2[myName]);
//Jenny
//普通用中括号的话接近property
//可是在对象有symbol,我觉得首先接近Symbol值
