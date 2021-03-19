var columnDefs = [
    { field: 'athlete'},
    { field: 'age' },
    {
        field: 'country',
        colSpan: function(params) {
            var country = params.data.country;
            if (country === 'Russia') {
                // have all Russia age columns width 2
                return 2;
            }
            if (country === 'United States') {
                // have all United States column width 4
                return 4;
            }
            // all other rows should be just normal
            return 1;
        }
    },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' }
];

var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        width: 150,
        resizable: true
    }
};

function onBtExport() {
    gridOptions.api.exportDataAsExcel();
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://www.ag-grid.com/example-assets/olympic-winners.json' })
        .then(function(data) {
            gridOptions.api.setRowData(data);
        });
});