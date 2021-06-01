let nextMigration = 152,
    migrationDate = '2021-06-10T00:00:00Z',
    migration = new Date(migrationDate),
    migrationCountdown = 1,
    noticeText = "The Season of Legends is now finished! There is now a new nesting pool in place, so most of our report is now invalid. We're working hard to update our report ASAP, so just keep that in mind while while you browse our report, thanks for understanding!",
    notice = true;

function buildHtmlTable() {
    let tableData = nestData;
    let tableHtml = document.getElementById("nestchart");
    let tableBody = document.createElement("tbody");
    let tableHead = document.createElement("thead");

    for (let i = 0; i < nestData.length; i++) {
        let row = document.createElement("tr");
        let rowData;
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            if (j === 0) {
                let shinyCheck1, shinyCheck2;
                let pixelmonLine = document.createElement("img");
                pixelmonLine.setAttribute("class", "pixelmon");
                pixelmonLine.setAttribute(
                    "src",
                    `resources/pixel/${nestData[i].DexString}.png`
                );
                pixelmonLine.setAttribute("alt", `${nestData[i].Pokemon}`);

                if (nestData[i].Shiny) {
                    shinyCheck1 = document.createTextNode("✨");
                    shinyCheck2 = document.createTextNode("✨");
                    console.log("Shiny mon!");
                } else {
                    shinyCheck1 = document.createTextNode("");
                    shinyCheck2 = document.createTextNode("");
                    console.log("Non-shiny mon!");
                }

                cell.appendChild(shinyCheck1);
                cell.appendChild(pixelmonLine);
                cell.appendChild(shinyCheck2);
            } else if (j === 1) {
                let btnLine = document.createElement("button");
                btnLine.setAttribute("class", "btn");
                btnLine.setAttribute(
                    "data-clipboard-text",
                    `${nestData[i].Coordinates}`
                );
                let btnIcon = document.createElement("i");
                btnIcon.setAttribute("class", "fa fa-clipboard fa-sm");
                btnLine.appendChild(btnIcon);

                cell.appendChild(btnLine);
            } else {
                let localeLine = document.createTextNode(`${nestData[i].Locale}`);

                cell.appendChild(localeLine);
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    let headRow = document.createElement("tr");
    for (let k = 0; k < 3; k++) {
        let headCell = document.createElement("th");
        if (k === 0) {
            let headPokemon = document.createTextNode("Pokémon");
            headCell.appendChild(headPokemon);
        } else if (k === 1) {
            let headCoordinates = document.createTextNode("Coordinates");
            headCell.appendChild(headCoordinates);
        } else {
            let headLocale = document.createTextNode("Locale");
            headCell.appendChild(headLocale);
        }
        headRow.appendChild(headCell);
    }
    tableHead.appendChild(headRow);

    tableHtml.appendChild(tableBody);
    tableHtml.appendChild(tableHead);
}

function buildHtmlTableGPX() {

    let tableData = nestData,
        tableHtml = document.getElementById("nestchart"),
        tableBody = document.createElement('tbody'),
        tableHead = document.createElement('thead'),
        filesPath = "./resources/gpx/";

    for (let i = 0; i < nestData.length; i++) {
        let row = document.createElement('tr');
        let rowData;
        let pathAndroid = `${filesPath}${nestData[i]}.gpx`,
            pathiOS = `${filesPath}${nestData[i]}.txt`;
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');
            if (j === 0) {
                let titleLine = document.createElement('span'),
                    titleText = document.createTextNode(nestData[i]);
                titleLine.setAttribute("alt", nestData[i]);
                titleLine.appendChild(titleText);

                cell.appendChild(titleLine);

            } else if (j === 1) {
                let aLine = document.createElement('a'),
                    btnLine = document.createElement('button'),
                    btnIconDL = document.createElement('i'),
                    btnIconOS = document.createElement('i'),
                    whitespace = document.createTextNode(" ");
                aLine.setAttribute("href", pathiOS);
                aLine.setAttribute("download", "");
                btnLine.setAttribute("class", "btn");
                btnIconDL.setAttribute("class", "fa fa-download");
                btnIconOS.setAttribute("class", "fab fa-apple");
                btnLine.appendChild(btnIconDL);
                btnLine.appendChild(whitespace);
                btnLine.appendChild(btnIconOS);
                aLine.appendChild(btnLine);

                cell.appendChild(aLine)

            } else {
                let aLine = document.createElement('a'),
                    btnLine = document.createElement('button'),
                    btnIconDL = document.createElement('i'),
                    btnIconOS = document.createElement('i'),
                    whitespace = document.createTextNode(" ");
                aLine.setAttribute("href", pathAndroid);
                aLine.setAttribute("download", "");
                btnLine.setAttribute("class", "btn");
                btnIconDL.setAttribute("class", "fa fa-download");
                btnIconOS.setAttribute("class", "fab fa-android");
                btnLine.appendChild(btnIconDL);
                btnLine.appendChild(whitespace);
                btnLine.appendChild(btnIconOS);
                aLine.appendChild(btnLine);

                cell.appendChild(aLine)
            }
            row.appendChild(cell);
        }
        row.style.display = "none";
        tableBody.appendChild(row);
    }

    let headRow = document.createElement('tr');
    for (let k = 0; k < 3; k++) {
        let headCell = document.createElement('th');
        if (k === 0) {
            let headTitle = document.createTextNode("Coordinates");
            headCell.appendChild(headTitle)
        } else if (k === 1) {
            let headiOS = document.createTextNode("iOS");
            headCell.appendChild(headiOS)
        } else {
            let headAndroid = document.createTextNode("Android");
            headCell.appendChild(headAndroid)
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
