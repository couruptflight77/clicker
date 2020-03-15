var codeCountActive = 1

function codeActivate(){
    setInterval(() => {
        codeReset()
    }, 100);
}

var code
var codeLocal
var playedBefore = localStorage.getItem("code")
if (playedBefore >= 0) {
    var codeString = localStorage.getItem("code")
    code = parseInt(codeString)
} else {
    code = 0
}

function CookieUrl() {
    location.assign("https://orteil.dashnet.org/cookieclicker/")
}

function LinuxClick() {
    code = code + 1
}

var codeDiv = document.querySelector("#codeCount");

function codeReset() {
    if (codeCountActive === 1) {
    localStorage.removeItem("code")
    localStorage.setItem("code", code)
    codeDiv.innerHTML = "<br><em>" + code + "</em>";
    }
}

function Reset() {
    var youSure = prompt("confirm with y")
    if (youSure === "y") {
        codeCountActive = 0
        setTimeout(100)
        localStorage.clear()
        localStorage.setItem("code", 0)
        location.reload()
    }
}