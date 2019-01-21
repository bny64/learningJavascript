const jsonData = [{
    "dt": "20181114",
"tm": "0",
    "opnPrc": "372615",
    "hghPrc": "373427",
    "lwPrc": "371921",
    "clsPrc": "372938",
"vlm": "15294"
},
{
    "dt": "20181113",
    "tm": "0",
    "opnPrc": "369257",
    "hghPrc": "372704",
    "lwPrc": "364949",
    "clsPrc": "372143",
    "vlm": "114848"
},
{
    "dt": "20181112",
    "tm": "0",
    "opnPrc": "368661",
    "hghPrc": "373129",
    "lwPrc": "368554",
    "clsPrc": "373126",
"vlm": "16114"
},
{
    "dt": "20181109",
    "tm": "0",
    "opnPrc": "372167",
    "hghPrc": "373723",
    "lwPrc": "368328",
    "clsPrc": "369338",
    "vlm": "22605"
}]

console.log(jsonData);
jsonData.sort((a,b)=>{
    return a.lwPrc > b.lwPrc
})
for(let i=0; i<jsonData.length; i++){
    console.log(jsonData[i]);
}

let code1 = 'Jim'.charCodeAt(0).toString(16);
let code2 = 'Amanda'.charCodeAt(0).toString(16);
console.log(code1);
console.log(code2);
console.log(code1 > code2)
//정렬에서 return 값이 -1 or false이면 첫번째 매개변수가 두번째 매개변수보다 앞 인덱스에 놓임.
//0이면 비교 x, 1 or true이면 첫번째 매개변수가 뒤로감.

const nameArr = [{name:"Suzanne"}, {name:"Jim"},{name:"Trevor"}, {name:"Amanda"}];
nameArr.sort(function(a,b){
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
})
console.log(nameArr);