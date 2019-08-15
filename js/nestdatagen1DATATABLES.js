// JavaScript Document
// {"Pokémon" : "", "Coordinates" : "", "Locale" : ""},
var myList = [{"Pokémon" : "Abra","Coordinates" : "37.65552, 126.76715", "Locale" : "Goyang-si, South Korea"},
            {"Pokémon" : "Abra", "Coordinates" : "37.5285, 126.93263", "Locale" : "Seoul, South Korea"},
            {"Pokémon" : "Abra", "Coordinates" : "40.850970,-73.877384", "Locale" : "New York, USA"},
            {"Pokémon" : "Bulbasaur", "Coordinates" : "35.17311,137.09034", "Locale" : "Aichi, Japan"},
            {"Pokémon" : "Charmander", "Coordinates" : "37.55046,-121.96702", "Locale" : "California, USA"},
            {"Pokémon" : "Clefairy", "Coordinates" : "52.48521, 4.97829", "Locale" : "Purmerend, Netherlands"},
            {"Pokémon" : "Cubone", "Coordinates" : "35.844736,128.560932", "Locale" : "Daegu, South Korea"},
			{"Pokémon" : "Doduo", "Coordinates" : "34.80914, 135.53238", "Locale" : "Osaka, Japan"},
			{"Pokémon" : "Doduo", "Coordinates" : "40.409520,-3.679725", "Locale" : "Madrid, Spain"},
            {"Pokémon" : "<img src=\"resources/pixel/133.png\" alt=\"Eevee\" class=\"pixelmon\">✨",
             "Coordinates" : "43.72035, -79.35811",
             "Locale" : "North York, Canada"
            },
            {"Pokémon" : "<img src=\"resources/pixel/133.png\" alt=\"Eevee\" class=\"pixelmon\">✨",
             "Coordinates" : "34.67789, 135.6745",
             "Locale" : "Osaka, Japan"
            },
            {"Pokémon" : "<img src=\"resources/pixel/133.png\" alt=\"Eevee\" class=\"pixelmon\">✨",
             "Coordinates" : "43.65342, -87.72815",
             "Locale" : "Wisconsin, USA"
            },
            {"Pokémon" : "<img src=\"resources/pixel/133.png\" alt=\"Eevee\" class=\"pixelmon\">✨",
             "Coordinates" : "39.241718,-76.858182",
             "Locale" : "Maryland, USA"
            },
            {"Pokémon" : "<img src=\"resources/pixel/133.png\" alt=\"Eevee\" class=\"pixelmon\">✨",
             "Coordinates" : "41.87091,-71.34685",
             "Locale" : "Rhode Island, USA"
            },
            {"Pokémon" : "Electabuzz", "Coordinates" : "-7.25171, 112.80355", "Locale" : "Surabaya, Indonesia"},
            {"Pokémon" : "Electabuzz", "Coordinates" : "42.381869,-71.012037", "Locale" : "Massachusetts, USA"},
            {"Pokémon" : "Exeggcute", "Coordinates" : "34.82166, 135.69111", "Locale" : "Osaka, Japan"},
            {"Pokémon" : "Gastly", "Coordinates" : "55.75564, 37.42583", "Locale" : "Moscow, Russia"},
            {"Pokémon" : "Gastly", "Coordinates" : "44.8612,-93.61752", "Locale" : "Minnesota, USA"},
            {"Pokémon" : "Gastly", "Coordinates" : "41.382743,2.193316", "Locale" : "Barcelona, Spain"},
            {"Pokémon" : "Growlithe", "Coordinates" : "42.353040,-71.070450", "Locale" : "Boston, USA"},
            {"Pokémon" : "Growlithe", "Coordinates" : "43.79277,87.60058", "Locale" : "Urumqi, China"},
            {"Pokémon" : "Horsea", "Coordinates" : "37.579167,126.976783", "Locale" : "Seoul, South Korea"},
            {"Pokémon" : "Jynx", "Coordinates" : "35.62620,139.70599", "Locale" : "Tokyo, Japan"},
            {"Pokémon" : "Kabuto", "Coordinates" : "34.682894,135.847297", "Locale" : "Nara-shi Nara, Japan"},
            {"Pokémon" : "Kabuto", "Coordinates" : "37.427007,127.019229", "Locale" : "Gyeonggi-do, South Korea"},
            {"Pokémon" : "Machop", "Coordinates" : "34.147567,-118.287035", "Locale" : "Los Angeles, USA"},
            {"Pokémon" : "Machop", "Coordinates" : "42.42821, -83.52925", "Locale" : "Michigan, USA"},
            {"Pokémon" : "Magikarp", "Coordinates" : "51.506384,-0.156747", "Locale" : "London, UK"},
            {"Pokémon" : "Magikarp", "Coordinates" : "43.495424,-87.794058", "Locale" : "Wisconsin, USA"},
            {"Pokémon" : "Magikarp", "Coordinates" : "-18.910195,-48.232247", "Locale" : "Minas Gerais, Brazil"},
            {"Pokémon" : "Magmar", "Coordinates" : "34.01522, -118.28691", "Locale" : "California, USA"},
            {"Pokémon" : "Magmar", "Coordinates" : "51.50596, -0.17939", "Locale" : "London, UK"},
            {"Pokémon" : "Magnemite", "Coordinates" : "-6.125520,106.836370", "Locale" : "Jakarta, Indonesia"},
            {"Pokémon" : "Oddish", "Coordinates" : "52.05708,4.28895", "Locale" : "The Hague, Netherlands"},
            {"Pokémon" : "Oddish", "Coordinates" : "40.74723, -73.84553", "Locale" : "New York, USA"},
            {"Pokémon" : "Omanyte", "Coordinates" : "38.51471, -90.27758", "Locale" : "Missouri, USA"},
            {"Pokémon" : "Onix", "Coordinates" : "51.48164, -0.15794", "Locale" : "London, UK"},
            {"Pokémon" : "Onix", "Coordinates" : "39.652952,-84.225406", "Locale" : "Ohio, USA"},
            {"Pokémon" : "Onix", "Coordinates" : "45.745981,4.851430", "Locale" : "Lyon, France"},
            {"Pokémon" : "Pikachu", "Coordinates" : "41.366005,2.155959", "Locale" : "Barcelona, Spain"},
            {"Pokémon" : "Pikachu", "Coordinates" : "36.242608,139.543516", "Locale" : "Gunma, Japan"},
            {"Pokémon" : "Pikachu", "Coordinates" : "23.066923,120.297709", "Locale" : "Tainan, Taiwan"},
            {"Pokémon" : "Pikachu", "Coordinates" : "35.733980,139.746256", "Locale" : "Tokyo, Japan"},
            {"Pokémon" : "Pikachu", "Coordinates" : "52.21317, 21.03404", "Locale" : "Warsaw, Poland"},
            {"Pokémon" : "Pinsir", "Coordinates" : "42.355472,-71.066417", "Locale" : "Boston, USA"},
            {"Pokémon" : "Pinsir", "Coordinates" : "53.59586, 10.01517", "Locale" : "Hamburg, Germany"},
            {"Pokémon" : "Poliwag", "Coordinates" : "26.304945,127.826195", "Locale" : "Okinawa, Japan"},
            {"Pokémon" : "Poliwag", "Coordinates" : "35.70815, 139.39462", "Locale" : "Tokyo, Japan"},
            {"Pokémon" : "Poliwag", "Coordinates" : "12.975101,77.592313", "Locale" : "Karnataka, India"},
            {"Pokémon" : "Poliwag", "Coordinates" : "35.381330,-94.374823", "Locale" : "Arkansas, USA"},
            {"Pokémon" : "Ponyta", "Coordinates" : "30.245774,-97.711872", "Locale" : "Austin, USA"},
            {"Pokémon" : "Ponyta", "Coordinates" : "34.9324, -85.25494", "Locale" : "Georgia, USA"},
            {"Pokémon" : "Psyduck", "Coordinates" : "35.91785, 139.63155", "Locale" : "Saitama, Japan"},
			{"Pokémon" : "Rhyhorn", "Coordinates" : "39.7778, -75.5", "Locale" : "Delaware, USA"},
            {"Pokémon" : "Scyther", "Coordinates" : "39.322165,-76.641315", "Locale" : "Baltimore, USA"},
            {"Pokémon" : "Scyther", "Coordinates" : "39.98353,-75.21043", "Locale" : "Pennsylvania, USA"},
            {"Pokémon" : "Scyther", "Coordinates" : "45.428766,-73.683118", "Locale" : "Quebec, Canada"},
            {"Pokémon" : "Seel", "Coordinates" : "19.42237,-99.1891", "Locale" : "Mexico City, Mexico"},
            {"Pokémon" : "Seel", "Coordinates" : "48.80633, 2.11507", "Locale" : "Versailles, France"},
            {"Pokémon" : "Shellder", "Coordinates" : "-22.905873,-43.225009", "Locale" : "Rio de Janeiro, Brazil"},
            {"Pokémon" : "Squirtle", "Coordinates" : "42.33826, -82.98542", "Locale" : "Detroit, USA"},
            {"Pokémon" : "Tentacool", "Coordinates" : "8.99756,-79.50835", "Locale" : "Panama Province, Panama"},
            {"Pokémon" : "Voltorb", "Coordinates" : "3.142139,101.686662", "Locale" : "Kuala Lumpur, Malaysia"},
            {"Pokémon" : "Voltorb", "Coordinates" : "36.36957, 140.45445", "Locale" : "Ibaraki, Japan"},
            {"Pokémon" : "Voltorb", "Coordinates" : "42.14862,-87.79033", "Locale" : "Illinois, USA"},
            {"Pokémon" : "Voltorb", "Coordinates" : "y voltorb?", "Locale" : "ew"},
            {"Pokémon" : "Vulpix", "Coordinates" : "48.894603,2.389346", "Locale" : "Paris, France"},];

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable() {
     var columns = addAllColumnHeaders(myList);
     var body$ = $('<tbody/>');
 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
         }
        body$.append(row$);
        $("#nestchart").append(body$);
     }
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var header$ = $('<thead/>');
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
     header$.append(headerTr$);
     $("#nestchart").append(header$);
 
     return columnSet;
 }