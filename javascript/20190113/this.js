const o = {
    name : "Wallace",
    speak(){return `My name is ${this.name}`;}
}

const speak = o.speak;
console.log(o.speak());
console.log(speak());


var b = function(){
    this.name = "func b";
}

a.prototype.speak = function(){ console.log(this.name); };
b.prototype.speak = function(){ console.log(this.name); };

function a(){
    this.name = "func a";
}


var aa = new a();
var bb = new b();

aa.speak();
bb.speak();