let chartObj4 = null;

chartCallback(chartData4);

function chartCallback(data){
    var chart = {
        chart : {
            type:'column',
            renderTo : $('#chart4')[0]
        },
        title : {
            text : ''
        },
        xAxis : {
            type : 'category'
        },
        yAxis : {
            title : {
                text : ''
            },
            labels : {
                format : '{value} %'
            }
        },
        legend : {
            enabled : false
        },
        tooltip : {
            enabled : false
        },
        rangeSelector : {
            enabled : false
        },
        navigator : {
            enabled : false
        },
        credits : {
            enabled : false
        },
        series : [
            {
                colorByPoint : true,
                data : data,
                dataLabels : {
                    enabled : true,
                    format : '{point.y:.1f}%'
                }
            }
        ]
    };

    chartObj4 = new Highcharts.chart(chart);    
}