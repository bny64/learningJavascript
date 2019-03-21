let chart5 = null;

makeChart(chartData5);

function makeChart(result){

    let data = result.record1;
    let chartData = [];
    let yData = [];

    for(let i=0; i<data.length; i++){
        if(data[i].tm.length<6) data[i].tm = '0'+data[i].tm;
        if(data[i].dt!=='20190221') continue;
        chartData.unshift({x:Number(moment(data[i].dt+data[i].tm,'YYYYMMDDHHmmss')), y:Number(data[i].clsPrc)});
        console.log(moment(data[i].dt+data[i].tm,'YYYYMMDDHHmmss').format('YYYYMMDDHHmmss'));
        yData.push(Number(data[i].clsPrc));
    }

    let threshold = (Math.max.apply(null, yData)+Math.min.apply(null, yData))/2

    let chart = {
        chart : {
            renderTo : $('#chart5')[0]
        },
        xAxis:{
            type:'datetime'
        },
        series:[{
            type:'area',
            data : chartData,
            threshold:threshold,
            color: '#FF0000',
            negativeColor : '#0088FF'
        }]
    }

    chart5 = new Highcharts.chart(chart);
};