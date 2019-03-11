chartCallback(chartData1);

function chartCallback(result){
	
    var data = result.record1;
    var chartObject = null;

    var chartPosition = $("#chart1");
    var chartData = [];
    var basePrice = 0;
    
    var priceData = [];
    var plusVlmData = [];
    var minusVlmData = [];
    
    var max = Number(moment(data[0].dt + "160000", "YYYYMMDDHHmmss"));
    var min = Number(moment(data[0].dt + "090000", "YYYYMMDDHHmmss"));
    
    var onlyPrice = [];
    
    
    for(var i=0, i_len=data.length; i<i_len; i++){
        
        if(data[i].tm.length<6) data[i].tm = "0"+data[i].tm;
        
        chartData.unshift(data[i]);
        
        if(data[i].dt!=data[i+1].dt){				
            basePrice = data[i+1].clsPrc;
            if(data[i+1].tm.length<6) data[i+1].tm = "0"+data[i+1].tm;
            chartData.unshift(data[i+1]);
            break;
        }
        
        if(i==data.length-1){
            basePrice = data[i].opnPrc;
            chartData.unshift(data[i]);
        }
    }
    
    //*전일종가 없을 때
    
    for(var i=1, i_len=chartData.length; i<i_len; i++){
                    
        priceData.push([Number(moment(chartData[i].dt+chartData[i].tm,"YYYYMMDDHHmmss")), Number(chartData[i].clsPrc)]);
        onlyPrice.push(Number(chartData[i].clsPrc));
        
        /*if(chartData[i].clsPrc < chartData[i-1].clsPrc){
            minusVlmData.push([Number(moment(chartData[i].dt+chartData[i].tm,"YYYYMMDDHHmmss")), Number(chartData[i].vlm)]);
        }else{
            plusVlmData.push([Number(moment(chartData[i].dt+chartData[i].tm,"YYYYMMDDHHmmss")), Number(chartData[i].vlm)]);
        }*/ 
        plusVlmData.push([Number(moment(chartData[i].dt+chartData[i].tm,"YYYYMMDDHHmmss")), Number(chartData[i].vlm)]);
    }
    
    var priceMax = Math.max.apply(null, onlyPrice);
    var priceMin = Math.min.apply(null, onlyPrice);
    
    priceMax = priceMax+(priceMax-priceMin)/6;
    priceMin = priceMin-(priceMax-priceMin)/3;
    
    var chart = {
            chart : {
                renderTo : chartPosition[0],
                spacingRight:40,
                spacingBottom:0,
                spacingTop:0,
                spacingLeft:0,
                zoomType : null,
                height:null,
                width: null
            },				
            plotOptions : {
                column : {
                    dataGrouping : {
                        enabled : false
                    },
                    point : {
                        pointRange : 1000*60*5
                    }
                }
            },
            rangeSelector : {
                enabled : false
            },
            navigator : {
                enabled : false
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
            xAxis : {                
                tickInterval : 1000*60*60*2,
                labels : {
                    formatter : function(){
                        var time24 = moment(this.value).format("HH");
                        var time12 = moment(this.value).format("hh");
                        var tickLabel = Number(time24) >= 12 ? "PM" : "AM"; 
                        return Number(time12) + " " + tickLabel;
                    },
                    style : {"fontSize":"10px"}
                },
                tickWidth:0,
                ordinal : false,
                max : max,
                min : min				
            },
            yAxis :[{					
                labels:{
                    autoRotation : 0,
                    x : 40,
                    y : 4,
                    /* formatter : function(){
                        return (this.value).toString().commify();
                    }, */
                    style : {"fontSize":"9px"}
                },
                tickPositioner : function(){
                    var max = priceMax;
                    var min = priceMin;
                                            
                    position = [];	
                
                    distance = (max-min)/4;
                    for(var i=0; i<5; i++){
                        position.push(parseInt(min+(i*distance)));
                    }
                    return position;
                },
                top:"5%",
                height:"95%",
                minorGridLineWidth:0,
                tickAmount:5,
                max : priceMax,
                min : priceMin,
                showLastLabel : true
            },{
                labels:{
                    enabled : false
                },
                height:"26%",
                top : "74%",
                gridLineWidth:0					
            }],
            series : [{
                data : priceData,
                type:"line",
                lineWidth:2,
                yAxis : 0,
                color : "#0180F3",
                enableMouseTracking : false
            },/*{
                data : minusVlmData,
                type : "column",
                yAxis : 1,
                color : "#E94055",
                enableMouseTracking : false
                
            },*/{
                data : plusVlmData,
                type : "column",
                yAxis : 1,
                color:"#45BF90",
                enableMouseTracking : false
            }]
            
    };
    
    chartObject = new Highcharts.stockChart(chart);
}
