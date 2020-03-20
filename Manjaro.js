var codeCountActive = 1
var clickCode

var playedBefore = localStorage.getItem("code")
if (playedBefore >= 0) {
    var codeString = localStorage.getItem("code")
    code = parseInt(codeString)
} else {
    code = 0
    localStorage.setItem("linuxClickUpgraded", "0")
}

function codeActivate(){
    setInterval(() => {
        codeReset()
        }, 1);
}
 
function CookieUrl() {
    location.assign("https://orteil.dashnet.org/cookieclicker/")
}

function LinuxClick() {
    var clickUpgrade = localStorage.getItem("linuxClickUpgraded")
    if (clickUpgrade >= 0) {
        clickCode = 1
    } else {
        if (clickUpgrade >= 1) {
            clickCode = clickCode * 2
        } else {
            
        }
    }
    code = code + clickCode
}

var codeDiv = document.querySelector("#codeCount");
var costUbuntu = document.querySelector('#ucost')
var costDebian = document.querySelector('#dcost')


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
        localStorage.setItem("linuxClickUpgraded", 0)
        location.reload()
    }
}