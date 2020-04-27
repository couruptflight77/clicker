var codeCountActive = 1
var clickCode
var codeString = localStorage.getItem("code")
var code = parseInt(codeString)
var ucostString = localStorage.getItem("ucost")
var ucost = parseInt(ucostString)
var ccostString = localStorage.getItem("ccost")
var ccost = parseInt(ccostString)
var cost1String = localStorage.getItem("cost1")
var cost1 = parseInt(cost1String)
var cost2String = localStorage.getItem("cost2")
var cost2 = parseInt(cost2String)
var cost3String = localStorage.getItem("cost3")
var cost3 = parseInt(cost3String)
var codeDiv = document.querySelector("#codeCount");
var costUbuntu = document.querySelector('#ucost')
var usersUbuntu = document.querySelector('#uUsers')
var costDebian = document.querySelector('#dcost')
var usersDebian = document.querySelector('#dUsers')
var costCentOS = document.querySelector('#ccost')
var usersCentOS = document.querySelector('#cUsers')
var clickCodeCost = document.querySelector('#clickCost')
var playedBefore = localStorage.getItem("played before")
var uUsersString = localStorage.getItem("uUsers")
var uUsers = parseInt(uUsersString)
var dUsersString = localStorage.getItem("dUsers")
var dUsers = parseInt(dUsersString)
var cUsersString = localStorage.getItem("cUsers")
var cUsers = parseInt(cUsersString)
var clickUpgrade = parseInt(localStorage.getItem("linuxClickUpgraded")) 
var clickUpgradeCost
var infiniteLoop = localStorage.getItem("infinite ")
var dcostString = localStorage.getItem("dcost")
var dcost = parseInt(dcostString)

if (playedBefore === "yes") {
    null
} else {
    alert("Confirm the reset to start the game")
    Reset()
}


function codeActivate(){
    setInterval(() => {
        codeReset()
        }, 10);
        setInterval(() => {
            ubuntuUsersIncome()
        }, 1000);
        setInterval(() => {
            debianUsersIncome()
        }, 1000)
        LinuxClick()
        setInterval(() => {
            clickInfinite()
        }, 1000);
}
 
function CookieUrl() {
    location.assign("https://orteil.dashnet.org/cookieclicker/")
}

function LinuxClick() {
    if (clickUpgrade === 0) {
        clickCode = 1
        clickUpgradeCost = 100
    } else {
        if (clickUpgrade === 1) {
            clickCode = 2
            clickUpgradeCost = 500
        } else {
            if (clickUpgrade === 2)
            clickCode = 4
            clickUpgradeCost = 1000
        } if (clickUpgrade >= 3) {
            clickCode = clickUpgrade * 5
            clickUpgradeCost = 2500 * clickUpgrade
        }
    }
    code = code + clickCode
}

function codeReset() {
    if (codeCountActive === 1) {
        localStorage.removeItem("code")
        localStorage.setItem("code", code)
        localStorage.removeItem("ucost")
        localStorage.setItem("ucost", ucost)
        localStorage.removeItem("cost1")
        localStorage.setItem("cost1", cost1)
        localStorage.removeItem("dcost")
        localStorage.setItem("dcost", dcost)
        localStorage.removeItem("cost2")
        localStorage.setItem("cost2", cost2)
        localStorage.removeItem("uUsers")
        localStorage.setItem("uUsers", uUsers)
        localStorage.removeItem("dUsers")
        localStorage.setItem("dUsers", dUsers)
        localStorage.removeItem("cUsers")
        localStorage.setItem("cUsers", cUsers)
        localStorage.removeItem("linuxClickUpgraded")
        localStorage.setItem("linuxClickUpgraded", clickUpgrade)
        var codeF = code.toFixed(1)
        codeDiv.innerHTML = "<br><em>" + codeF + "</em>";
        costUbuntu.innerHTML = "<em>" + ucost + "</em>";
        costDebian.innerHTML = "<em>" + dcost + "</em>" 
        costCentOS.innerHTML = "<em>" + ccost + "</em>" 
        usersUbuntu.innerHTML = "<em>" + uUsers + "</em>"
        usersDebian.innerHTML = "<em>" + dUsers + "</em>"
        usersCentOS.innerHTML = "<em>" + cUsers + "</em>"
        clickCodeCost.innerHTML = "<br><em>" + clickUpgradeCost + "</em>"
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
        localStorage.setItem("cost2", 1)
        localStorage.setItem("ucost", 15)
        localStorage.setItem("dcost", 100)
        localStorage.setItem("ccost", 1000)
        localStorage.setItem("played before", "yes")
        localStorage.setItem("uUsers", 0)
        localStorage.setItem("dUsers", 0)
        localStorage.setItem("cUsers", 0)
        localStorage.setItem("infinite", false)
        location.reload()
    }
}

function uBuy() {
    if (code >= ucost){
    code = code - ucost
    ucost = ucost + cost1
    uUsers = uUsers + 1
    cost1 = cost1 + 1
    }
}

function dBuy() {
    if (code >= dcost){
        code = code - dcost
        dcost = dcost + cost2
        dUsers = dUsers + 1
        cost2 = cost2 + 1
    }
}

function cBuy() {
    if (code >= ccost){
        code = code - ccost
        ccost = ccost + cost3
        cUsers = cUsers + 1
        cost3 = cost3 + 1
    }
}



function ubuntuUsersIncome() {
    code = code + (uUsers * 0.1)    
}

function debianUsersIncome() {
    code = code + (dUsers * 1)
}

function centOSUserIncome(){
    code = code + (cUsers * 25)
}

function notANumber(){
    code = 0
    localStorage.removeItem("code")
    localStorage.setItem("code", 0)
    console.log("used")
}

function clickBuy(){
    if (code >= clickUpgradeCost){
        if (clickUpgradeCost > 0) {
            code = code - clickUpgradeCost
            clickUpgrade = clickUpgrade + 1
            LinuxClick()
            clickUpgrade
        }
    }
}

function clickInfinite(){
    if (infiniteLoop === true) {
        LinuxClick()
        fiveKDollars = 0
    }
}

var fiveKDollars = 500000

function buyInfinite(){
    if (code > fiveKDollars){
        infiniteLoop = true
        fiveKDollars = 0
    }
}