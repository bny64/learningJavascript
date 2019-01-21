const arr1= [];


for(let i=0; i<100; i++){
    arr1.push(i);
}

console.log(arr1)
arr1.copyWithin(50, 0, 50);
console.log(arr1)

const arr2 = [];

for(var i=0; i<50; i++){
    arr2.unshift(Math.floor(Math.random() * (100 - 1)) + 1);
}
console.log(arr2.sort((a,b)=>{
    return a < b ? -1 : a > b ? 1 : 0
}));