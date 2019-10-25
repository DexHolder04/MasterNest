// Builds the HTML Table out of nestData JSON data
 function buildHtmlTable() {
     var columns = addAllColumnHeaders(nestData);
     var body$ = $('<tbody/>');
 
     for (var i = 0 ; i < nestData.length ; i++) {
         var rows = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = nestData[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
 
             rows.append($('<td/>').html(cellValue));
             
         }
        body$.append(rows);
        $('tbody > tr').filter(
                        function(){
                                    return $(this).find('td').text().trim().length === 0;
                                    }).remove();
        $("#nestchart").append(body$);
     }
 }
 
 // Adds a header row to the table and returns the set of columns
 // Need to do union of keys from all records as some records may not contain all elements
 function addAllColumnHeaders(nestData)
 {
     var columnSet = [];
     var header$ = $('<thead/>');
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < nestData.length ; i++) {
         var rowHash = nestData[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     header$.append(headerTr$);
     $("#nestchart").append(header$);
 
     return columnSet;
 }

// Calls for clipboard.js
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

// Navbar minimizing
function checkRes() {
    
    if (window.innerWidth <= 490) {
        document.getElementById("home").innerHTML = `<i class="fas fa-home faNavbar"></i>`;
        document.getElementById("gen1").innerHTML = "I";
        document.getElementById('gen2').innerHTML = "II";
        document.getElementById('gen3').innerHTML = "III";
        document.getElementById('gen4').innerHTML = "IV";
        document.getElementById('gen5').innerHTML = "V";
        document.getElementById("gpx").innerHTML = `<i class="far fa-map faNavbar"></i>`;
        
    } else {
        
        return;
        
    }
    
};