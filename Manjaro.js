var codeCountActive = 1
var clickCode
var codeString = localStorage.getItem("code")
var code = parseInt(codeString)
var ucostString = localStorage.getItem("ucost")
var ucost = parseInt(ucostString)
var ccostString = localStorage.getItem("ccost")
var ccost = parseInt(ccostString)
var tcostString = localStorage.getItem("tcost")
var tcost = parseInt(tcostString)
var cost1String = localStorage.getItem("cost1")
var cost1 = parseInt(cost1String)
var cost2String = localStorage.getItem("cost2")
var cost2 = parseInt(cost2String)
var cost3String = localStorage.getItem("cost3")
var cost3 = parseInt(cost3String)
var cost4String = localStorage.getItem("cost4")
var cost4 = parseInt(cost4String)
var codeDiv = document.querySelector("#codeCount");
var code1Div = document.querySelector("#codeCountPS");
var costButton = document.querySelector('#cost')
var costName = document.querySelector('#operation')
var imageLogo = document.querySelector('#Image')
var usersUbuntu = document.querySelector('#uUsers')
var usersDebian = document.querySelector('#dUsers')
var usersCentOS = document.querySelector('#cUsers')
var usersTalis = document.querySelector('#tUsers')
var codePerUbuntu = document.querySelector('#userCPSU')
var codePerDebian = document.querySelector('#userCPSD')
var codePerCentOS = document.querySelector('#userCPSC')
var codePerTalis = document.querySelector('#userCPST')
var clickCodeCost = document.querySelector('#clickCost')
var clickCodeCost1 = document.querySelector('#clickCost1')
var playedBefore = localStorage.getItem("played before")
var uUsersString = localStorage.getItem("uUsers")
var uUsers = parseInt(uUsersString)
var dUsersString = localStorage.getItem("dUsers")
var dUsers = parseInt(dUsersString)
var cUsersString = localStorage.getItem("cUsers")
var cUsers = parseInt(cUsersString)
var tUsersString = localStorage.getItem("tUsers")
var tUsers = parseInt(tUsersString)
var clickUpgrade = parseInt(localStorage.getItem("linuxClickUpgraded"))
var clickUpgradeCost = 0
var codePS = 0
var infiniteLoop = localStorage.getItem("infinite")
var dcostString = localStorage.getItem("dcost")
var dcost = parseInt(dcostString)
var selectedLogo = 1
lg = [0]

var lg = []
lg[0] = "Logo1.jpg"
lg[1] = "Logo2.png"
lg[2] = "Logo3.png"
lg[3] = "Logo4.jpg"
lg[4] = "Logo5.jpg"

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
        userIncome()
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
        var costB = 0
        var costN = 0
        var cLogo = 0
        if (selectedLogo === 1){
            costN = "Ubuntu"
            costB = ucost
            cLogo = [0]
        } else {
            if (selectedLogo === 2){
                costN = "Debian"
                costB = dcost
                cLogo = [1]
            } else {
                if (selectedLogo === 3){
                    costN = "CentOS"
                    costB = ccost
                    cLogo = [2]
                } else {
                    costN = "Talis"
                    costB = tcost
                    cLogo = [3]
                }
            }
        }
        codePS = codePS + (uUsers * 0.1)
        codePS = codePS + (dUsers * 1)
        codePS = codePS + (cUsers * 25)
        codePS = codePS + (tUsers * 100)
        localStorage.removeItem("code")
        localStorage.setItem("code", code)
        localStorage.removeItem("ucost")
        localStorage.setItem("ucost", ucost)
        localStorage.removeItem("cost1")
        localStorage.setItem("cost1", cost1)
        localStorage.removeItem("dcost")
        localStorage.setItem("dcost", dcost)
        localStorage.removeItem("ccost")
        localStorage.setItem("ccost", ccost)
        localStorage.removeItem("tcost")
        localStorage.setItem("tcost", tcost)
        localStorage.removeItem("cost2")
        localStorage.setItem("cost2", cost2)
        localStorage.removeItem("cost3")
        localStorage.setItem("cost3", cost3)
        localStorage.removeItem("cost4")
        localStorage.setItem("cost4", cost4)
        localStorage.removeItem("uUsers")
        localStorage.setItem("uUsers", uUsers)
        localStorage.removeItem("dUsers")
        localStorage.setItem("dUsers", dUsers)
        localStorage.removeItem("cUsers")
        localStorage.setItem("cUsers", cUsers)
        localStorage.removeItem("tUsers")
        localStorage.setItem("tUsers", tUsers)
        localStorage.removeItem("linuxClickUpgraded")
        localStorage.setItem("linuxClickUpgraded", clickUpgrade)
        var codeF = code.toFixed(1)
        var uStats = (uUsers * 0.1).toFixed(1)
        codeDiv.innerHTML = "<br><em>" + codeF + "</em>";
        code1Div.innerHTML = "<em>" + codePSF + "</em>";
        costButton.innerHTML = "<em>" + costB + "</em>";
        costName.innerHTML = "<em>" + costN + "</em>";
        imageLogo.src = lg[cLogo]
        usersUbuntu.innerHTML = "<em>" + uUsers + "</em>"
        usersDebian.innerHTML = "<em>" + dUsers + "</em>"
        usersCentOS.innerHTML = "<em>" + cUsers + "</em>"
        usersTalis.innerHTML = "<em>" + tUsers + "</em>"
        codePerUbuntu.innerHTML = "<em>" + uStats  + "</em>"
        codePerDebian.innerHTML = "<em>" + dUsers * 1 + "</em>"
        codePerCentOS.innerHTML = "<em>" + cUsers * 25 + "</em>"
        codePerTalis.innerHTML = "<em>" + tUsers * 100 + "</em>"
        clickCodeCost.innerHTML = "<em>" + clickUpgradeCost + "</em>"
        clickCodeCost1.innerHTML = "<em>" + clickCode + "</em>"
        codePS = 0
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
        localStorage.setItem("cost3", 1)
        localStorage.setItem("cost4", 1)
        localStorage.setItem("ucost", 15)
        localStorage.setItem("dcost", 100)
        localStorage.setItem("ccost", 1000)
        localStorage.setItem("tcost", 25000)
        localStorage.setItem("played before", "yes")
        localStorage.setItem("uUsers", 0)
        localStorage.setItem("dUsers", 0)
        localStorage.setItem("cUsers", 0)
        localStorage.setItem("tUsers", 0)
        location.reload()
    }
}

function buy(){  
    if (selectedLogo === 1){
        if (code >= ucost){
            code = code - ucost
            ucost = ucost + cost1
            uUsers = uUsers + 1
            cost1 = cost1 + 1
    }  
} else {
        if (selectedLogo === 2){
            if (code >= dcost){
                code = code - dcost
                dcost = dcost + cost2
                dUsers = dUsers + 1
                cost2 = cost2 + 1
    }
} else {
    if (selectedLogo === 3){
       if (code >= ccost){
       code = code - ccost
       ccost = ccost + cost3
       cUsers = cUsers + 1
       cost3 = cost3 + 1
       }
   } else {
       if (selectedLogo === 4) {
           if (code >= tcost){
               code = code - tcost
               tcost = tcost + cost4
               tUsers = tUsers + 1
               cost4 = cost4 + 1
           }
       } else {
           if (selectedLogo === 5){
            if (code >= mcost){
                code = code - mcost
                mcost = mcost + cost5
                mUsers = mUsers + 1
                cost5 = cost5 + 1
            }
           }
       }
   }
}
}
}

function userIncome() {
    setInterval(() => {
        ubuntuUsersIncome()
    }, 1000);
    setTimeout(() => {
        userIncome1()
    }, 1)    
    setTimeout(() => {
        userIncome2()
    }, 2)    
    setTimeout(() => {
        userIncome3()
    }, 3)    
}

function userIncome1(){
    setInterval(() => {
        debianUsersIncome()
    }, 1000)
} 

function userIncome2(){
    setInterval(() => {
        centOSUserIncome()
    }, 1000)
}

function userIncome3(){
    setInterval(() => {
        talisUserIncome()
    }, 1000)
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

function talisUserIncome(){
    code = code + (tUsers * 100)
}

function notANumber(){
    code = 0
    localStorage.removeItem("code")
    localStorage.setItem("code", 0)
}

function clickBuy(){
    if (code >= clickUpgradeCost){
        if (clickUpgradeCost > 0) {
            code = code - clickUpgradeCost
            clickUpgrade = clickUpgrade + 1
            LinuxClick()
        }
    }
}

var fiveKDollars = 500000

function buyInfinite(){
    if (code >= fiveKDollars){
        infiniteLoop = true
        code = code - fiveKDollars
        fiveHundredKDollars = 0
    }
}

function up(){
    if (selectedLogo > 1){
        selectedLogo = selectedLogo - 1
    }
}

function down(){
    if (selectedLogo < 4){
        selectedLogo = selectedLogo + 1
    }
}

function aTenth(){
    code = code + 0.1
}