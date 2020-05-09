var codeCountActive = 1
var clickCode
var costB = 0
var buyAmount = 1
var ucostm
var dcostm
var ccostm
var tcostm
var mcostm
var scost1
var scost2
var scost3
var scost4
var scost5
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
const pressed1 = [];
const secretCode = "local";
const secretCode1 = "develope";

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log(localStorage);   
  }
});
window.addEventListener("keyup", e => {
  pressed1.push(e.key);
  pressed.splice(-secretCode1.length - 1, pressed1.length - secretCode1.length);
  if (pressed1.join("").includes(secretCode1)) {
    console.log("localStorage");   
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
        buy1()
        LinuxClick()
        disableScroll()
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
        if(buyAmount === 1){
            ucostm = ucost
            dcostm = dcost
            ccostm = ccost
            tcostm = tcost
            mcostm = mcost
        } else {
            if(buyAmount === 10){
                if(selectedLogo === 1){
                    var sucost = ucost
                    if(scost1 === cost1){

                    } else {
                        scost1 = cost1
                    }
                    var ucost10 = sucost
                    var ucost9 = ucost10 + scost1
                    scost1 = scost1 + 1
                    var ucost8 = ucost9 + scost1
                    scost1 = scost1 + 1
                    var ucost7 = ucost8 + scost1
                    scost1 = scost1 + 1
                    var ucost6 = ucost7 + scost1
                    scost1 = scost1 + 1
                    var ucost5 = ucost6 + scost1
                    scost1 = scost1 + 1
                    var ucost4 = ucost5 + scost1
                    scost1 = scost1 + 1
                    var ucost3 = ucost4 + scost1
                    scost1 = scost1 + 1
                    var ucost2 = ucost3 + scost1
                    scost1 = scost1 + 1
                    var ucost1 = ucost2 + scost1
                    ucostm = (ucost1 + ucost2 + ucost3 + ucost4 + ucost5 + ucost6 + ucost7 + ucost8 + ucost9 + ucost10)
                } else {
                    if(selectedLogo === 2){
                        var sdcost = dcost
                        scost2 = cost2
                        var dcost10 = sdcost
                        var dcost9 = dcost10 + scost2
                        scost2 = scost2 + 10
                        var dcost8 = dcost9 + scost2
                        scost2 = scost2 + 10
                        var dcost7 = dcost8 + scost2
                        scost2 = scost2 + 10
                        var dcost6 = dcost7 + scost2
                        scost2 = scost2 + 10
                        var dcost5 = dcost6 + scost2
                        scost2 = scost2 + 10
                        var dcost4 = dcost5 + scost2
                        scost2 = scost2 + 10
                        var dcost3 = dcost4 + scost2
                        scost2 = scost2 + 10
                        var dcost2 = dcost3 + scost2
                        scost2 = scost2 + 10
                        var dcost1 = dcost2 + scost2
                        dcostm = (dcost1 + dcost2 + dcost3 + dcost4 + dcost5 + dcost6 + dcost7 + dcost8 + dcost9 + dcost10)
                    } else {
                        if(selectedLogo === 3){
                            var sccost = ccost
                            scost3 = cost3
                            var ccost10 = sccost
                            var ccost9 = ccost10 + scost3
                            scost3 = scost3 + 15
                            var ccost8 = ccost9 + scost3
                            scost3 = scost3 + 15
                            var ccost7 = ccost8 + scost3
                            scost3 = scost3 + 15
                            var ccost6 = ccost7 + scost3
                            scost3 = scost3 + 15
                            var ccost5 = ccost6 + scost3
                            scost3 = scost3 + 15
                            var ccost4 = ccost5 + scost3
                            scost3 = scost3 + 15
                            var ccost3 = ccost4 + scost3
                            scost3 = scost3 + 15
                            var ccost2 = ccost3 + scost3
                            scost3 = scost3 + 1
                            var ccost1 = ccost2 + scost3
                            ccostm = (ccost1 + ccost2 + ccost3 + ccost4 + ccost5 + ccost6 + ccost7 + ccost8 + ccost9 + ccost10)
                        } else {
                            if(selectedLogo === 4){
                                var stcost = tcost
                                scost4 = cost4
                                var tcost10 = stcost
                                var tcost9 = tcost10 + scost4
                                scost4 = scost4 + 20
                                var tcost8 = tcost9 + scost4
                                scost4 = scost4 + 20
                                var tcost7 = tcost8 + scost4
                                scost4 = scost4 + 20
                                var tcost6 = tcost7 + scost4
                                scost4 = scost4 + 20
                                var tcost5 = tcost6 + scost4
                                scost4 = scost4 + 20
                                var tcost4 = tcost5 + scost4
                                scost4 = scost4 + 20
                                var tcost3 = tcost4 + scost4
                                scost4 = scost4 + 20
                                var tcost2 = tcost3 + scost4
                                scost4 = scost4 + 20
                                var tcost1 = tcost2 + scost4
                                tcostm = (tcost1 + tcost2 + tcost3 + tcost4 + tcost5 + tcost6 + tcost7 + tcost8 + tcost9 + tcost10)
                            } else {
                                if(selectedLogo === 5){
                                    var smcost = mcost
                                    scost5 = cost5
                                    var mcost10 = smcost
                                    var mcost9 = mcost10 + scost5
                                    scost5 = scost5 + 25
                                    var mcost8 = mcost9 + scost5
                                    scost5 = scost5 + 25
                                    var mcost7 = mcost8 + scost5
                                    scost5 = scost5 + 25
                                    var mcost6 = mcost7 + scost5
                                    scost5 = scost5 + 25
                                    var mcost5 = mcost6 + scost5
                                    scost5 = scost5 + 25
                                    var mcost4 = mcost5 + scost5
                                    scost5 = scost5 + 25
                                    var mcost3 = mcost4 + scost5
                                    scost5 = scost5 + 25
                                    var mcost2 = mcost3 + scost5
                                    scost5 = scost5 + 25
                                    var mcost1 = mcost2 + scost5
                                    mcostm = (mcost1 + mcost2 + mcost3 + mcost4 + mcost5 + mcost6 + mcost7 + mcost8 + mcost9 + mcost10)
                                }
                            }
                        }
                    }
                }
            }
        }
        var costN = 0
        var cLogo = 0
        if (selectedLogo === 1){
            costN = "Ubuntu"
            if (ucostm > 9999){
                if (ucostm > 9999999) {
                    if (ucostm > 9999999999){
                        ucostA = (ucostm / 1000000000) + "B"
                    } else {
                        ucostA = (ucostm / 1000000) + "M"
                    }
                } else {
                    ucostA = (ucostm / 1000) + "K"
                }
            } else {
                ucostA = ucostm
            }
            costBA = ucostA
            cLogo = [0]
        } else {
            if (selectedLogo === 2){
                costN = "Debian"
                if (dcostm > 9999){
                    if (dcostm > 9999999) {
                        if (dcostm > 9999999999){
                            dcostA = (dcostm / 1000000000) + "B"
                        } else {
                            dcostA = (dcostm / 1000000) + "M"
                        }
                    } else {
                        dcostA = (dcostm / 1000) + "K"
                    }
                } else {
                    dcostA = dcostm
                }
                costBA = dcostA
                cLogo = [1]
            } else {
                if (selectedLogo === 3){
                    costN = "CentOS"
                    if (ccostm > 9999){
                        if (ccostm > 9999999) {
                            if (ccostm > 9999999999){
                                ccostA = (ccostm / 1000000000) + "B"
                            } else {
                                ccostA = (ccostm / 1000000) + "M"
                            }
                        } else {
                            ccostA = (ccostm / 1000) + "K"
                        }
                    } else {
                        ccostA = ccostm
                    }
                    costBA = ccostA
                    cLogo = [2]
                } else {
                    if (selectedLogo === 4){
                    costN = "Talis"
                    if (tcostm > 9999){
                        if (tcostm > 9999999) {
                            if (tcostm > 9999999999){
                                tcostA = (tcostm / 1000000000) + "B"
                            } else {
                                tcostA = (tcostm / 1000000) + "M"
                            }
                        } else {
                            tcostA = (tcostm / 1000) + "K"
                        }
                    } else {
                        tcostA = tcostm
                    }
                    costBA = tcostA
                    cLogo = [3]
                    } else {
                        if (selectedLogo === 5){
                            costN = "Mint"
                            if (mcostm > 9999){
                                if (mcostm > 9999999) {
                                    if (mcostm > 9999999999){
                                        mcostA = (mcostm / 1000000000) + "B"
                                    } else {
                                        mcostA = (mcostm / 1000000) + "M"
                                    }
                                } else {
                                    mcostA = (mcostm / 1000) + "K"
                                }
                            } else {
                                mcostA = mcostm
                            }
                            costBA = mcostA
                            cLogo = [4]
                        }
                    }
                }
            }
        }
        var uUcostA = 0
        var dUcostA = 0
        var cUcostA = 0
        var tUcostA = 0
        var mUcostA = 0
        if (uUcost > 9999){
            if (uUcost > 9999999) {
                if (uUcost > 9999999999){
                    uUcostA = (uUcost / 1000000000) + "B"
                } else {
                    uUcostA = (uUcost / 1000000) + "M"
                }
            } else {
                uUcostA = (uUcost / 1000) + "K"
            }
        } else {
            uUcostA = uUcost
        }
        if (dUcost > 9999){
            if (dUcost > 9999999) {
                if (dUcost > 9999999999){
                    dUcostA = (dUcost / 1000000000) + "B"
                } else {
                    dUcostA = (dUcost / 1000000) + "M"
                }
            } else {
                dUcostA = (dUcost / 1000) + "K"
            }
        } else {
            dUcostA = dUcost
        }
        if (cUcost > 9999){
            if (cUcost > 9999999) {
                if (cUcost > 9999999999){
                    cUcostA = (cUcost / 1000000000) + "B"
                } else {
                    cUcostA = (cUcost / 1000000) + "M"
                }
            } else {
                cUcostA = (cUcost / 1000) + "K"
            }
        } else {
            cUcostA = cUcost
        }
        if (tUcost > 9999){
            if (tUcost > 9999999) {
                if (cUcost > 9999999999){
                    tUcostA = (tUcost / 1000000000) + "B"
                } else {
                    tUcostA = (tUcost / 1000000) + "M"
                }
            } else {
                tUcostA = (tUcost / 1000) + "K"
            }
        } else {
        tUcostA = tUcost
        }
        if (mUcost > 9999){
            if (mUcost > 9999999) {
                if (mUcost > 9999999999){
                    mUcostA = (mUcost / 1000000000) + "B"
                } else {
                    mUcostA = (mUcost / 1000000) + "M"
                }
            } else {
                mUcostA = (mUcost / 1000) + "K"
            }
        } else {
            mUcostA = mUcost
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
        costButton.innerHTML = "<em>" + costBA + "</em>";
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
        uupgrade.innerHTML = "<em>" + uUcostA + "</em>"
        dupgrade.innerHTML = "<em>" + dUcostA + "</em>"
        cupgrade.innerHTML = "<em>" + cUcostA + "</em>"
        tupgrade.innerHTML = "<em>" + tUcostA + "</em>"
        mupgrade.innerHTML = "<em>" + mUcostA + "</em>"
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
        localStorage.setItem("uUsers", 0)
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
        if (code >= ucostm){
            code = code - ucostm
            ucostm = ucostm + cost1
            uUsers = uUsers + buyAmount
            uUsers1 = uUsers1 + buyAmount
            if(buyAmount === 1){
                cost1 = cost1 + 1
            } else {
                if(buyAmount === 10){
                    cost1 = scost1
                }
            }
            ucost = ucostm
    }  
} else {
        if (selectedLogo === 2){
            if (code >= dcostm){
                code = code - dcostm
                dcostm = dcostm + cost2
                dUsers = dUsers + buyAmount
                dUsers1 = dUsers1 + buyAmount
                if(buyAmount === 1){
                    cost2 = cost2 + 10
                } else {
                    if(buyAmount === 10){
                        cost2 = scost2
                    }
                }
                dcost = dcostm
    }
} else {
    if (selectedLogo === 3){
       if (code >= ccostm){
       code = code - ccostm
       ccostm = ccostm + cost3
       cUsers = cUsers + buyAmount
       cUsers1 = cUsers1 + buyAmount
       if(buyAmount === 1){
        cost3 = cost3 + 15
    } else {
        if(buyAmount === 10){
            cost3 = scost3
        }
    }
       ccost = ccostm
       }
   } else {
       if (selectedLogo === 4) {
           if (code >= tcostm){
               code = code - tcostm
               tcostm = tcostm + cost4
               tUsers = tUsers + buyAmount
               tUsers1 = tUsers1 + buyAmount
               if(buyAmount === 1){
                cost4 = cost4 + 20
            } else {
                if(buyAmount === 10){
                    cost4 = scost4
                }
            }
               tcost = tcostm
           }
       } else {
           if (selectedLogo === 5){
            if (code >= mcostm){
                code = code - mcostm
                mcostm = mcostm + cost5
                mUsers = mUsers + buyAmount
                mUsers1 = mUsers1 + buyAmount
                if(buyAmount === 1){
                    cost5 = cost5 + 25
                } else {
                    if(buyAmount === 10){
                        cost5 = scost5
                    }
                }
                mcost = mcostm
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
        Ucost1 = Ucost1 + 1000
    }
}

function dUpgrade(){
    if (code >= dUcost){
        code = code - dUcost
        dUsersUpgrade = dUsersUpgrade + 1
        dUcost = dUcost + Ucost2
        Ucost2 = Ucost2 + 5000
    }
}

function cUpgrade(){
    if (code >= cUcost){
        code = code - cUcost
        cUsersUpgrade = cUsersUpgrade + 1
        cUcost = cUcost + Ucost3
        Ucost3 = Ucost3 + 15000
    }
}

function tUpgrade(){
    if (code >= tUcost){
        code = code - tUcost
        tUsersUpgrade = tUsersUpgrade + 1
        tUcost = tUcost + Ucost4
        Ucost4 = Ucost4 + 500000
    }
}

function mUpgrade(){
    if (code >= mUcost){
        code = code - mUcost
        mUsersUpgrade = mUsersUpgrade + 1
        mUcost = mUcost + Ucost5
        Ucost5 = Ucost5 + 5000000
    }
}

function away(){
    setTimeout(() => {
        awayA()
    }, 100)
}
function awayA(){
    console.log(codePSTA, secondsAway);
    var off = secondsAway * codePSTA
    if (off === 0){
        null
    } else {
    if (off > 9999){
        if (off > 9999999) {
            if (off > 9999999999){
                offD = (off / 1000000000) + "B"
            } else {
                offD = (off / 1000000) + "M"
            }
        } else {
            offD = (off / 1000) + "K"
        }
    } else {
        offD = off
    }
    var offDF = offD.toFixed(1)
    alert("while you were away you have earn't")
    alert(offDF)
    code = code + off
    off = 0
}
}

function disableScroll() { 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 

function sell(){
    if(selectedLogo === 1){
        if(uUsers > 0){
        cost1 = cost1 - 1
        ucost = ucost - cost1
        uUsers = uUsers - 1
        code = code + ucost
        }
    } else {
        if(selectedLogo === 2){
            if(dUsers > 0){
            cost2 = cost2 - 10
            dcost = dcost - cost2
            dUsers = dUsers - 1
            code = code + dcost
            }
        } else {
            if(selectedLogo === 3){
                if(cUsers > 0){
                cost3 = cost3 - 15
                ccost = ccost - cost3
                cUsers = cUsers - 1
                code = code + ccost
                }
            } else {
                if(selectedLogo === 4){
                    if(tUsers > 0){
                    cost4 = cost4 - 20
                    tcost = tcost - cost4
                    tUsers = tUsers - 1
                    code = code + tcost
                    }
                } else {
                    if(selectedLogo === 5){
                        if(mUsers > 0){
                        cost5 = cost5 - 25
                        mcost = mcost - cost5
                        mUsers = mUsers - 1
                        code = code + mcost
                        }
                    }
                }
            }
        }
    }
}
var costBA

function buy1(){
    buyAmount = 1
}

function buy10(){
    buyAmount = 10
}