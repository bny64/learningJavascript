//데이터가 들어올 때와 들어오지 않을 때
const obj = {
    itemCode: 100,
    itemName : "series1"
};

const obj2 = {
    itemName : "series2"
};

//obj의 프로퍼티에 따라서 값을 지정하고 싶을 경우

const itemCheck = obj.itemCode || "no itemCode";
const itemCheck2 = obj2.itemCode || "no itemCode";

console.log(itemCheck, itemCheck2); 
//100, 'no itemCode'