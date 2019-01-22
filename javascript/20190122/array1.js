const objs = [
    {
        name:"jane",
        age : 20
    },
    {
        name:"Paolo",
        age:16
    },
    {
        name:"Smith",
        age:22
    },
    {
        name:"Whatson",
        age:33
    }
]

var result = objs.findIndex(o=>{
    return o.age===22
})

console.log(result);

const result2 = objs.find(o=>o.name==="Smith")
console.log(result2)

const arr1 = [];
/* for(let i=0; i<objs.length; i++){
    arr1.push({objs[i].name, objs[i].age});
} */

for(let value of objs){
    arr1.push({value});
}