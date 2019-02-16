const naughty = new WeakSet();

const children = [
    {name:'Suzy'},
    {name:'Derek'}
];

naughty.add(children[1]);

console.log(naughty);
for(let child of children){
    if(naughty.has(child)){
        console.log(`Coal for ${child.name}`);
    }else{
        console.log(`Presents for ${child.name}!`);
    }
}