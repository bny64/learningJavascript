//for...in
//オブジェクトのpropertyに実行するように設計されたループ
let obj = {a: 1, b:2, c:3};
for(let element in obj){
    if(!obj.hasOwnProperty(element)) continue;
    console.log(element);
    console.log(obj[element]);
}

//for...of
//ES6文法 iterable, arrayどっちも可能
//インデクスを知らなくても問題がない場合
const hand = ["Brazil", "Korea", "America"];
for(let element of hand){
    console.log(`${element}`);
}