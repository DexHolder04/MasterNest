// JavaScript Document
// {"Pokémon" : "", "Coordinates" : "", "Locale" : ""},
var myList=[{"Pokémon" : "Aipom", "Coordinates" : "49.30153, -123.13337", "Locale" : "Vancouver, Canada"},
            {"Pokémon" : "Chikorita", "Coordinates" : "-37.73141, 144.83778", "Locale" : "Victoria, Australia"},
            {"Pokémon" : "Chikorita", "Coordinates" : "41.93774, -87.63657", "Locale" : "Chicago, Illinois"},
            {"Pokémon" : "Chikorita", "Coordinates" : "35.34793749, 136.9880288", "Locale" : "Aichi, Japan"},
            {"Pokémon" : "Chinchou", "Coordinates" : "43.6466, -79.46317", "Locale" : "Ontario, Canada"},
            {"Pokémon" : "Cyndaquil", "Coordinates" : "34.22734,135.17111", "Locale" : "Wakayama, Japan"},
            {"Pokémon" : "Dunsparce", "Coordinates" : "37.551092,126.991159", "Locale" : "Seoul, South Korea"},
            {"Pokémon" : "Dunsparce", "Coordinates" : "41.87618, -87.61968", "Locale" : "Chicago, USA"},
			{"Pokémon" : "Girafarig", "Coordinates" : "43.81932, 125.33021", "Locale" : "Jilin, China"},
            {"Pokémon" : "Girafarig", "Coordinates" : "1.31507, 103.81627", "Locale" : "Singapore"},
            {"Pokémon" : "Mantine", "Coordinates" : "25.67790,-100.28413", "Locale" : "Monterrey, Mexico"},
            {"Pokémon" : "Misdreavus", "Coordinates" : "48.82824, 2.4194", "Locale" : "Paris, France"},
            {"Pokémon" : "Phanpy", "Coordinates" : "45.559153,-73.557971", "Locale" : "Montreal, Canada"},
            {"Pokémon" : "Phanpy", "Coordinates" : "33.32338, 130.38283", "Locale" : "Saga, Japan"},
            {"Pokémon" : "Phanpy", "Coordinates" : "40.77369, -96.77237", "Locale" : "Nebraska, USA"},
            {"Pokémon" : "Qwilfish", "Coordinates" : "36.06882,-115.11365", "Locale" : "Las Vegas, USA"},
            {"Pokémon" : "Shuckle", "Coordinates" : "34.53925, 135.43922", "Locale" : "Sakai, Japan"},
            {"Pokémon" : "Skarmory", "Coordinates" : "27.226692,-80.213157", "Locale" : "Jensen Beach, USA"},
            {"Pokémon" : "Skarmory", "Coordinates" : "37.76845, -122.48274", "Locale" : "San Francisco, USA"},
            {"Pokémon" : "Sneasel", "Coordinates" : "34.03492, -118.057", "Locale" : "California, USA"},
            {"Pokémon" : "Snubbull", "Coordinates" : "33.81125, -84.14532", "Locale" : "Stone Mountain, USA"},
            {"Pokémon" : "Snubbull", "Coordinates" : "51.41554, -0.3368", "Locale" : "Hampton, UK"},
            {"Pokémon" : "Stantler", "Coordinates" : "55.79576, 37.67598", "Locale" : "Moscow, Russia"},
            {"Pokémon" : "Stantler", "Coordinates" : "40.77085, -73.97263", "Locale" : "New York, USA"},
            {"Pokémon" : "Sudowoodo", "Coordinates" : "34.66111, 135.66706", "Locale" : "Osaka, Japan"},
            {"Pokémon" : "Swinub", "Coordinates" : "26.093581,127.723811", "Locale" : "Okinawa, Japan"},
            {"Pokémon" : "Swinub", "Coordinates" : "45.02181,-93.43348", "Locale" : "Minnesota, USA"},
            {"Pokémon" : "Teddiursa", "Coordinates" : "51.4805, -0.2942", "Locale" : "Richmond, UK"},
            {"Pokémon" : "Totodile", "Coordinates" : "47.710292,-122.367090", "Locale" : "Seattle, USA"},
            {"Pokémon" : "Totodile", "Coordinates" : "45.014559,-74.727288", "Locale" : "Ontario, Canada"},
            {"Pokémon" : "Totodile", "Coordinates" : "39.84006,-77.24646", "Locale" : "Pennsylvania, USA"},
            {"Pokémon" : "Wobbuffet", "Coordinates" : "41.79707,140.75682", "Locale" : "Hokkaido, Japan"},
            {"Pokémon" : "Yanma", "Coordinates" : "-31.96166, 115.84242", "Locale" : "Perth, Australia"},
            {"Pokémon" : "Yanma", "Coordinates" : "35.78899, 139.87042", "Locale" : "Tokyo, Japan"},];

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