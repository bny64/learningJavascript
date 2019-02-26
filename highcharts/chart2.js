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
        rangeSelector: {
            enabled:false
        },
        navigator : {
			height:25,
			enabled : true,
			outlineColor: '#808492',
			xAxis : {
				gridLineWidth:0,
				labels:{
					enabled:false
				}
			}
		},
        scrollbar : {
			enabled : true,
			height : 0,
			margin:0
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
                showLastLabel:true,
                
            }
        ],
        xAxis:[
            {
                dateTimeLabelFormats: {                    
                    day: '%m.%d',
				    week: '%m.%d',
				    month: '%Y.%m'
                },
                type:'datetime',
                min:startDate,
                max:endDate,
                width:"95%",
                /* events: {
                    afterSetExtremes: function(e) {
                        var maxDistance = 3 * 30 * 24 * 3600 * 1000; //8 months time
                        var xaxis = this;
                        if ((e.max - e.min) > maxDistance) {
                            var min = e.max - maxDistance;
                            var max = e.max;
                            window.setTimeout(function() {
                                xaxis.setExtremes(min, max);
                            }, 1);
                        }
                    }
                }, */
                ordinal:true,
                range: 3*30*24*60*60*1000, //초기 화면 보여줄 때 범위
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