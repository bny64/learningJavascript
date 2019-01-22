const cards = [];
const cards2 = [];
for(let suit of ["H","C","D","S"]){
    for(let value=1; value<=13; value++){
       // console.log(suit);
        cards.push({suit, value});
    }
}

//filter는 true, false를 사용하여 return의 테스트를 통과한 배열만 모아서 새로운 배열을 만든다.
const result1 = cards.filter(c=> c.value===2);
//map은 return값 자체를 모아서 새로운 배열을 생성한다.
const result2 = cards.map(x=>x.value===2);
