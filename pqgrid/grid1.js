
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
            { title: "Order ID", minWidth: 130, dataIndx: "OrderID", dataType: "integer",
                filter: { type: 'textbox', condition: "between"}
            },
            { title: "Customer Name", dataIndx: "CustomerName", width:120,
                filter: { type: "textbox", condition: 'begin', listeners: ['keyup']
                }
             },
            { title: "Product Name", dataIndx: "ProductName", width:120 },
            { title: "Unit Price", dataIndx: "UnitPrice", dataType: 'float', format: '$#,###.00', width:120 },
            { title: "Quantity", dataIndx: "Quantity", dataType: 'integer' , width:120},
		    { title: "Order Date", dataIndx: "OrderDate", width:120 },
		    { title: "Required Date", dataIndx: "RequiredDate" , width:120},
		    { title: "Shipped Date", dataIndx: "ShippedDate" , width:120},
            { title: "ShipCountry", dataIndx: "ShipCountry", width:120 },
            { title: "Freight", align: "right", dataIndx: "Freight" , width:120},
            { title: "Shipping Name", dataIndx: "ShipName" , width:120},
            { title: "Shipping Address", dataIndx: "ShipAddress", width:120 },
            { title: "Shipping City", dataIndx: "ShipCity", width:120 },
            { title: "Shipping Region", dataIndx: "ShipRegion" , width:120},
            { title: "Shipping Postal Code", dataIndx: "ShipPostalCode", width:120 }
		];
        var dataModel = {
            location: "remote",
            dataType: "JSON",
            method: "GET",
            url: "https://paramquery.com/Content/invoice.json"
        }

        $("#dndgrid").pqGrid({
            width:"auto",
            height: 500, 
            autoRow: true,
            dataModel: dataModel,
            colModel: columns,
            scrollModel : {autofit:true},
            filterModel : {on:true, mode:'AND', header:true},            
            resizable: true,
            editable: true,
            pageModel: { type: 'local', rPP: 20, rPPOptions: [1, 10, 20, 30, 40, 50, 100] },                                    
            title: "Shipping Orders"            
        });        
    });
