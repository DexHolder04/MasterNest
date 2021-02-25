// Migration Banner
function displayMigrationBanner() {
    let banner = document.getElementById("migrationBanner"),
        bannerHeadRaw = `<div class="top"> <div class="boundbox"> <br><h1 class="title">Master Nest</h1> <br></div></div><br>`,
        bannerTextRaw = `<br><h5 align="center" style="margin-left:10%; margin-right: 10%">Welcome to the Master Nest!</h5> <h5 align="center" style="margin-left:10%; margin-right: 10%">Our report for <strong>Migration ${nextMigration}</strong> is currently under research! Please be patient while we finish investigating.</h5> <h5 align="center" style="margin-left:10%; margin-right: 10%">In the meantime, consider visiting us in our Discord server and checking out the #nest-submissions channel where we may post some nests. You can access by clicking <a href="https://discord.gg/yaFNCak">[here]</a>. Don't forget to select a role to see all channels!</h5> <br/> <br/> <h5 align="center">Thanks so much for stopping by, see you all soon!</h5> <h5 align="center">-Dex</h5><br><p align="center">/// ---------------- Advertisement ---------------- ///</p><br>`,
        bannerAdRaw = `<div class="adContainer"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Migration Ad --><ins class="adsbygoogle"style="display:block"data-ad-client="ca-pub-2515590153151954"data-ad-slot="6900739057"data-ad-format="auto"data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>`,
        bannerHead = document.createElement("div"),
        bannerText = document.createElement("div"),
        bannerAd = document.createElement("div");
    bannerHead.innerHTML = bannerHeadRaw;
    bannerText.innerHTML = bannerTextRaw;
    bannerAd.innerHTML = bannerAdRaw;
    banner.appendChild(bannerHead);
    banner.appendChild(bannerText);
    banner.appendChild(bannerAd);
    banner.style.display = "block";
    console.log("Banner built!")
    
    if (!displayAds) noAds();
}

function hideMigrationBanner() {
    let banner = document.getElementById("migrationBanner");
    banner.style.display = "none";
}

// Insert Footer
function buildFooter() {

    let footer = document.getElementById("footer");
    let footerRaw = `<div class="boundboxb"> <div class="footer-container"> <div class="footerC" style="font-family:lithos; font-size:24px">~ Master Nest ~</div><div class="footerC">developed by <strong>DexHolder23</strong></div><div class="footerC">sponsored & brought together by the amazing </div><div class="footerC">team of <strong>CoolDownClub</strong></div><div class="footerC1"> <div class="discordLogo"> <a href="https://discord.gg/yaFNCak"> <i class="fab fa-discord"></i> </a> </div><div> <i>join the club!</i> </div></div><div class="footerC2"> <a href="./itools.html"> <img src="resources/images/iToolslogo.png" alt="iTools Logo" class="iToolsLogo"> </a> <div> <i>iTools Partner</i> </div></div></div></div>`;
    footer.innerHTML = footerRaw

}

// Navbar building
function buildNavbar() {
    let navElement = document.getElementById("newNavbar"),
        liArray = [],
        aArray = [],
        idArray = ["home", "gen1", "gen2", "gen3", "gen4", "gen5", "gpx"],
        //gen 6 idArray = ["home", "gen1", "gen2", "gen3", "gen4", "gen5", "gen6", "gpx"],
        urlArray= ["index.html", "gen1.html", "gen2.html", "gen3.html", "gen4.html", "gen5.html",  "gpx.html"],
        //gen 6 urlArray= ["index.html", "gen1.html", "gen2.html", "gen3.html", "gen4.html", "gen5.html", "gen6.html", "gpx.html"],
        textArray = ["Home", "Gen I", "Gen II", "Gen III", "Gen IV", "Gen VI", "GPX"];
        //gen 6 textArray = ["Home", "Gen I", "Gen II", "Gen III", "Gen IV", "Gen V", "Gen VI", "GPX"];
    for (let i = 0; i < 7; i++) {
        liArray[i] = document.createElement("li");
        aArray[i] = document.createElement("a");
        aArray[i].setAttribute("id", idArray[i]);
        aArray[i].setAttribute("href", urlArray[i]);
        text = document.createTextNode(textArray[i]);
        
        aArray[i].appendChild(text);
        liArray[i].appendChild(aArray[i]);
        liArray[i].style.width = "14.255%";
        //gen6 liArray[i].style.width = "12.475%";
        navElement.appendChild(liArray[i])
    }
    let pageIndex = document.documentElement.getAttribute("data-page");
    if (pageIndex == "itools") return;
    document.getElementById(pageIndex).classList.add("active");
}

// Navbar minimizing
function checkRes() {
    if (window.innerWidth <= 490) {
        document.getElementById("home").innerHTML = `<i class="fas fa-home faNavbar"></i>`
        document.getElementById("gen1").innerHTML = "I";
        document.getElementById("gen2").innerHTML = "II";
        document.getElementById("gen3").innerHTML = "III";
        document.getElementById("gen4").innerHTML = "IV";
        document.getElementById("gen5").innerHTML = "V";
        //document.getElementById("gen6").innerHTML = "VI";
        document.getElementById("gpx").innerHTML = `<i class="far fa-map faNavbar"></i>`;
    } else {
        return
    }
}

// Navbar sticky
function stickyNavbar() {
    let topElement = document.getElementById("top"),
        stubElement = document.getElementById("emptyStub"),
        navbar = document.getElementById("newNavbar"),
        offset = topElement.offsetHeight;
    if (window.pageYOffset >= offset) {
        /*navbar.style.position = "fixed";
        navbar.style.width = "100%";
        stubElement.style.height = "50px";*/
        navbar.classList.add("navbarSticky");
        stubElement.classList.add("stubElement")
    } else {
        /*navbar.style.position = "relative";
        stubElement.style.height = "0px";*/
        navbar.classList.remove("navbarSticky");
        stubElement.classList.remove("stubElement")
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


// Display frameshift message on top of the page
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

    } else {
        return
    }


}

// Calculate time till next migration and update countdown
function calcCountdown() {

    let timespan = countdown(null, migration, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
    //console.log(timespan.toString()),
        countdownSpan = document.getElementById("clock"),
        countdownText = `<countdown>${timespan.days} Days ${timespan.hours} Hours<br>${timespan.minutes} Minutes ${timespan.seconds} Seconds</countdown>`;
    countdownSpan.innerHTML = countdownText;
    migrationCountdown = timespan.value;
    
    if (migrationCountdown < 0) {
        clearInterval(clock);
        displayMigrationBanner();
        document.title = "Master Nest - Migration in Progress"
    }
    
    return timespan;
    
}

// Merge all HTML functions in a single call
function buildHTMLPage() {

    buildFooter();
    buildNavbar();
    checkRes();
    checkTheme();
    frameshiftNotice();

}
