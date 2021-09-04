var gridOptions = {
    columnDefs: [
        { field: "athlete" },
        { field: "country" },
        { field: "year", width: 100 },
        { field: "date" },
        { field: "sport" },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" }
    ],

    defaultColDef: {
        width: 170,
        sortable: true,
        filter: true
    },

    rowDragEntireRow: true,
    rowDragManaged: true,
    rowDragMultiRow: true,

    rowSelection: 'multiple',
    animateRows: true
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://www.ag-grid.com/example-assets/olympic-winners.json' })
        .then(function(data) {
            gridOptions.api.setRowData(data);
        });
});