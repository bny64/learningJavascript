function f(o){
    
    o.message = "f에서 수정함";
    console.log(o);
    o = {
        message : "새로운 객체!"
    }
    console.log(o);
    console.log(`f 내부 : o.message = "${o.message}" (할당 후)`)
    

}
let o = {
    message : "초기 값",
    message2 : "범위 체크"
}
console.log(`f를 호출하기 전 : o.message = "${o.message}"`);
//let o 를 선언한 message
f(o);
//함수를 호출한 후 파라미터로 들어온 o (전역에서 선언한 o)의 message를 수정.
//o라는 개체를 다시 생성
//함수 내부에서 console에 나오는 객체는 함수 내부에서 선언한 o
console.log(`f를 호출한 다음 : o.message = "${o.message}"`);
//바깥에서는 다시 전역에서 선언 후 함수에서 바뀐 o.message가 출력됨.