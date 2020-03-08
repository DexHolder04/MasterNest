let migrationDate = '2020-03-19T00:00:00Z';
let noticeText = "Due to the Pokémon Day Celebration event, <strong>Bulbasaur, Charmander and Squirtle</strong> have all been removed from the wild and have caused a frameshift migration rendering some nests from the report inaccurate. Please keep that in mind while we update the report. Thanks!";
let notice = false;

// Builds the HTML Table out of nestData JSON data
function buildHtmlTable() {
  var columns = addAllColumnHeaders(nestData);
  var body$ = $("<tbody/>");

  for (var i = 0; i < nestData.length; i++) {
    var rows = $("<tr/>");
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = nestData[i][columns[colIndex]];

      if (cellValue == null) {
        cellValue = "";
      }

      rows.append($("<td/>").html(cellValue));
    }
    body$.append(rows);
    $("tbody > tr")
      .filter(function() {
        return (
          $(this)
            .find("td")
            .text()
            .trim().length === 0
        );
      })
      .remove();
    $("#nestchart").append(body$);
  }
}

// Adds a header row to the table and returns the set of columns
// Need to do union of keys from all records as some records may not contain all elements
function addAllColumnHeaders(nestData) {
  var columnSet = [];
  var header$ = $("<thead/>");
  var headerTr$ = $("<tr/>");

  for (var i = 0; i < nestData.length; i++) {
    var rowHash = nestData[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($("<th/>").html(key));
      }
    }
  }
  header$.append(headerTr$);
  $("#nestchart").append(header$);

  return columnSet;
}

// Calls for clipboard.js
var clipboard = new ClipboardJS(".btn");

clipboard.on("success", function(e) {
  e.clearSelection();
});

clipboard.on("error", function(e) {
  console.error("Action:", e.action);
  console.error("Trigger:", e.trigger);
});

// Navbar minimizing
function checkRes() {
  let pageIndex = document.documentElement.getAttribute("data-page");
  document.getElementById(pageIndex).classList.add("active");
    
  if (window.innerWidth <= 490) {
    document.getElementById(
      "home"
    ).innerHTML = `<i class="fas fa-home faNavbar"></i>`;
    document.getElementById("gen1").innerHTML = "I";
    document.getElementById("gen2").innerHTML = "II";
    document.getElementById("gen3").innerHTML = "III";
    document.getElementById("gen4").innerHTML = "IV";
    document.getElementById("gen5").innerHTML = "V";
    document.getElementById("gpx").innerHTML = 
        `<i class="far fa-map faNavbar"></i>`;
  } else {
    return
  }
}

// Dark/Light Theme Toggle
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

let theme = localStorage.getItem("theme");

function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

function checkTheme() {
  if (!theme) {
    localStorage.setItem("theme", "light");
    return console.log("No theme selected, set to default");
  } else if (theme === "dark") {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector("input[name=theme]").checked = true;
    return console.log("Dark Theme selected");
  } else if (theme === "light") {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector("input[name=theme]").checked = false;
    return console.log("Light Theme selected");
  } else {
    localStorage.setItem("theme", "light");
    return console.log("Invalid theme, set to default");
  }
}

function toggleTheme() {
  if (document.querySelector("input[name=theme]").checked) {
    setTheme("dark");
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    setTheme("light");
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Show list of nesting species
function showText() {
  let hideButton = document.getElementById("showhide-button");
  let hiddenText = document.getElementById("nesting-species");
  let currentState = hiddenText.getAttribute("data-isHidden");

  if (!currentState || currentState === "yes") {
    hiddenText.style.height = "auto";
    hiddenText.style.visibility = "visible";
    hiddenText.style.marginTop = "15px";
    hiddenText.style.transition = "750ms";
    hiddenText.setAttribute("data-isHidden", "no");
    hideButton.innerHTML = "Hide Nesting Species";
  } else if (currentState === "no") {
    hiddenText.style.height = "0px";
    hiddenText.style.visibility = "hidden";
    hiddenText.style.marginTop = "0px";
    hiddenText.style.transition = "0s";
    hiddenText.setAttribute("data-isHidden", "yes");
    hideButton.innerHTML = "Show Nesting Species";
  } else {
    return console.log("Error.");
  }
}

function frameshiftNotice() {
    
    if (notice) {
    
    let top = document.getElementById("top");
    let noticeDiv = document.createElement("div");
    let noticeP = document.createElement("p");
    noticeP.innerHTML = noticeText;
    noticeDiv.setAttribute("class", "notice");
    noticeP.setAttribute("class", "bodyText");
    noticeDiv.appendChild(noticeP);
    
    top.insertAdjacentHTML("beforebegin", noticeDiv.outerHTML);
    
    } else { return }
    
    
}