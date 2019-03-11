const maxPrc = 300;
const minPrc = 150;
const maxVol = 300000;
const minVol = 50000;

const chartData3 = {
    arr1 : [],
    arr2 : [],
    arr3 : [],
};

let dt = Number(moment().add('-1', 'years'));

for(let i=0; i<250; i++){   
    for(let j=1; j<=3; j++){
        let ranPrc = Math.floor(Math.random() * (maxPrc - minPrc + 1)) + minPrc;
        let ranVol = Math.floor(Math.random() * (maxVol - minVol + 1)) + minVol;
        chartData3['arr'+j].push({price : ranPrc, volume:ranVol, dt : dt});
        dt += 1000*60*60*24;
    }
};