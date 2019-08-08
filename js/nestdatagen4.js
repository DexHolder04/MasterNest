// JavaScript Document
// {"Pokémon" : "", "Coordinates" : "", "Locale" : ""},
var myList=[{"Pokémon" : "Bidoof", "Coordinates" : "44.64144, -93.15167", "Locale" : "Minnesota, USA"},
            {"Pokémon" : "Chimchar", "Coordinates" : "30.261939,-97.749986", "Locale" : "Austin, USA"},
            {"Pokémon" : "Hippopotas", "Coordinates" : "48.15874, 11.59753", "Locale" : "Munich, Germany"},
            {"Pokémon" : "Turtwig", "Coordinates" : "34.76299, 135.70473", "Locale" : "Osaka, Japan"},];

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable() {
     var columns = addAllColumnHeaders(myList);
 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
         }
         $("#nestchart").append(row$);
     }
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $("#nestchart").append(headerTr$);
 
     return columnSet;
 }