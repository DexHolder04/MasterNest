// JavaScript Document
// {"Pokémon" : "", "Coordinates" : "", "Locale" : ""},
var myList=[{"Pokémon" : "Anorith", "Coordinates" : "42.35450, -71.06760", "Locale" : "Boston, USA"},
            {"Pokémon" : "Baltoy", "Coordinates" : "34.71482, 137.60326", "Locale" : "Shizuoka, Japan"},
            {"Pokémon" : "Carvanha", "Coordinates" : "37.51701, 127.12093", "Locale" : "Seoul, South Korea"},
            {"Pokémon" : "Corphish", "Coordinates" : "-38.11924,145.30796", "Locale" : "Victoria, Australia"},
            {"Pokémon" : "Duskull", "Coordinates" : "35.447962,139.626160", "Locale" : "Yokohama, Japan"},
            {"Pokémon" : "Duskull", "Coordinates" : "44.469546,26.084430", "Locale" : "Bucharest, Romania"},
            {"Pokémon" : "Duskull", "Coordinates" : "33.51927,-79.09941", "Locale" : "South Carolina, USA"},
			{"Pokémon" : "Electrike", "Coordinates" : "49.484052,8.493924", "Locale" : "Wellington, New Zealand"},
			{"Pokémon" : "Electrike", "Coordinates" : "-41.29513,174.75111", "Locale" : "Mannheim, Germany"},
            {"Pokémon" : "Lileep", "Coordinates" : "33.608639,-117.622443", "Locale" : "Minneapolis, USA"},
            {"Pokémon" : "Lileep", "Coordinates" : "44.859216,-92.774364", "Locale" : "California, USA"},
            {"Pokémon" : "Luvdisc", "Coordinates" : "49.86969, -97.23897", "Locale" : "Winnipeg, Canada"},
            {"Pokémon" : "Luvdisc", "Coordinates" : "42.4187,-82.2084", "Locale" : "Ontario, Canada"},
            {"Pokémon" : "Makuhita", "Coordinates" : "39.875483,-75.671043", "Locale" : "Hamorton, USA"},
            {"Pokémon" : "Makuhita", "Coordinates" : "36.402, 140.59677", "Locale" : "Ibaraki, Japan"},
            {"Pokémon" : "Makuhita", "Coordinates" : "26.68824, 127.87534", "Locale" : "Okinawa, Japan"},
            {"Pokémon" : "Makuhita", "Coordinates" : "37.54985, 127.0822", "Locale" : "Seoul, South Korea"},
            {"Pokémon" : "Makuhita", "Coordinates" : "51.56433, -0.16471", "Locale" : "London, UK"},
            {"Pokémon" : "Meditite", "Coordinates" : "4.40285,113.99353", "Locale" : "Sarawak, Malaysia"},
            {"Pokémon" : "Minun", "Coordinates" : "51.43697, -0.28917", "Locale" : "Richmond, UK"},
            {"Pokémon" : "Misdreavus", "Coordinates" : "48.82824, 2.4194", "Locale" : "Paris, France"},
            {"Pokémon" : "Mudkip", "Coordinates" : "-33.896, 151.23485", "Locale" : "Sydney, Australia"},
            {"Pokémon" : "Nosepass", "Coordinates" : "-6.30275, 106.89474", "Locale" : "Jakarta, Indonesia"},
            {"Pokémon" : "Numel", "Coordinates" : "39.78976, -89.68435", "Locale" : "Illinois, USA"},
            {"Pokémon" : "Plusle", "Coordinates" : "35.67269,139.69504", "Locale" : "Tokyo, Japan"},
            {"Pokémon" : "Poochyena", "Coordinates" : "41.91383, 12.48595", "Locale" : "Rome, Italy"},
            {"Pokémon" : "Sableye", "Coordinates" : "-37.78736, 144.9508", "Locale" : "Victoria, Australia"},
            {"Pokémon" : "Sableye", "Coordinates" : "-23.58814, -46.65868", "Locale" : "Sao Paulo, Brazil"},
            {"Pokémon" : "Seedot", "Coordinates" : "-22.92606, -43.1703", "Locale" : "Rio de Janeiro, Brazil"},
            {"Pokémon" : "Shroomish", "Coordinates" : "37.88144,139.06135", "Locale" : "Niigata, Japan"},
            {"Pokémon" : "Shuppet", "Coordinates" : "36.9016, -76.2002", "Locale" : "Norfolk, Virginia"},
            {"Pokémon" : "Skitty", "Coordinates" : "32.72955, -117.15741", "Locale" : "San Diego, California"},
            {"Pokémon" : "Spoink", "Coordinates" : "38.54942,-90.41394", "Locale" : "Missouri, USA"},
            {"Pokémon" : "Surskit", "Coordinates" : "29.98525, -90.09658", "Locale" : "New Orleans, USA"},
            {"Pokémon" : "Surskit", "Coordinates" : "34.6828, 135.53207", "Locale" : "Osaka, Japan"},
            {"Pokémon" : "Swablu", "Coordinates" : "48.87715, 2.26496", "Locale" : "Paris, France"},
            {"Pokémon" : "Torchic", "Coordinates" : "51.4963,7.47940", "Locale" : "Dortmund, Germany"},
            {"Pokémon" : "Treecko", "Coordinates" : "35.716653,139.774131", "Locale" : "Tokyo, Japan"},
            {"Pokémon" : "Treecko", "Coordinates" : "38.64002, -90.28463", "Locale" : "St. Louis, USA"},
            {"Pokémon" : "Wailmer", "Coordinates" : "41.8472, -87.61012", "Locale" : "Chicago, USA"},
            {"Pokémon" : "Wailmer", "Coordinates" : "13.730804,100.540590", "Locale" : "Bangkok, Thailand"},
            {"Pokémon" : "Wingull", "Coordinates" : "47.533474,19.052753", "Locale" : "Budapest, Hungary"},
            {"Pokémon" : "Wingull", "Coordinates" : "51.53251, -0.15046", "Locale" : "London, UK"},
            {"Pokémon" : "Wingull", "Coordinates" : "47.68154, -122.25006", "Locale" : "Washington, USA"},
            {"Pokémon" : "Wingull", "Coordinates" : "52.42144,16.93593", "Locale" : "Poznan, Poland"},
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