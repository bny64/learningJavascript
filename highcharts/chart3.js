let chartObj3 = null;

chartCallback(chartData3);

function chartCallback(data){

    const chartPosition = $('#chart3');
    
    let strDt = data.arr1[0].dt;
    let endDt = data.arr1[data.arr1.length-1].dt;
    let allData = [[],[],[],[],[],[]];
    let allDataCount = 0;

    for(let i=1; i<=3; i++){
        let loopData = data['arr'+i];
        for(let j=0; j<loopData.length; j++){
            allData[allDataCount][j] = {y : loopData[j].price, x : loopData[j].dt};
        }
        allDataCount++;
        for(let j=0; j<loopData.length; j++){
            allData[allDataCount][j] = {vol : loopData[j].volume, dt : loopData[j].dt};                      
        }
        allDataCount++;
    }

    let chart = {
        chart : {
            renderTo : chartPosition[0],
            spacingRight:35,
            spacingBottom:5,
            spacingTop:5,
            spacingLeft:5,
            zoomType : null,
            height:null,
            width: null,
            borderWidth:1,
        },
        rangeSelector: {
            enabled:false
        },
        data:{
            dateFormat:'YYYY/mm'
        },
        credits:{
            enabled:false
        },
        tooltip : {
            enabled : false
        },
        plotOptions:{
            line:{
                lineWidth:1,
                enableMouseTracking:false
            },
            
        },
        xAxis:{
            range: 1000*60*60*24*60, //초기 화면 보여줄 때 범위
            
        },
        yAxis:[
            {
                labels:{
                    x: 30
                },
                top:'0%',
                height:'20%'
            },{

            },{
                labels:{
                    x: 30
                },
                top:'30%',
                height:'20%'
            },{

            },{
                labels:{
                    x: 30
                },
                top:'60%',
                height:'20%'
            },{

            }
        ],
        series:[
            {
                type:'line',
                data : allData[0],
                color : '#1C3E87',
                yAxis:0
                
            },{
                type:'line',
                data : allData[2],
                color : '#CD627C',
                yAxis:2
            },{
                type:'line',
                data:allData[4],
                color : '#C0D444',
                yAxis:4
            }
        ]
    };

    chartObj3 = new Highcharts.stockChart(chart);

}

setInterval(() => {
    const maxPrc = 300;
    const minPrc = 150;

    let lastDate = chartObj3.series[0].xData[chartObj3.series[0].xData.length-1];
    let addPrc1 = Math.floor(Math.random() * (maxPrc - minPrc + 1)) + minPrc;
    let addPrc2 = Math.floor(Math.random() * (maxPrc - minPrc + 1)) + minPrc;
    let addPrc3 = Math.floor(Math.random() * (maxPrc - minPrc + 1)) + minPrc;
    let addDt = lastDate + 1000*60*60*24;

    chartObj3.series[0].addPoint([addDt, addPrc1], true, true);
    chartObj3.series[1].addPoint([addDt, addPrc2], true, true);
    chartObj3.series[2].addPoint([addDt, addPrc3], true, true);

}, 1000);