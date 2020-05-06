var codeCountActive = 1
var clickCode
var codeString = localStorage.getItem("code")
var code = parseInt(codeString)
var ucostString = localStorage.getItem("ucost")
var ucost = parseInt(ucostString)
var dcostString = localStorage.getItem("dcost")
var dcost = parseInt(dcostString)
var ccostString = localStorage.getItem("ccost")
var ccost = parseInt(ccostString)
var tcostString = localStorage.getItem("tcost")
var tcost = parseInt(tcostString)
var mcostString = localStorage.getItem("mcost")
var mcost = parseInt(mcostString)
var uUcostString = localStorage.getItem("uUcost")
var uUcost = parseInt(uUcostString)
var dUcostString = localStorage.getItem("dUcost")
var dUcost = parseInt(dUcostString)
var cUcostString = localStorage.getItem("cUcost")
var cUcost = parseInt(cUcostString)
var tUcostString = localStorage.getItem("tUcost")
var tUcost = parseInt(tUcostString)
var mUcostString = localStorage.getItem("mUcost")
var mUcost = parseInt(mUcostString)
var cost1String = localStorage.getItem("cost1")
var cost1 = parseInt(cost1String)
var cost2String = localStorage.getItem("cost2")
var cost2 = parseInt(cost2String)
var cost3String = localStorage.getItem("cost3")
var cost3 = parseInt(cost3String)
var cost4String = localStorage.getItem("cost4")
var cost4 = parseInt(cost4String)
var cost5String = localStorage.getItem("cost5")
var cost5 = parseInt(cost5String)
var Ucost1String = localStorage.getItem("Ucost1")
var Ucost1 = parseInt(Ucost1String)
var Ucost2String = localStorage.getItem("Ucost2")
var Ucost2 = parseInt(Ucost2String)
var Ucost3String = localStorage.getItem("Ucost3")
var Ucost3 = parseInt(Ucost3String)
var Ucost4String = localStorage.getItem("Ucost4")
var Ucost4 = parseInt(Ucost4String)
var Ucost5String = localStorage.getItem("Ucost5")
var Ucost5 = parseInt(Ucost5String)
var codeDiv = document.querySelector("#codeCount");
var code1Div = document.querySelector("#codeCountPS");
var costButton = document.querySelector('#cost')
var costName = document.querySelector('#operation')
var imageLogo = document.querySelector('#Image')
var usersUbuntu = document.querySelector('#uUsers')
var usersDebian = document.querySelector('#dUsers')
var usersCentOS = document.querySelector('#cUsers')
var usersTalis = document.querySelector('#tUsers')
var usersMint = document.querySelector('#mUsers')
var uupgrade = document.querySelector('#uUpgradeCost')
var dupgrade = document.querySelector('#dUpgradeCost')
var cupgrade = document.querySelector('#cUpgradeCost')
var tupgrade = document.querySelector('#tUpgradeCost')
var mupgrade = document.querySelector('#mUpgradeCost')
var codePerUbuntu = document.querySelector('#userCPSU')
var codePerDebian = document.querySelector('#userCPSD')
var codePerCentOS = document.querySelector('#userCPSC')
var codePerTalis = document.querySelector('#userCPST')
var codePerMint = document.querySelector('#userCPSM')
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
var mUsersString = localStorage.getItem("mUsers")
var mUsers = parseInt(mUsersString)
var uUsersUpgradeString = localStorage.getItem("uUsersUpgrade")
var uUsersUpgrade = parseInt(uUsersUpgradeString)
var dUsersUpgradeString = localStorage.getItem("dUsersUpgrade")
var dUsersUpgrade = parseInt(dUsersUpgradeString)
var cUsersUpgradeString = localStorage.getItem("cUsersUpgrade")
var cUsersUpgrade = parseInt(cUsersUpgradeString)
var tUsersUpgradeString = localStorage.getItem("tUsersUpgrade")
var tUsersUpgrade = parseInt(tUsersUpgradeString)
var mUsersUpgradeString = localStorage.getItem("mUsersUpgrade")
var mUsersUpgrade = parseInt(mUsersUpgradeString)
var clickUpgrade = parseInt(localStorage.getItem("linuxClickUpgraded"))
var clickUpgradeCost = 0
var codePS = 0
var codePSTA = 0
var selectedLogo = 1
var secondsAway = 0
lg = [0]
var aD = parseInt(localStorage.getItem("onlineD"))
var bD = new Date().getDate()
var dD = bD - aD
var secondsAwayD = dD * 86400

var aH = parseInt(localStorage.getItem("onlineH"))
var bH = new Date().getHours()
var dH = bH - aH
var secondsAwayH = dH * 3600

var aM = parseInt(localStorage.getItem("onlineM"))
var bM = new Date().getMinutes()
var dM = bM - aM
var secondsAwayM = dM * 60

var aS = parseInt(localStorage.getItem("onlineS"))
var bS = new Date().getSeconds()
var dS = bS - aS
var secondsAwayS = dS * 1

secondsAway = secondsAwayD + secondsAwayH + secondsAwayM + secondsAwayS

var uUsers1 = uUsers * uUsersUpgrade
var dUsers1 = dUsers * dUsersUpgrade
var cUsers1 = cUsers * cUsersUpgrade
var tUsers1 = tUsers * tUsersUpgrade
var mUsers1 = mUsers * mUsersUpgrade

const pressed = [];
const secretCode = "local";

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log(localStorage);   
  }
});

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
        away()
        code = code - clickCode
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
            if (ucost > 9999){
                if (ucost > 9999999) {
                    if (ucost > 9999999999){
                        ucost = (ucost / 1000000000) + "B"
                    } else {
                        ucost = (ucost / 1000000) + "M"
                    }
                } else {
                    ucost = (ucost / 1000) + "K"
                }
            } else {
                ucost = ucost
            }
            costB = ucost
            cLogo = [0]
        } else {
            if (selectedLogo === 2){
                costN = "Debian"
                if (dcost > 9999){
                    if (dcost > 9999999) {
                        if (dcost > 9999999999){
                            dcost = (dcost / 1000000000) + "B"
                        } else {
                            dcost = (dcost / 1000000) + "M"
                        }
                    } else {
                        dcost = (dcost / 1000) + "K"
                    }
                } else {
                    dcost = dcost
                }
                costB = dcost
                cLogo = [1]
            } else {
                if (selectedLogo === 3){
                    costN = "CentOS"
                    if (ccost > 9999){
                        if (ccost > 9999999) {
                            if (ccost > 9999999999){
                                ccost = (ccost / 1000000000) + "B"
                            } else {
                                ccost = (ccost / 1000000) + "M"
                            }
                        } else {
                            ccost = (ccost / 1000) + "K"
                        }
                    } else {
                        ccost = ccost
                    }
                    costB = ccost
                    cLogo = [2]
                } else {
                    if (selectedLogo === 4){
                    costN = "Talis"
                    if (tcost > 9999){
                        if (tcost > 9999999) {
                            if (tcost > 9999999999){
                                tcostK = (tcost / 1000000000) + "B"
                            } else {
                                tcostK = (tcost / 1000000) + "M"
                            }
                        } else {
                            tcostK = (tcost / 1000) + "K"
                        }
                    } else {
                        tcostK = tcost
                    }
                    costB = tcostK
                    cLogo = [3]
                    } else {
                        if (selectedLogo === 5){
                            costN = "Mint"
                            if (mcost > 9999){
                                if (mcost > 9999999) {
                                    if (mcost > 9999999999){
                                        mcostK = (mcost / 1000000000) + "B"
                                    } else {
                                        mcostK = (mcost / 1000000) + "M"
                                    }
                                } else {
                                    mcostK = (mcost / 1000) + "K"
                                }
                            } else {
                                mcostK = mcost
                            }
                            costB = mcostK
                            cLogo = [4]
                        }
                    }
                }
            }
        }
        uUsers1 = uUsers * uUsersUpgrade
        dUsers1 = dUsers * dUsersUpgrade
        cUsers1 = cUsers * cUsersUpgrade
        tUsers1 = tUsers * tUsersUpgrade
        mUsers1 = mUsers * mUsersUpgrade
        codePS = codePS + (uUsers1 * 0.1)
        codePS = codePS + (dUsers1 * 1)
        codePS = codePS + (cUsers1 * 25)
        codePS = codePS + (tUsers1 * 100)
        codePS = codePS + (mUsers1 * 1000)
        var codePSF = codePS.toFixed(1)
        localStorage.removeItem("code")
        localStorage.setItem("code", code)
        localStorage.removeItem("ucost")
        localStorage.setItem("ucost", ucost)
        localStorage.removeItem("dcost")
        localStorage.setItem("dcost", dcost)
        localStorage.removeItem("ccost")
        localStorage.setItem("ccost", ccost)
        localStorage.removeItem("tcost")
        localStorage.setItem("tcost", tcost)
        localStorage.removeItem("mcost")
        localStorage.setItem("mcost", mcost)
        localStorage.removeItem("uUcost")
        localStorage.setItem("uUcost", uUcost)
        localStorage.removeItem("dUcost")
        localStorage.setItem("dUcost", dUcost)
        localStorage.removeItem("cUcost")
        localStorage.setItem("cUcost", cUcost)
        localStorage.removeItem("tUcost")
        localStorage.setItem("tUcost", tUcost)
        localStorage.removeItem("mUcost")
        localStorage.setItem("mUcost", mUcost)
        localStorage.removeItem("cost1")
        localStorage.setItem("cost1", cost1)
        localStorage.removeItem("cost2")
        localStorage.setItem("cost2", cost2)
        localStorage.removeItem("cost3")
        localStorage.setItem("cost3", cost3)
        localStorage.removeItem("cost4")
        localStorage.setItem("cost4", cost4)
        localStorage.removeItem("cost5")
        localStorage.setItem("cost5", cost5)
        localStorage.removeItem("Ucost1")
        localStorage.setItem("Ucost1", Ucost1)
        localStorage.removeItem("Ucost2")
        localStorage.setItem("Ucost2", Ucost2)
        localStorage.removeItem("Ucost3")
        localStorage.setItem("Ucost3", Ucost3)
        localStorage.removeItem("Ucost4")
        localStorage.setItem("Ucost4", Ucost4)
        localStorage.removeItem("Ucost5")
        localStorage.setItem("Ucost5", Ucost5)
        localStorage.removeItem("uUsers")
        localStorage.setItem("uUsers", uUsers)
        localStorage.removeItem("dUsers")
        localStorage.setItem("dUsers", dUsers)
        localStorage.removeItem("cUsers")
        localStorage.setItem("cUsers", cUsers)
        localStorage.removeItem("tUsers")
        localStorage.setItem("tUsers", tUsers)
        localStorage.removeItem("mUsers")
        localStorage.setItem("mUsers", mUsers)
        localStorage.removeItem("uUsersUpgrade")
        localStorage.setItem("uUsersUpgrade", uUsersUpgrade)
        localStorage.removeItem("dUsersUpgrade")
        localStorage.setItem("dUsersUpgrade", dUsersUpgrade)
        localStorage.removeItem("cUsersUpgrade")
        localStorage.setItem("cUsersUpgrade", cUsersUpgrade)
        localStorage.removeItem("tUsersUpgrade")
        localStorage.setItem("tUsersUpgrade", tUsersUpgrade)
        localStorage.removeItem("mUsersUpgrade")
        localStorage.setItem("mUsersUpgrade", mUsersUpgrade)
        localStorage.removeItem("linuxClickUpgraded")
        localStorage.setItem("linuxClickUpgraded", clickUpgrade)
        localStorage.removeItem("onlineD")
        localStorage.setItem("onlineD", new Date().getDate())
        localStorage.removeItem("onlineM")
        localStorage.setItem("onlineM", new Date().getMinutes())
        localStorage.removeItem("onlineH")
        localStorage.setItem("onlineH", new Date().getHours())
        localStorage.removeItem("onlineS")
        localStorage.setItem("onlineS", new Date().getSeconds())
        var codeF = code.toFixed(1)
        var uStats = (uUsers1 * 0.1).toFixed(1)
        var codeFS = 0
        if (codeF > 9999){
            if (codeF > 9999999) {
                if (codeF > 9999999999){
                    codeF = (codeF / 1000000000) + "B"
                } else {
                    codeF = (codeF / 1000000) + "M"
                }
            } else {
                codeF = (codeF / 1000) + "K"
            }
        } else {
            codeF = codeF
        }
        codeDiv.innerHTML = "<br><em>" + codeF + "</em>";
        code1Div.innerHTML = "<em>" + codePSF + "</em>";
        costButton.innerHTML = "<em>" + costB + "</em>";
        costName.innerHTML = "<em>" + costN + "</em>";
        imageLogo.src = lg[cLogo]
        usersUbuntu.innerHTML = "<em>" + uUsers + "</em>"
        usersDebian.innerHTML = "<em>" + dUsers + "</em>"
        usersCentOS.innerHTML = "<em>" + cUsers + "</em>"
        usersTalis.innerHTML = "<em>" + tUsers + "</em>"
        usersMint.innerHTML = "<em>" + mUsers + "</em>"
        codePerUbuntu.innerHTML = "<em>" + uStats  + "</em>"
        codePerDebian.innerHTML = "<em>" + dUsers1 * 1 + "</em>"
        codePerCentOS.innerHTML = "<em>" + cUsers1 * 25 + "</em>"
        codePerTalis.innerHTML = "<em>" + tUsers1 * 100 + "</em>"
        codePerMint.innerHTML = "<em>" + mUsers1 * 1000 + "</em>"
        clickCodeCost.innerHTML = "<em>" + clickUpgradeCost + "</em>"
        clickCodeCost1.innerHTML = "<em>" + clickCode + "</em>"
        uupgrade.innerHTML = "<em>" + uUcost + "</em>"
        dupgrade.innerHTML = "<em>" + dUcost + "</em>"
        cupgrade.innerHTML = "<em>" + cUcost + "</em>"
        tupgrade.innerHTML = "<em>" + tUcost + "</em>"
        mupgrade.innerHTML = "<em>" + mUcost + "</em>"
        codePSTA = codePS        
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
        localStorage.setItem("cost2", 10)
        localStorage.setItem("cost3", 15)
        localStorage.setItem("cost4", 20)
        localStorage.setItem("cost5", 25)
        localStorage.setItem("Ucost1", 100)
        localStorage.setItem("Ucost2", 500)
        localStorage.setItem("Ucost3", 15000)
        localStorage.setItem("Ucost4", 500000)
        localStorage.setItem("Ucost5", 5000000)
        localStorage.setItem("ucost", 15)
        localStorage.setItem("dcost", 100)
        localStorage.setItem("ccost", 1100)
        localStorage.setItem("tcost", 12000)
        localStorage.setItem("mcost", 130000)
        localStorage.setItem("uUcost", 100)
        localStorage.setItem("dUcost", 500)
        localStorage.setItem("cUcost", 15000)
        localStorage.setItem("tUcost", 500000)
        localStorage.setItem("mUcost", 5000000)
        localStorage.setItem("played before", "yes")
        localStorage.setItem("uUsers", 0)
        localStorage.setItem("dUsers", 0)
        localStorage.setItem("cUsers", 0)
        localStorage.setItem("tUsers", 0)
        localStorage.setItem("mUsers", 0)
        localStorage.setItem("uUsersUpgrade", 1)
        localStorage.setItem("dUsersUpgrade", 1)
        localStorage.setItem("cUsersUpgrade", 1)
        localStorage.setItem("tUsersUpgrade", 1)
        localStorage.setItem("mUsersUpgrade", 1)
        localStorage.setItem("onlineD", new Date().getDate())
        localStorage.setItem("onlineM", new Date().getMinutes())
        localStorage.setItem("onlineH", new Date().getHours())
        localStorage.setItem("onlineS", new Date().getSeconds())
        location.reload()
    }
}

function buy(){  
    if (selectedLogo === 1){
        if (code >= ucost){
            code = code - ucost
            ucost = ucost + cost1
            uUsers = uUsers + 1
            uUsers1 = uUsers1 + 1
            cost1 = cost1 + 1
    }  
} else {
        if (selectedLogo === 2){
            if (code >= dcost){
                code = code - dcost
                dcost = dcost + cost2
                dUsers = dUsers + 1
                dUsers1 = dUsers1 + 1
                cost2 = cost2 + 10
    }
} else {
    if (selectedLogo === 3){
       if (code >= ccost){
       code = code - ccost
       ccost = ccost + cost3
       cUsers = cUsers + 1
       cUsers1 = cUsers1 + 1
       cost3 = cost3 + 15
       }
   } else {
       if (selectedLogo === 4) {
           if (code >= tcost){
               code = code - tcost
               tcost = tcost + cost4
               tUsers = tUsers + 1
               tUsers1 = tUsers1 + 1
               cost4 = cost4 + 20
           }
       } else {
           if (selectedLogo === 5){
            if (code >= mcost){
                code = code - mcost
                mcost = mcost + cost5
                mUsers = mUsers + 1
                mUsers1 = mUsers1 + 1
                cost5 = cost5 + 25
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
     setTimeout(() => {
        userIncome4()
    }, 4)    
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
function userIncome4(){
    setInterval(() => {
        mintUserIncome()
    }, 1000)
}

function ubuntuUsersIncome() {
    code = code + ((uUsers * 0.1) * uUsersUpgrade)
}

function debianUsersIncome() {
    code = code + ((dUsers * 1) * dUsersUpgrade)
}

function centOSUserIncome(){
    code = code + ((cUsers * 25) * cUsersUpgrade)
}

function talisUserIncome(){
    code = code + ((tUsers * 100) * tUsersUpgrade)
}
function mintUserIncome(){
    code = code + ((mUsers * 1000) * tUsersUpgrade)
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
            code = code - clickCode
        }
    }
}


function up(){
    if (selectedLogo > 1){
        selectedLogo = selectedLogo - 1
    }
}

function down(){
    if (selectedLogo < 5){
        selectedLogo = selectedLogo + 1
    }
}

function aTenth(){
    code = code + 0.1
}

function uUpgrade(){
    if (code >= uUcost){
        code = code - uUcost
        uUsersUpgrade = uUsersUpgrade + 1
        uUcost = uUcost + Ucost1
        Ucost1 = Ucost1 + 100
    }
}

function dUpgrade(){
    if (code >= dUcost){
        code = code - dUcost
        dUsersUpgrade = dUsersUpgrade + 1
        dUcost = dUcost + Ucost2
        Ucost2 = Ucost2 + 200
    }
}

function cUpgrade(){
    if (code >= cUcost){
        code = code - cUcost
        cUsersUpgrade = cUsersUpgrade + 1
        cUcost = cUcost + Ucost3
        Ucost3 = Ucost3 + 300
    }
}

function tUpgrade(){
    if (code >= tUcost){
        code = code - tUcost
        tUsersUpgrade = tUsersUpgrade + 1
        tUcost = tUcost + Ucost4
        Ucost4 = Ucost4 + 400
    }
}

function mUpgrade(){
    if (code >= mUcost){
        code = code - mUcost
        mUsersUpgrade = mUsersUpgrade + 1
        mUcost = mUcost + Ucost5
        Ucost5 = Ucost5 + 500
    }
}

function away(){
    setTimeout(() => {
        awayA()
    }, 1000)
}
function awayA(){
    console.log(codePSTA, secondsAway);
    var off = secondsAway * codePSTA
    if (off = 0){
        null
    } else {
    if (off > 9999){
        if (off > 9999999) {
            if (off > 9999999999){
                off = (off / 1000000000) + "B"
            } else {
                off = (off / 1000000) + "M"
            }
        } else {
            off = (off / 1000) + "K"
        }
    } else {
        off = off
    }
}
    alert("while you were away you have earn't")
    alert(off)
    code = code + off
}