var codeCountActive = 1
var clickCode
var codeString = localStorage.getItem("code")
var code = parseInt(codeString)

var playedBefore = localStorage.getItem("played before")
if (playedBefore === "yes") {
} else {
    alert("Confirm the reset to start the game")
    Reset()
}

function codeActivate(){
    setInterval(() => {
        codeReset()
        }, 10);
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
        costUbuntu.innerHTML = "<br><em>" + ucost + "</em>";
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
        localStorage.setItem("cost1", 1)
        localStorage.setItem("ucost", 15)
        localStorage.setItem("played before", "yes")
        location.reload()
    }
}
var ucostString = localStorage.getItem("ucost")
var ucost = parseInt(ucostString)
var cost1String = localStorage.getItem("cost1")
var cost1 = parseInt(cost1String)

function consoleLog() {
    console.log("Cost Increment", localStorage.getItem("cost1"));
    console.log("Cost of ubuntu systems ", localStorage.getItem("ucost"))
    console.log("Your code", localStorage.getItem("code"))
}

function uBuy() {
    code - ucost
    ucost = ucost + cost1
}

if (code === NaN) {
    code = 0
    alert("money has been reset due to a glich i apologise sorry about the game it happens with a refresh i think")
}