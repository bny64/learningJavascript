var grid = null;

function initGrid(){
    var colModel = [
        {dataIndx : 0, title : "one", dataType:"string", hidden:true},
        {dataIndx : 1, title : "two", dataType:"integer", hidden:true},
        {dataIndx : 2, title : "three", dataType:"float", hidden:true},
        {dataIndx : 3, title : "four", dataType:"string", hidden:true},
    ];

    grid = $("#chooseId").pqGrid({
        width : "auto",
        height: "auto",
        title : "I'm a title",
        sortModel : {on : false},
        filterModel : {mode:'OR', on:true},
        scrollModel : {autoFit:true, horizontal:false},
        colModel:colModel,
        showHeader:false,
        virtualY:false,
        swipeModel:{on:true},
        dataModel : {data:gridData},
        rowClick:function(evt, ui){
            
        }
    });
}

function deleteGrid(){
    if(grid && grid.pqGrid && grid.pqGrid('getInstance')){
        grid.pqGrid('destroy');
        grid = null;
    }
}

function gridFilter(val){
    if(grid){
        grid.pqGrid("filter", {
            oper : "replace",
            data : [
                {dataIndx:0, condition:"begin", value:val},
                {dataIndx:1, condition:"contain", value:val},
                {dataIndx:2, condition:"contain", value:val}                   
            ]
        });
        grid.pqGrid("sort",{
            sorter:[{dataIndx:1, dir:'up'}]
        });
    }
}