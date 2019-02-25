chartCallback(chartData2);

function chartCallback(result){

    const data = result.record1;    
    const chartPosition = $("#chart2");
    let startDate = Number(moment(data[data.length-1].dt, 'YYYYMMDD'));
    let endDate = Number(moment(data[0].dt, 'YYYYMMDD'));
    let chartObject = null;
    const ohlcData = [];

    for(let i=0; i<data.length; i++){

        const ohlcDate = Number(moment(data[i].dt, 'YYYYMMDD'));
        ohlcData.unshift([ohlcDate, Number(data[i].opnPrc), Number(data[i].hghPrc), Number(data[i].lwPrc), Number(data[i].clsPrc)]);
    }

    let chart = {
        chart : {
            renderTo : chartPosition[0],
                spacingRight:0,
                spacingBottom:0,
                spacingTop:0,
                spacingLeft:0,
                zoomType : null,
                height:null,
                width: null
        },
        data:{
            dateFormat:'YYYY/mm'
        },
        rangeSelector : {
            enabled : false
        },
        navigator : {
            enabled : true
        },
        scrollbar : {
            enabled : false
        },
        credits : {
            enabled : false
        },
        tooltip : {
            enabled : false
        },
        yAxis:[
            {
                top:"10%",
                height:"90%",
                labels:{
                    format:'{value}'
                },
                showLastLabel:true
            }
        ],
        xAxis:[
            {
                type:'datetime',
                /* min:startDate,
                max:endDate, */
                width:"95%",
                
            }
        ],
        series:[
            {
                type:'candlestick',
                data : ohlcData,
                upColor:'#d50057',
                color:'#0047ba'

            }
        ]
    }

    chartObject = new Highcharts.stockChart(chart);

};