const o = {
    name : "Julie",
    greet:()=>{
        console.log("g");
    },
    greetBackwards(){
        const getReverseName = () => {
            let nameBackwards = "";
            for(let i=this.name.length-1; i>=0; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym, olleH`;
    }
}

console.log(o.greetBackwards());
o.greet();

//화살표 함수와 표현식 함수의 차이점.  중요함.

function b(name){
    this.name = name;
}

b.prototype.speak = () => {
    console.log(this.name);
};

b.prototype.speak2 = function(){
    console.log(this.name);
};

var bb = new b("Julie");
bb.speak();
bb.speak2();