const min = 50;
const max = 77;
const number1 = Math.floor(Math.random() * (max - min + 1)) + min;

//最大値と最小値の計算
for(let i=0, i_len=100; i<i_len; i++){
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

