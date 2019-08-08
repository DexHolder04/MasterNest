// JavaScript Document
// {"Pokémon" : "", "Coordinates" : "", "Locale" : ""},
var myList=[{"Pokémon" : "Aipom", "Coordinates" : "37.54985, 127.0822", "Locale" : ""},
            {"Pokémon" : "Aipom", "Coordinates" : "51.57014, -0.09953", "Locale" : ""},
            {"Pokémon" : "Aipom", "Coordinates" : "36.6264, 137.19628", "Locale" : ""},
            {"Pokémon" : "Chikorita", "Coordinates" : "35.78899, 139.87042", "Locale" : ""},
            {"Pokémon" : "Chikorita", "Coordinates" : "29.53754, -95.52346", "Locale" : ""},
            {"Pokémon" : "Chikorita", "Coordinates" : "43.63351, 1.3823", "Locale" : ""},
            {"Pokémon" : "Chinchou", "Coordinates" : "41.42752, -74.05795", "Locale" : ""},
            {"Pokémon" : "Chinchou", "Coordinates" : "43.05271,141.30952", "Locale" : ""},
            {"Pokémon" : "Chinchou", "Coordinates" : "35.71449, 139.77337", "Locale" : ""},
            {"Pokémon" : "Clefairy", "Coordinates" : "51.65126,5.04769", "Locale" : ""},
            {"Pokémon" : "Cyndaquil", "Coordinates" : "40.82225, -81.24953", "Locale" : ""},
            {"Pokémon" : "Cyndaquil", "Coordinates" : "34.07502, 134.55515", "Locale" : ""},
            {"Pokémon" : "Dunsparce", "Coordinates" : "-22.90562,-43.22582", "Locale" : ""},
            {"Pokémon" : "Dunsparce", "Coordinates" : "51.49601, 7.47901", "Locale" : ""},
            {"Pokémon" : "Dunsparce", "Coordinates" : "47.30694, -122.5273", "Locale" : ""},
			{"Pokémon" : "Girafarig", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Girafarig", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Girafarig", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Mantine", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Mantine", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Mantine", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Phanpy", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Phanpy", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Phanpy", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Qwilfish", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Qwilfish", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Qwilfish", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Shuckle", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Shuckle", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Shuckle", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Skarmory", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Skarmory", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Skarmory", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Sneasel", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Sneasel", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Sneasel", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Snubbull", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Snubbull", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Snubbull", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Stantler", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Stantler", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Stantler", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Sudowoodo", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Sudowoodo", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Sudowoodo", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Swinub", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Swinub", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Swinub", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Teddiursa", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Teddiursa", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Teddiursa", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Totodile", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Totodile", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Totodile", "Coordinates" : "", "Locale" : ""},
            {"Pokémon" : "Wobbuffet", "Coordinates" : "", "Locale" : ""},
			{"Pokémon" : "Wobbuffet", "Coordinates" : "", "Locale" : ""},
			{"Pokémon" : "Wobbuffet", "Coordinates" : "", "Locale" : ""},];

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