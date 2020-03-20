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
        localStorage.removeItem("ucost")
        localStorage.setItem("ucost", ucost)
        localStorage.removeItem("cost1")
        localStorage.setItem("cost1", cost1)
        codeDiv.innerHTML = "<br><em>" + code + "</em>";    
    if (ucost >= 15) {
        
    }
    }
}

function Reset() {
    var youSure = prompt("confirm with Y")
    if (youSure === "Y") {
        codeCountActive = 0
        setTimeout(100)
        localStorage.clear()
        localStorage.setItem("code", 0)
        localStorage.setItem("linuxClickUpgraded", 0)
        location.reload()
    }
}
var ucostString = localStorage.getItem("ucost")
var ucost = parseInt(ucostString)
var cost1String = localStorage.getItem("cost1")
var cost1 = parseInt(cost1String)

function uBuy() {
    ucost = ucost + cost1
}