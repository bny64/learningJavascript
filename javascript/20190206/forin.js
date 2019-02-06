const SYM = Symbol();

const o = {a:1, b:2, c:3, [SYM] : 4};

for(let prop in o){
    console.log(o.hasOwnProperty(prop))
    if(!o.hasOwnProperty(prop)){
        
        continue;
    } 
    console.log(`${prop}:${o[prop]}`);
}

Object.keys(o).forEach(element => {
    console.log(`${element}:${o[element]}`);
});