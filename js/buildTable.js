let migrationDate = '2020-05-28T00:00:00Z';
let noticeText = "Due to the Pokémon Day Celebration event, <strong>Bulbasaur, Charmander and Squirtle</strong> have all been removed from the wild and have caused a frameshift migration rendering some nests from the report inaccurate. Please keep that in mind while we update the report. Thanks!";
let notice = false;

function buildHtmlTable() {

    let tableData = nestData;
    let tableHtml = document.getElementById("nestchart");
    let tableBody = document.createElement('tbody');
    let tableHead = document.createElement('thead')

    for (let i = 0; i < nestData.length; i++) {
        let row = document.createElement('tr');
        let rowData;
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');
            if (j === 0) {

                let shinyCheck1, shinyCheck2;
                let pixelmonLine = document.createElement('img');
                pixelmonLine.setAttribute("class", "pixelmon");
                pixelmonLine.setAttribute("src", `resources/pixel/${nestData[i].DexString}.png`);
                pixelmonLine.setAttribute("alt", `${nestData[i].Pokemon}`);

                if (nestData[i].Shiny) {
                    shinyCheck1 = document.createTextNode("✨");
                    shinyCheck2 = document.createTextNode("✨");
                    console.log("Shiny mon!")
                } else {
                    shinyCheck1 = document.createTextNode("");
                    shinyCheck2 = document.createTextNode("");
                    console.log("Non-shiny mon!")
                }

                cell.appendChild(shinyCheck1);
                cell.appendChild(pixelmonLine);
                cell.appendChild(shinyCheck2);

            } else if (j === 1) {
                let btnLine = document.createElement('button');
                btnLine.setAttribute("class", "btn");
                btnLine.setAttribute("data-clipboard-text", `${nestData[i].Coordinates}`);
                let btnIcon = document.createElement('i');
                btnIcon.setAttribute("class", "fa fa-clipboard fa-sm");
                btnLine.appendChild(btnIcon);

                cell.appendChild(btnLine)

            } else {
                let localeLine = document.createTextNode(`${nestData[i].Locale}`);

                cell.appendChild(localeLine)

            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }


    let headRow = document.createElement('tr');
    for (let k = 0; k < 3; k++) {
        let headCell = document.createElement('th');
        if (k === 0) {
            let headPokemon = document.createTextNode("Pokémon");
            headCell.appendChild(headPokemon)
        } else if (k === 1) {
            let headCoordinates = document.createTextNode("Coordinates");
            headCell.appendChild(headCoordinates)
        } else {
            let headLocale = document.createTextNode("Coordinates");
            headCell.appendChild(headLocale)
        }
        headRow.appendChild(headCell)
    }
    tableHead.appendChild(headRow);


    tableHtml.appendChild(tableBody);
    tableHtml.appendChild(tableHead);
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