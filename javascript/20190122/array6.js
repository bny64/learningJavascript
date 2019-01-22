const arr1 = [1,2,3,4,5,6,7,8,9,10];

const result1 = arr1.reduce((r, n, i)=>{
    //console.log(r , n, i);
    return r + n;
});
//초깃값이 없을 때는 인덱스가 1부터 시작

console.log(result1);

const arr2 = ["Beachball", "Rodeo","Angel","Aardvark","Xylophone","November","Chocolate",
"Papaya", "Uniform","Joker", "Clover", "Bali"];
const longWords = arr2.reduce((a, w)=>{
    return w.length>6 ? a + " " + w : a
}, "").trim();
console.log(longWords);