
var grid1 = null;

makeGrid1();
grid1.pqGrid('option', 'dataModel.data', gridData1);
grid1.pqGrid('refreshDataAndView');

function makeGrid1(){

    var colModel = [
        {title : '번호', width:'300', dataIndx:'number'},
        {title : '메뉴명', width:'300', dataIndx:'menu'},
        {title : '조회수', width:'300', dataIndx:'count'},
        {title : '조회수%', width:'300', dataIndx:'countPer'},
    ];

    grid1 = $("#grid1").pqGrid({
        width:'1000',
        height:'300',
        colModel : colModel,
        scrollModel : {autoFit:true},
    });

    grid1.find("div.pq-scrollbar-vert").pqScrollBar().pqScrollBar({
        scroll: function( event, ui ) {
            debugger;
        }
    });

}