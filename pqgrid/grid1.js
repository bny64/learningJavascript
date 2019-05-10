
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


    $(function () {
        var columns = [
            { title: "Order ID", dataIndx: "OrderID" },
            { title: "Customer Name", dataIndx: "CustomerName" },
            { title: "Product Name", dataIndx: "ProductName" },
            { title: "Unit Price", dataIndx: "UnitPrice", dataType: 'float', format: '$#,###.00' },
            { title: "Quantity", dataIndx: "Quantity", dataType: 'integer' },
		    { title: "Order Date", dataIndx: "OrderDate" },
		    { title: "Required Date", dataIndx: "RequiredDate" },
		    { title: "Shipped Date", dataIndx: "ShippedDate" },
            { title: "ShipCountry", dataIndx: "ShipCountry" },
            { title: "Freight", align: "right", dataIndx: "Freight" },
            { title: "Shipping Name", dataIndx: "ShipName" },
            { title: "Shipping Address", dataIndx: "ShipAddress" },
            { title: "Shipping City", dataIndx: "ShipCity" },
            { title: "Shipping Region", dataIndx: "ShipRegion" },
            { title: "Shipping Postal Code", dataIndx: "ShipPostalCode", minWidth: 150 }
		];
        var dataModel = {
            location: "remote",
            dataType: "JSON",
            method: "GET",
            url: "https://paramquery.com/Content/invoice.json"
        }

        $("#dndgrid").pqGrid({
            height: 500,
            autoRow: true,
            dataModel: dataModel,
            complete: function () {
                this.flex();
            },
       
            //pageModel: { type: 'local', rPP: 20, rPPOptions: [1, 10, 20, 30, 40, 50, 100] },
            colModel: columns,                        
            title: "Shipping Orders"            
        });        
    });
