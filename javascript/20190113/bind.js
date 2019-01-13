function update(name, age, job){
    this.name2 = name;
    this.age2 = age;
    this.job2 = job;
    console.log(`${this.name}, ${this.age}, ${this.job}`)
    console.log(`${this.name2}, ${this.age2}, ${this.job2}`)
}
/* 
update.prototype.output = function(){
    console.log(`${this.name}, ${this.age}, ${this.job}`);
}; */

const updateInfo = update.bind({
    name : "namyul",
    age : 29,
    job : "programmer"
}, "lee");

updateInfo("na", 33, "nurse");
//namyul, 29, programmar
//lee, na, 33


update.bind({
    name : "namyul",
    age : 29,
    job : "programmer"
}, "lee")("na", 33, "nurse");

/*
1. call, apply -> 함수를 사용할 때 함수 안에 있는 this객체를 바꾸면서 사용 가능함.
2. bind -> 함수를 사용할 때 함수 안에 있는 this객체를 고정시켜 사용함.
* 파라미터를 고정시킬 경우, bind를 통해 만든 함수의 인자값이 밀림. (21번째 라인 참조)
*/
