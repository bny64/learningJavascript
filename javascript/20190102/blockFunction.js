//javascriptのvar変数は単位がブロッグ
var i = 10;
for(; i<100; i++){
    console.log(i);
}

for(var j=0; j<100; j++){
    console.log(j);
}

console.log(j);
//forはブロッグではないので変数jはグロバル変数になる