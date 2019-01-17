let globalFunc;

{
    let blockVar = 'a';
    globalFunc = function(){
        console.log(blockVar);
    }
}

globalFunc(); 

let f;

{
    let o = {note : "Safe"};
    f = function(){
        return o;
    }
}

let oRef = f();
console.log(oRef);