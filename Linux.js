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
var codePSNS = 0
var scost4
var scost5
var fcostm
var scostm
var rcostm
var uStatsA
var uUsers1A
var dUsers1A
var cUsers1A
var tUsers1A
var mUsers1A
var fUsers1A
var sUsers1A
var rUsers1A
var maUsers1A
var aUsers1A
var macostm
var acostm
var scost6
var scost7
var scost8
var scost9
var scost10
var ucostA
var dcostA
var ccostA
var tcostA
var mcostA
var fcostA
var scostA
var rcostA
var mcostA
var acostA
var olducost
var olddcost
var oldccost
var oldtcost
var oldmcost
var oldfcost
var oldscost
var oldrcost
var oldmacost
var oldacost
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
var uUcost = localStorage.getItem("uUcost")
var dUcost = localStorage.getItem("dUcost")
var cUcost = localStorage.getItem("cUcost")
var tUcost = localStorage.getItem("tUcost")
var mUcost = localStorage.getItem("mUcost")
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
var lifeCurrentString = localStorage.getItem("currentLife")
var lifeCurrent = parseInt(lifeCurrentString)
var fcostString = localStorage.getItem("fcost")
var fcost = parseInt(fcostString)
var scostString = localStorage.getItem("scost")
var scost = parseInt(scostString)
var rcostString = localStorage.getItem("rcost")
var rcost = parseInt(rcostString)
var macostString = localStorage.getItem("macost")
var macost = parseInt(macostString)
var acostString = localStorage.getItem("acost")
var acost = parseInt(acostString)
var fUcost = localStorage.getItem("fUcost")
var sUcost = localStorage.getItem("sUcost")
var rUcost = localStorage.getItem("rUcost")
var maUcost = localStorage.getItem("maUcost")
var aUcost = localStorage.getItem("aUcost")
var cost6String = localStorage.getItem("cost6")
var cost6 = parseInt(cost6String)
var cost7String = localStorage.getItem("cost7")
var cost7 = parseInt(cost7String)
var cost8String = localStorage.getItem("cost8")
var cost8 = parseInt(cost8String)
var cost9String = localStorage.getItem("cost9")
var cost9 = parseInt(cost9String)
var cost10String = localStorage.getItem("cost10")
var cost10 = parseInt(cost10String)
var Ucost6String = localStorage.getItem("Ucost6")
var Ucost6 = parseInt(Ucost6String)
var Ucost7String = localStorage.getItem("Ucost7")
var Ucost7 = parseInt(Ucost7String)
var Ucost8String = localStorage.getItem("Ucost8")
var Ucost8 = parseInt(Ucost8String)
var Ucost9String = localStorage.getItem("Ucost9")
var Ucost9 = parseInt(Ucost9String)
var Ucost10String = localStorage.getItem("Ucost10")
var Ucost10 = parseInt(Ucost10String)
// end new
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
var usersFedora = document.querySelector('#fUsers')
var usersSlaveware = document.querySelector('#sUsers')
var usersRedHat = document.querySelector('#rUsers')
var usersManjaro = document.querySelector('#maUsers')
var usersArch = document.querySelector('#aUsers')
var fupgrade = document.querySelector('#fUpgradeCost')
var supgrade = document.querySelector('#sUpgradeCost')
var rupgrade = document.querySelector('#rUpgradeCost')
var maupgrade = document.querySelector('#maUpgradeCost')
var aupgrade = document.querySelector('#aUpgradeCost')
var codePerFedora = document.querySelector('#userCPSF')
var codePerSlaveware = document.querySelector('#userCPSS')
var codePerRedhat = document.querySelector('#userCPSR')
var codePerManjaro = document.querySelector('#userCPSMA')
var codePerArch = document.querySelector('#userCPSA')
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
var fUsersUpgradeString = localStorage.getItem("fUsersUpgrade")
var fUsersUpgrade = parseInt(fUsersUpgradeString)
var sUsersUpgradeString = localStorage.getItem("sUsersUpgrade")
var sUsersUpgrade = parseInt(sUsersUpgradeString)
var rUsersUpgradeString = localStorage.getItem("rUsersUpgrade")
var rUsersUpgrade = parseInt(rUsersUpgradeString)
var maUsersUpgradeString = localStorage.getItem("maUsersUpgrade")
var maUsersUpgrade = parseInt(maUsersUpgradeString)
var aUsersUpgradeString = localStorage.getItem("aUsersUpgrade")
var aUsersUpgrade = parseInt(aUsersUpgradeString)
var fUsersString = localStorage.getItem("fUsers")
var fUsers = parseInt(fUsersString)
var sUsersString = localStorage.getItem("sUsers")
var sUsers = parseInt(sUsersString)
var rUsersString = localStorage.getItem("rUsers")
var rUsers = parseInt(rUsersString)
var maUsersString = localStorage.getItem("maUsers")
var maUsers = parseInt(maUsersString)
var aUsersString = localStorage.getItem("aUsers")
var aUsers = parseInt(aUsersString)
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

var aMTH = parseInt(localStorage.getItem("onlineMTH"))
var bMTH = new Date().getMonth()
var dMTH = bMTH - aMTH
var secondsAwayMTH = dMTH * 2628000

var aYr = parseInt(localStorage.getItem("onlineYr"))
var bYr = new Date().getFullYear()
var dYr = bYr - aYr
var secondsAwayYr = dYr * 3153600

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

secondsAway = secondsAwayD + secondsAwayH + secondsAwayM + secondsAwayS + secondsAwayMTH + secondsAwayYr

var uUsers1 = uUsers * uUsersUpgrade
var dUsers1 = dUsers * dUsersUpgrade
var cUsers1 = cUsers * cUsersUpgrade
var tUsers1 = tUsers * tUsersUpgrade
var mUsers1 = mUsers * mUsersUpgrade
var fUsers1 = fUsers * fUsersUpgrade
var sUsers1 = sUsers * sUsersUpgrade
var rUsers1 = rUsers * rUsersUpgrade
var maUsers1 = maUsers * maUsersUpgrade
var aUsers1 = aUsers * aUsersUpgrade

const pressed = [];
const pressed1 = [];
const pressed2 = [];
const secretCode = "local";
const secretCode1 = "develope";
const secretCode2 = "exit";

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log(localStorage);   
  }
});
window.addEventListener("keyup", e => {
  pressed1.push(e.key);
  pressed1.splice(-secretCode1.length - 1, pressed1.length - secretCode1.length);
  if (pressed1.join("").includes(secretCode1)) {
    console.log("localStorage");   
  }
});

var lg = []
lg[0] = "linux Logo's/Logo1.jpg"
lg[1] = "linux Logo's/Logo2.png"
lg[2] = "linux Logo's/Logo3.png"
lg[3] = "linux Logo's/Logo4.jpg"
lg[4] = "linux Logo's/Logo5.jpg"
lg[5] = "linux Logo's/Logo6.png"
lg[6] = "linux Logo's/Logo7.jpeg"
lg[7] = "linux Logo's/Logo8.png"
lg[8] = "linux Logo's/Logo9.png"
lg[9] = "linux Logo's/Logo10.png"

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
        var uNaN = isNaN(ucost)
        if(uNaN == true){
            uUsers = uUsers - 1
            cost1 = cost1 - (2 * 1)
            ucost = olducost
            code = code + ucost
            code = code + ucost
            // alert("Your purchase was reset due to an issue")
        } else {
            olducost = ucost
            localStorage.removeItem("ucost")
            localStorage.setItem("ucost", ucost)
        }
        var dNaN = isNaN(ucost)
        if(dNaN == true){
            dUsers = dUsers - 1
            cost2 = cost2 - (25 * 1)
            dcost = olddcost
            code = code + dcost
            // alert("Your purchase was reset due to an issue")
        } else {
            olddcost = dcost
            localStorage.removeItem("dcost")
            localStorage.setItem("dcost", dcost)
        }
        var cNaN = isNaN(ccost)
        if(cNaN == true){
            cUsers = cUsers - 1
            cost3 = cost3 - (150 * 1)
            ccost = oldccost
            code = code + ccost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldccost = ccost
            localStorage.removeItem("ccost")
            localStorage.setItem("ccost", ccost)
        }
        var tNaN = isNaN(tcost)
        if(tNaN == true){
            tUsers = tUsers - 1
            cost4 = cost4 - (300 * 1)
            tcost = oldtcost
            code = code + tcost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldtcost = tcost
            localStorage.removeItem("tcost")
            localStorage.setItem("tcost", tcost)
        }
        var mNaN = isNaN(mcost)
        if(mNaN == true){
            mUsers = mUsers - 1
            cost5 = cost5 - (5000 * 1)
            mcost = oldmcost
            code = code + mcost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldmcost = mcost
            localStorage.removeItem("mcost")
            localStorage.setItem("mcost", mcost)
        }
        var fNaN = isNaN(fcost)
        if(fNaN == true){
            fUsers = fUsers - 1
            cost6 = cost6 - (10000 * 1)
            fcost = oldfcost
            code = code + fcost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldfcost = fcost
            localStorage.removeItem("fcost")
            localStorage.setItem("fcost", fcost)
        }
        var sNaN = isNaN(scost)
        if(sNaN == true){
            sUsers = sUsers - 1
            cost7 = cost7 - (25000 * 1)
            scost = oldscost
            code = code + scost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldscost = scost
            localStorage.removeItem("scost")
            localStorage.setItem("scost", scost)
        }
        var rNaN = isNaN(rcost)
        if(rNaN == true){
            rUsers = rUsers - 1
            cost8 = cost8 - (500000 * 1)
            rcost = oldrcost
            code = code + rcost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldrcost = rcost
            localStorage.removeItem("rcost")
            localStorage.setItem("rcost", rcost)
        }
        var maNaN = isNaN(macost)
        if(maNaN == true){
            maUsers = maUsers - 1
            cost9 = cost9 - (1000000 * 1)
            macost = oldmacost
            code = code + macost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldmacost = macost
            localStorage.removeItem("macost")
            localStorage.setItem("macost", macost)
        }
        var aNaN = isNaN(acost)
        if(aNaN == true){
            aUsers = aUsers - 1
            cost10 = cost10 - (1 * 1)
            acost = oldacost
            code = code + acost
            // alert("Your purchase was reset due to an issue")
        } else {
            oldacost = acost
            localStorage.removeItem("acost")
            localStorage.setItem("acost", acost)
        }
        ucostm = ucost
            dcostm = dcost
            ccostm = ccost
            tcostm = tcost
            mcostm = mcost
            fcostm = fcost
            scostm = scost
            rcostm = rcost
            macostm = macost
            acostm = acost
        if(buyAmount === 1){
            ucostm = ucost
            dcostm = dcost
            ccostm = ccost
            tcostm = tcost
            mcostm = mcost
            fcostm = fcost
            scostm = scost
            rcostm = rcost
            macostm = macost
            acostm = acost
        }
        if(isNaN(code) == true){
            code = 0
        }
        lifeMultiplyer = lifeCurrent * 25 / 100 + 1
        var costN = 0
        var cLogo = 0
        if (selectedLogo === 1){
            costN = "Ubuntu"
            if (ucostm > 999){
                if (ucostm > 999999) {
                    if (ucostm > 999999999){
                        ucostA = (ucostm / 1000000000) .toFixed(1) + "B"
                    } else {
                        ucostA = (ucostm / 1000000) .toFixed(1) + "M"
                    }
                } else {
                    ucostA = (ucostm / 1000) .toFixed(1) + "K"
                }
            } else {
                ucostA = ucostm
            }
            costBA = ucostA
            cLogo = [0]
        } else {
            if (selectedLogo === 2){
                costN = "Debian"
                if (dcostm > 999){
                    if (dcostm > 999999) {
                        if (dcostm > 999999999){
                            dcostA = (dcostm / 1000000000) .toFixed(1) + "B"
                        } else {
                            dcostA = (dcostm / 1000000) .toFixed(1) + "M"
                        }
                    } else {
                        dcostA = (dcostm / 1000) .toFixed(1) + "K"
                    }
                } else {
                    dcostA = dcostm
                }
                costBA = dcostA
                cLogo = [1]
            } else {
                if (selectedLogo === 3){
                    costN = "CentOS"
                    if (ccostm > 999){
                        if (ccostm > 999999) {
                            if (ccostm > 999999999){
                                ccostA = (ccostm / 1000000000) .toFixed(1) + "B"
                            } else {
                                ccostA = (ccostm / 1000000) .toFixed(1) + "M"
                            }
                        } else {
                            ccostA = (ccostm / 1000) .toFixed(1) + "K"
                        }
                    } else {
                        ccostA = ccostm
                    }
                    costBA = ccostA
                    cLogo = [2]
                } else {
                    if (selectedLogo === 4){
                    costN = "Talis"
                    if (tcostm > 999){
                        if (tcostm > 999999) {
                            if (tcostm > 999999999){
                                tcostA = (tcostm / 1000000000) .toFixed(1) + "B"
                            } else {
                                tcostA = (tcostm / 1000000) .toFixed(1) + "M"
                            }
                        } else {
                            tcostA = (tcostm / 1000) .toFixed(1) + "K"
                        }
                    } else {
                        tcostA = tcostm
                    }
                    costBA = tcostA
                    cLogo = [3]
                    } else {
                        if (selectedLogo === 5){
                            costN = "Mint"
                            if (mcostm > 999){
                                if (mcostm > 999999) {
                                    if (mcostm > 999999999){
                                        mcostA = (mcostm / 1000000000) .toFixed(1) + "B"
                                    } else {
                                        mcostA = (mcostm / 1000000) .toFixed(1) + "M"
                                    }
                                } else {
                                    mcostA = (mcostm / 1000) .toFixed(1) + "K"
                                }
                            } else {
                                mcostA = mcostm
                            }
                            costBA = mcostA
                            cLogo = [4]
                        } else {
                            if(selectedLogo === 6){
                                costN = "Fedora"
                            if (fcostm > 999){
                                if (fcostm > 999999) {
                                    if (fcostm > 999999999){
                                        fcostA = (fcostm / 1000000000) .toFixed(1) + "B"
                                    } else {
                                        fcostA = (fcostm / 1000000) .toFixed(1) + "M"
                                    }
                                } else {
                                    fcostA = (fcostm / 1000) .toFixed(1) + "K"
                                }
                            } else {
                                fcostA = fcostm
                            }
                            costBA = fcostA
                            cLogo = [5]
                            } else {
                                if(selectedLogo === 7){
                                    costN = "Slaveware"
                            if (scostm > 999){
                                if (scostm > 999999) {
                                    if (scostm > 999999999){
                                        scostA = (scostm / 1000000000) .toFixed(1) + "B"
                                    } else {
                                        scostA = (scostm / 1000000) .toFixed(1) + "M"
                                    }
                                } else {
                                    scostA = (scostm / 1000) .toFixed(1) + "K"
                                }
                            } else {
                                scostA = scostm
                            }
                            costBA = scostA
                            cLogo = [6]
                                } else {
                                    if(selectedLogo === 8){
                                        costN = "Red Hat"
                            if (rcostm > 999){
                                if (rcostm > 999999) {
                                    if (rcostm > 999999999){
                                        rcostA = (rcostm / 1000000000) .toFixed(1) + "B"
                                    } else {
                                        rcostA = (rcostm / 1000000) .toFixed(1) + "M"
                                    }
                                } else {
                                    rcostA = (rcostm / 1000) .toFixed(1) + "K"
                                }
                            } else {
                                rcostA = rcostm
                            }
                            costBA = rcostA
                            cLogo = [7]
                                    } else {
                                        if(selectedLogo === 9){
                                            costN = "Manjaro"
                            if (macostm > 999){
                                if (macostm > 999999) {
                                    if (macostm > 999999999){
                                        macostA = (macostm / 1000000000) .toFixed(1) + "B"
                                    } else {
                                        macostA = (macostm / 1000000) .toFixed(1) + "M"
                                    }
                                } else {
                                    macostA = (macostm / 1000) .toFixed(1) + "K"
                                }
                            } else {
                                macostA = macostm
                            }
                            costBA = macostA
                            cLogo = [8]
                                        } else {
                                            if(selectedLogo === 10){
                                                costN = "Arch"
                                                if (acostm > 999){
                                                    if (acostm > 999999) {
                                                        if (acostm > 999999999){
                                                            acostA = (acostm / 1000000000) .toFixed(1) + "B"
                                                        } else {
                                                            acostA = (acostm / 1000000) .toFixed(1) + "M"
                                                        }
                                                    } else {
                                                        acostA = (acostm / 1000) .toFixed(1) + "K"
                                                    }
                                                } else {
                                                    acostA = acostm
                                                }
                                                costBA = acostA
                                                cLogo = [9]
                                            }
                                        }
                                    }
                                }
                            }
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
        fUsers1 = fUsers * fUsersUpgrade
        sUsers1 = sUsers * sUsersUpgrade
        rUsers1 = rUsers * rUsersUpgrade
        maUsers1 = maUsers * maUsersUpgrade
        aUsers1 = aUsers * aUsersUpgrade
        codePS = codePS + (uUsers1 * 0.1)
        codePS = codePS + (dUsers1 * 1)
        codePS = codePS + (cUsers1 * 8)
        codePS = codePS + (tUsers1 * 47)
        codePS = codePS + (mUsers1 * 260)
        codePS = codePS + (fUsers1 * 1400)
        codePS = codePS + (sUsers1 * 7800)
        codePS = codePS + (rUsers1 * 44000)
        codePS = codePS + (maUsers1 * 260000)
        codePS = codePS + (aUsers1 * 1600000)
        codePSNS = codePS
        if (codePS > 999){
            if (codePS > 999999) {
                if (codePS > 999999999){
                    codePS = (codePS / 1000000000) .toFixed(1) + "B"
                } else {
                    codePS = (codePS / 1000000) .toFixed(1) + "M"
                }
            } else {
                codePS = (codePS / 1000) .toFixed(1) + "K"
            }
        } else {
            codePS = codePS.toFixed(1)
        }
        var codePSF = codePS    
        localStorage.removeItem("code")
        localStorage.setItem("code", code)
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
        //new
        localStorage.removeItem("fcost")
        localStorage.setItem("fcost", fcost)
        localStorage.removeItem("scost")
        localStorage.setItem("scost", scost)
        localStorage.removeItem("rcost")
        localStorage.setItem("rcost", rcost)
        localStorage.removeItem("macost")
        localStorage.setItem("macost", macost)
        localStorage.removeItem("acost")
        localStorage.setItem("acost", acost)
        localStorage.removeItem("fUcost")
        localStorage.setItem("fUcost", fUcost)
        localStorage.removeItem("sUcost")
        localStorage.setItem("sUcost", sUcost)
        localStorage.removeItem("rUcost")
        localStorage.setItem("rUcost", rUcost)
        localStorage.removeItem("maUcost")
        localStorage.setItem("maUcost", maUcost)
        localStorage.removeItem("aUcost")
        localStorage.setItem("aUcost", aUcost)
        localStorage.removeItem("cost6")
        localStorage.setItem("cost6", cost6)
        localStorage.removeItem("cost7")
        localStorage.setItem("cost7", cost7)
        localStorage.removeItem("cost8")
        localStorage.setItem("cost8", cost8)
        localStorage.removeItem("cost9")
        localStorage.setItem("cost9", cost9)
        localStorage.removeItem("cost10")
        localStorage.setItem("cost10", cost10)
        localStorage.removeItem("Ucost6")
        localStorage.setItem("Ucost6", Ucost6)
        localStorage.removeItem("Ucost7")
        localStorage.setItem("Ucost7", Ucost7)
        localStorage.removeItem("Ucost8")
        localStorage.setItem("Ucost8", Ucost8)
        localStorage.removeItem("Ucost9")
        localStorage.setItem("Ucost9", Ucost9)
        localStorage.removeItem("Ucost10")
        localStorage.setItem("Ucost10", Ucost10)
        localStorage.removeItem("fUsers")
        localStorage.setItem("fUsers", fUsers)
        localStorage.removeItem("sUsers")
        localStorage.setItem("sUsers", sUsers)
        localStorage.removeItem("rUsers")
        localStorage.setItem("rUsers", rUsers)
        localStorage.removeItem("maUsers")
        localStorage.setItem("maUsers", maUsers)
        localStorage.removeItem("aUsers")
        localStorage.setItem("aUsers", aUsers)
        localStorage.removeItem("fUsersUpgrade")
        localStorage.setItem("fUsersUpgrade", fUsersUpgrade)
        localStorage.removeItem("sUsersUpgrade")
        localStorage.setItem("sUsersUpgrade", sUsersUpgrade)
        localStorage.removeItem("rUsersUpgrade")
        localStorage.setItem("rUsersUpgrade", rUsersUpgrade)
        localStorage.removeItem("maUsersUpgrade")
        localStorage.setItem("maUsersUpgrade", maUsersUpgrade)
        localStorage.removeItem("aUsersUpgrade")
        localStorage.setItem("aUsersUpgrade", aUsersUpgrade)
        localStorage.removeItem("linuxClickUpgraded")
        localStorage.setItem("linuxClickUpgraded", clickUpgrade)
        localStorage.removeItem("onlineYr")
        localStorage.setItem("onlineYr", new Date().getFullYear())
        localStorage.removeItem("onlineMTH")
        localStorage.setItem("onlineMTH", new Date().getMonth())
        localStorage.removeItem("onlineD")
        localStorage.setItem("onlineD", new Date().getDate())
        localStorage.removeItem("onlineM")
        localStorage.setItem("onlineM", new Date().getMinutes())
        localStorage.removeItem("onlineH")
        localStorage.setItem("onlineH", new Date().getHours())
        localStorage.removeItem("onlineS")
        localStorage.setItem("onlineS", new Date().getSeconds())
        var codeF = code.toFixed(1)
        var uStats = (uUsers1 * 0.1)
        if (codeF > 999){
            if (codeF > 999999) {
                if (codeF > 999999999){
                    if(codeF > 999999999999){
                        codeF = (codeF / 1000000000000).toFixed(1) + "T"
                    }
                    codeF = (codeF / 1000000000) .toFixed(1) + "B"
                } else {
                    codeF = (codeF / 1000000) .toFixed(1) + "M"
                }
            } else {
                codeF = (codeF / 1000) .toFixed(1) + "K"
            }
        } else {
            codeF = codeF
        }
        if (uStats > 999){
            if (uStats > 999999) {
                if (uStats > 999999999){
                    if(uStats > 999999999999){
                        uStatsA = (uStats / 1000000000000).toFixed(1) + "T"
                    }
                    uStatsA = (uStats / 1000000000) .toFixed(1) + "B"
                } else {
                    uStatsA = (uStats / 1000000) .toFixed(1) + "M"
                }
            } else {
                uStatsA = (uStats / 1000) .toFixed(1) + "K"
            }
        } else {
            uStatsA = uStats.toFixed(1)
        }
        if (dUsers1 > 999){
            if (dUsers1 > 999999) {
                if (dUsers1 > 999999999){
                    if(dUsers1 > 999999999999){
                        dUsers1A = (dUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    dUsers1A = (dUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    dUsers1A = (dUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                dUsers1A = (dUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            dUsers1A = dUsers1
        }
        cUsers1 = cUsers1 * 8
        if (cUsers1 > 999){
            if (cUsers1 > 999999) {
                if (cUsers1 > 999999999){
                    if(cUsers1 > 999999999999){
                        cUsers1A = (cUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    cUsers1A = (cUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    cUsers1A = (cUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                cUsers1A = (cUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            cUsers1A = cUsers1
        }
        tUsers1 = tUsers1 * 47
        if (tUsers1 > 999){
            if (tUsers1 > 999999) {
                if (tUsers1 > 999999999){
                    if(tUsers1 > 999999999999){
                        tUsers1A = (tUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    tUsers1A = (tUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    tUsers1A = (tUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                tUsers1A = (tUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            tUsers1A = tUsers1
        }
        mUsers1 = mUsers1 * 260
        if (mUsers1 > 999){
            if (mUsers1 > 999999) {
                if (mUsers1 > 999999999){
                    if(mUsers1 > 999999999999){
                        mUsers1A = (mUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    mUsers1A = (mUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    mUsers1A = (mUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                mUsers1A = (mUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            mUsers1A = mUsers1
        }
        fUsers1 = fUsers1 * 1400
        if (fUsers1 > 999){
            if (fUsers1 > 999999) {
                if (fUsers1 > 999999999){
                    if(fUsers1 > 999999999999){
                        fUsers1A = (fUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    fUsers1A = (fUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    fUsers1A = (fUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                fUsers1A = (fUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            fUsers1A = fUsers1
        }
        sUsers1 = sUsers1 * 7800
        if (sUsers1 > 999){
            if (sUsers1 > 999999) {
                if (sUsers1 > 999999999){
                    if(sUsers1 > 999999999999){
                        sUsers1A = (sUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    sUsers1A = (sUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    sUsers1A = (sUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                sUsers1A = (sUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            sUsers1A = sUsers1
        }
        rUsers1 = rUsers1 * 44000
        if (rUsers1 > 999){
            if (rUsers1 > 999999) {
                if (rUsers1 > 999999999){
                    if(rUsers1 > 999999999999){
                        rUsers1A = (rUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    rUsers1A = (rUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    rUsers1A = (rUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                rUsers1A = (rUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            rUsers1A = rUsers1
        }
        maUsers1 = maUsers1 * 260000 
        if (maUsers1 > 999){
            if (maUsers1 > 999999) {
                if (maUsers1 > 999999999){
                    if(maUsers1 > 999999999999){
                        maUsers1A = (maUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    maUsers1A = (maUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    maUsers1A = (maUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                maUsers1A = (maUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            maUsers1A = maUsers1
        }
        aUsers1 = aUsers1 * 1600000
        if (aUsers1 > 999){
            if (aUsers1 > 999999) {
                if (aUsers1 > 999999999){
                    if(aUsers1 > 999999999999){
                        aUsers1A = (aUsers1 / 1000000000000).toFixed(1) + "T"
                    }
                    aUsers1A = (aUsers1 / 1000000000) .toFixed(1) + "B"
                } else {
                    aUsers1A = (aUsers1 / 1000000) .toFixed(1) + "M"
                }
            } else {
                aUsers1A = (aUsers1 / 1000) .toFixed(1) + "K"
            }
        } else {
            aUsers1A = aUsers1
        }
        codeDiv.innerHTML = "<br><em>" + codeF + " Code" + "</em>";
        code1Div.innerHTML = "<em>" + codePSF + " Code Per Second" + "</em>";
        costButton.innerHTML = "<em>" + costBA + "</em>";
        costName.innerHTML = "<em>" + costN + "</em>";
        imageLogo.src = lg[cLogo]
        usersUbuntu.innerHTML = "<em>" + uUsers + "</em>"
        usersDebian.innerHTML = "<em>" + dUsers + "</em>"
        usersCentOS.innerHTML = "<em>" + cUsers + "</em>"
        usersTalis.innerHTML = "<em>" + tUsers + "</em>"
        usersMint.innerHTML = "<em>" + mUsers + "</em>"
        usersFedora.innerHTML = "<em>" + fUsers + "</em>"
        usersSlaveware.innerHTML = "<em>" + sUsers + "</em>"
        usersRedHat.innerHTML = "<em>" + rUsers + "</em>"
        usersManjaro.innerHTML = "<em>" + maUsers + "</em>"
        usersArch.innerHTML = "<em>" + aUsers + "</em>"
        codePerUbuntu.innerHTML = "<em>" + uStatsA  + "</em>"
        codePerDebian.innerHTML = "<em>" + dUsers1A + "</em>"
        codePerCentOS.innerHTML = "<em>" + cUsers1A + "</em>"
        codePerTalis.innerHTML = "<em>" + tUsers1A + "</em>"
        codePerMint.innerHTML = "<em>" + mUsers1A + "</em>"
        codePerFedora.innerHTML = "<em>" + fUsers1A + "</em>"
        codePerSlaveware.innerHTML = "<em>" + sUsers1A + "</em>"
        codePerRedhat.innerHTML = "<em>" + rUsers1A + "</em>"
        codePerManjaro.innerHTML = "<em>" + maUsers1A + "</em>"
        codePerArch.innerHTML = "<em>" + aUsers1A + "</em>"
        clickCodeCost.innerHTML = "<em>" + clickUpgradeCost + "</em>"
        clickCodeCost1.innerHTML = "<em>" + clickCode + "</em>"
        uupgrade.innerHTML = "<em>" + uUcost + "</em>"
        dupgrade.innerHTML = "<em>" + dUcost + "</em>"
        cupgrade.innerHTML = "<em>" + cUcost + "</em>"
        tupgrade.innerHTML = "<em>" + tUcost + "</em>"
        mupgrade.innerHTML = "<em>" + mUcost + "</em>"
        fupgrade.innerHTML = "<em>" + fUcost + "</em>"
        supgrade.innerHTML = "<em>" + sUcost + "</em>"
        rupgrade.innerHTML = "<em>" + rUcost + "</em>"
        maupgrade.innerHTML = "<em>" + maUcost + "</em>"
        aupgrade.innerHTML = "<em>" + aUcost + "</em>"
        codePSTA = codePS        
        codePS = 0       
    }
}

function Reset() {
    var youSure = prompt("confirm with Y")
    if (youSure === "Y") {
        codeCountActive = 0
        setTimeout(100)
        localStorage.removeItem("code")
        localStorage.setItem("code", 0)
        localStorage.removeItem("uUsers")
        localStorage.setItem("uUsers", 0)
        localStorage.removeItem("fUsers")
        localStorage.setItem("fUsers", 0)
        localStorage.removeItem("linuxClickUpraded")
        localStorage.setItem("linuxClickUpgraded", 0)
        localStorage.removeItem("cost1")
        localStorage.setItem("cost1", 1)
        localStorage.removeItem("cost2")
        localStorage.setItem("cost2", 10)
        localStorage.removeItem("cost3")
        localStorage.setItem("cost3", 50)
        localStorage.removeItem("cost4")
        localStorage.setItem("cost4", 250)
        localStorage.removeItem("cost5")
        localStorage.setItem("cost5", 1000)
        localStorage.removeItem("Ucost1")
        localStorage.setItem("Ucost1", 100)
        localStorage.removeItem("Ucost2")
        localStorage.setItem("Ucost2", 500)
        localStorage.removeItem("Ucost3")
        localStorage.setItem("Ucost3", 15000)
        localStorage.removeItem("Ucost4")
        localStorage.setItem("Ucost4", 500000)
        localStorage.removeItem("Ucost5")
        localStorage.setItem("Ucost5", 5000000)
        localStorage.removeItem("cost6")
        localStorage.setItem("cost6", 10000)
        localStorage.removeItem("cost7")
        localStorage.setItem("cost7", 250000)
        localStorage.removeItem("cost8")
        localStorage.setItem("cost8", 5000000)
        localStorage.removeItem("cost9")
        localStorage.setItem("cost9", 10000000)
        localStorage.removeItem("cost10")
        localStorage.setItem("cost10", 25000000)
        localStorage.removeItem("Ucost6")
        localStorage.setItem("Ucost6", 100)
        localStorage.removeItem("Ucost7")
        localStorage.setItem("Ucost7", 500)
        localStorage.removeItem("Ucost8")
        localStorage.setItem("Ucost8", 15000)
        localStorage.removeItem("Ucost9")
        localStorage.setItem("Ucost9", 500000)
        localStorage.removeItem("Ucost10")
        localStorage.setItem("Ucost10", 5000000)
        localStorage.removeItem("ucost")
        localStorage.setItem("ucost", 15)
        localStorage.removeItem("dcost")
        localStorage.setItem("dcost", 100)
        localStorage.removeItem("ccost")
        localStorage.setItem("ccost", 1100)
        localStorage.removeItem("tcost")
        localStorage.setItem("tcost", 12000)
        localStorage.removeItem("mcost")
        localStorage.setItem("mcost", 130000)
        localStorage.removeItem("uUcost")
        localStorage.setItem("uUcost", "100")
        localStorage.removeItem("dUcost")
        localStorage.setItem("dUcost", "500")
        localStorage.removeItem("cUcost")
        localStorage.setItem("cUcost", "15K")
        localStorage.removeItem("tUcost")
        localStorage.setItem("tUcost", "500K")
        localStorage.removeItem("mUcost")
        localStorage.setItem("mUcost", "5M")
        localStorage.removeItem("fcost")
        localStorage.setItem("fcost", 1400000)
        localStorage.removeItem("scost")
        localStorage.setItem("scost", 20000000)
        localStorage.removeItem("rcost")
        localStorage.setItem("rcost", 330000000)
        localStorage.removeItem("macost")
        localStorage.setItem("macost", 5100000000)
        localStorage.removeItem("acost")
        localStorage.setItem("acost", 75000000000)
        localStorage.removeItem("fUcost")
        localStorage.setItem("fUcost", "25M")
        localStorage.removeItem("sUcost")
        localStorage.setItem("sUcost", "150M")
        localStorage.removeItem("rUcode")
        localStorage.setItem("rUcost", "500M")
        localStorage.removeItem("maUcode")
        localStorage.setItem("maUcost", "10B")
        localStorage.removeItem("aUcode")
        localStorage.setItem("aUcost", "100B")
        localStorage.setItem("played before", "yes")
        localStorage.setItem("resetSwitch", "yes")
        localStorage.removeItem("dUsers")
        localStorage.setItem("dUsers", 0)
        localStorage.removeItem("cUsers")
        localStorage.setItem("cUsers", 0)
        localStorage.removeItem("tUsers")
        localStorage.setItem("tUsers", 0)
        localStorage.removeItem("mUsers")
        localStorage.setItem("mUsers", 0)
        localStorage.removeItem("sUsers")
        localStorage.setItem("sUsers", 0)
        localStorage.removeItem("rUsers")
        localStorage.setItem("rUsers", 0)
        localStorage.removeItem("maUsers")
        localStorage.setItem("maUsers", 0)
        localStorage.removeItem("aUsers")
        localStorage.setItem("aUsers", 0)
        localStorage.removeItem("uUsersUpgrade")
        localStorage.setItem("uUsersUpgrade", 1)
        localStorage.removeItem("dUsersUpgrade")
        localStorage.setItem("dUsersUpgrade", 1)
        localStorage.removeItem("cUsersUpgrade")
        localStorage.setItem("cUsersUpgrade", 1)
        localStorage.removeItem("tUsersUpgrade")
        localStorage.setItem("tUsersUpgrade", 1)
        localStorage.removeItem("mUsersUpgrade")
        localStorage.setItem("mUsersUpgrade", 1)
        localStorage.removeItem("fUsersUpgrade")
        localStorage.setItem("fUsersUpgrade", 1)
        localStorage.removeItem("sUsersUpgrade")
        localStorage.setItem("sUsersUpgrade", 1)
        localStorage.removeItem("rUsersUpgrade")
        localStorage.setItem("rUsersUpgrade", 1)
        localStorage.removeItem("maUsersUpgrade")
        localStorage.setItem("maUsersUpgrade", 1)
        localStorage.removeItem("aUsersUpgrade")
        localStorage.setItem("aUsersUpgrade", 1)
        localStorage.removeItem("onlineYr")
        localStorage.removeItem("onlineMTH")
        localStorage.removeItem("onlineD")
        localStorage.removeItem("onlineM")
        localStorage.removeItem("onlineH")
        localStorage.removeItem("onlineS")
        localStorage.setItem("onlineYr", new Date().getFullYear())
        localStorage.setItem("onlineMTH", new Date().getMonth())
        localStorage.setItem("onlineD", new Date().getDate())
        localStorage.setItem("onlineM", new Date().getMinutes())
        localStorage.setItem("onlineH", new Date().getHours())
        localStorage.setItem("onlineS", new Date().getSeconds())
        localStorage.removeItem("currentLife")
        localStorage.setItem("currentLife", 1)
        location.reload()
    } else {
        alert("No Reset")
    }
}

function newLife(){
    var newLife = prompt("Use Y to start the game")
    if (newLife === "Y") {
        codeCountActive = 0
        setTimeout(100)
        localStorage.removeItem("code")
        localStorage.setItem("code", 0)
        localStorage.removeItem("uUsers")
        localStorage.setItem("uUsers", 0)
        localStorage.removeItem("fUsers")
        localStorage.setItem("fUsers", 0)
        localStorage.removeItem("linuxClickUpraded")
        localStorage.setItem("linuxClickUpgraded", 0)
        localStorage.removeItem("cost1")
        localStorage.setItem("cost1", 1)
        localStorage.removeItem("cost2")
        localStorage.setItem("cost2", 10)
        localStorage.removeItem("cost3")
        localStorage.setItem("cost3", 50)
        localStorage.removeItem("cost4")
        localStorage.setItem("cost4", 250)
        localStorage.removeItem("cost5")
        localStorage.setItem("cost5", 1000)
        localStorage.removeItem("Ucost1")
        localStorage.setItem("Ucost1", 100)
        localStorage.removeItem("Ucost2")
        localStorage.setItem("Ucost2", 500)
        localStorage.removeItem("Ucost3")
        localStorage.setItem("Ucost3", 15000)
        localStorage.removeItem("Ucost4")
        localStorage.setItem("Ucost4", 500000)
        localStorage.removeItem("Ucost5")
        localStorage.setItem("Ucost5", 5000000)
        localStorage.removeItem("cost6")
        localStorage.setItem("cost6", 10000)
        localStorage.removeItem("cost7")
        localStorage.setItem("cost7", 250000)
        localStorage.removeItem("cost8")
        localStorage.setItem("cost8", 5000000)
        localStorage.removeItem("cost9")
        localStorage.setItem("cost9", 10000000)
        localStorage.removeItem("cost10")
        localStorage.setItem("cost10", 25000000)
        localStorage.removeItem("Ucost6")
        localStorage.setItem("Ucost6", 100)
        localStorage.removeItem("Ucost7")
        localStorage.setItem("Ucost7", 500)
        localStorage.removeItem("Ucost8")
        localStorage.setItem("Ucost8", 15000)
        localStorage.removeItem("Ucost9")
        localStorage.setItem("Ucost9", 500000)
        localStorage.removeItem("Ucost10")
        localStorage.setItem("Ucost10", 5000000)
        localStorage.removeItem("ucost")
        localStorage.setItem("ucost", 15)
        localStorage.removeItem("dcost")
        localStorage.setItem("dcost", 100)
        localStorage.removeItem("ccost")
        localStorage.setItem("ccost", 1100)
        localStorage.removeItem("tcost")
        localStorage.setItem("tcost", 12000)
        localStorage.removeItem("mcost")
        localStorage.setItem("mcost", 130000)
        localStorage.removeItem("uUcost")
        localStorage.setItem("uUcost", "100")
        localStorage.removeItem("dUcost")
        localStorage.setItem("dUcost", "500")
        localStorage.removeItem("cUcost")
        localStorage.setItem("cUcost", "15K")
        localStorage.removeItem("tUcost")
        localStorage.setItem("tUcost", "500K")
        localStorage.removeItem("mUcost")
        localStorage.setItem("mUcost", "5M")
        localStorage.removeItem("fcost")
        localStorage.setItem("fcost", 1400000)
        localStorage.removeItem("scost")
        localStorage.setItem("scost", 20000000)
        localStorage.removeItem("rcost")
        localStorage.setItem("rcost", 330000000)
        localStorage.removeItem("macost")
        localStorage.setItem("macost", 5100000000)
        localStorage.removeItem("acost")
        localStorage.setItem("acost", 75000000000)
        localStorage.removeItem("fUcost")
        localStorage.setItem("fUcost", "25M")
        localStorage.removeItem("sUcost")
        localStorage.setItem("sUcost", "150M")
        localStorage.removeItem("rUcode")
        localStorage.setItem("rUcost", "500M")
        localStorage.removeItem("maUcode")
        localStorage.setItem("maUcost", "10B")
        localStorage.removeItem("aUcode")
        localStorage.setItem("aUcost", "100B")
        localStorage.setItem("played before", "yes")
        localStorage.setItem("resetSwitch", "yes")
        localStorage.removeItem("dUsers")
        localStorage.setItem("dUsers", 0)
        localStorage.removeItem("cUsers")
        localStorage.setItem("cUsers", 0)
        localStorage.removeItem("tUsers")
        localStorage.setItem("tUsers", 0)
        localStorage.removeItem("mUsers")
        localStorage.setItem("mUsers", 0)
        localStorage.removeItem("sUsers")
        localStorage.setItem("sUsers", 0)
        localStorage.removeItem("rUsers")
        localStorage.setItem("rUsers", 0)
        localStorage.removeItem("maUsers")
        localStorage.setItem("maUsers", 0)
        localStorage.removeItem("aUsers")
        localStorage.setItem("aUsers", 0)
        localStorage.removeItem("uUsersUpgrade")
        localStorage.setItem("uUsersUpgrade", 1)
        localStorage.removeItem("dUsersUpgrade")
        localStorage.setItem("dUsersUpgrade", 1)
        localStorage.removeItem("cUsersUpgrade")
        localStorage.setItem("cUsersUpgrade", 1)
        localStorage.removeItem("tUsersUpgrade")
        localStorage.setItem("tUsersUpgrade", 1)
        localStorage.removeItem("mUsersUpgrade")
        localStorage.setItem("mUsersUpgrade", 1)
        localStorage.removeItem("fUsersUpgrade")
        localStorage.setItem("fUsersUpgrade", 1)
        localStorage.removeItem("sUsersUpgrade")
        localStorage.setItem("sUsersUpgrade", 1)
        localStorage.removeItem("rUsersUpgrade")
        localStorage.setItem("rUsersUpgrade", 1)
        localStorage.removeItem("maUsersUpgrade")
        localStorage.setItem("maUsersUpgrade", 1)
        localStorage.removeItem("aUsersUpgrade")
        localStorage.setItem("aUsersUpgrade", 1)
        localStorage.removeItem("onlineD", new Date().getDate())
        localStorage.removeItem("onlineM", new Date().getMinutes())
        localStorage.removeItem("onlineH", new Date().getHours())
        localStorage.removeItem("onlineS", new Date().getSeconds())
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
            uUsers = uUsers + 1
            uUsers1 = uUsers1 + 1
            cost1 = cost1 + 2
            ucost = ucostm
    }  
} else {
        if (selectedLogo === 2){
            if (code >= dcostm){
                code = code - dcostm
                dcostm = dcostm + cost2
                dUsers = dUsers + 1
                dUsers1 = dUsers1 + 1
                cost2 = cost2 + 25
                dcost = dcostm
    }
} else {
    if (selectedLogo === 3){
       if (code >= ccostm){
       code = code - ccostm
       ccostm = ccostm + cost3
       cUsers = cUsers + 1
       cUsers1 = cUsers1 + 1
       cost3 = cost3 + 150
       ccost = ccostm
       }
   } else {
       if (selectedLogo === 4) {
           if (code >= tcostm){
               code = code - tcostm
               tcostm = tcostm + cost4
               tUsers = tUsers + 1
               tUsers1 = tUsers1 + 1
               cost3 = cost3 + 300
               tcost = tcostm
           }
       } else {
           if (selectedLogo === 5){
            if (code >= mcostm){
                code = code - mcostm
                mcostm = mcostm + cost5
                mUsers = mUsers + 1
                mUsers1 = mUsers1 + 1
                cost5 = cost5 + 5000
                mcost = mcostm
            }
           } else {
               if(selectedLogo === 6){
                   if(code >= fcostm){
                       code = code - fcostm
                       fUsers = fUsers + 1
                       fcostm = fcostm + cost6
                       fUsers1 = fUsers1 + 1
                       cost6 = cost6 + 25000
                       fcost = fcostm
                   }
               } else {
                    if(selectedLogo === 7){
                        if(code >= scostm){
                            code = code - scostm
                            scostm = scostm + cost7
                            sUsers = sUsers + 1
                            sUsers1 = sUsers1 + 1
                            cost7 = cost7 + 50000
                            scost = scostm
                        }
                    } else {
                        if(selectedLogo === 8){
                            if(code >= rcostm){
                                code = code - rcostm
                                rcostm = rcostm + cost8
                                rUsers = rUsers + 1
                                rUsers1 = rUsers1 + 1
                                    cost8 = cost8 + 5000000
                                    rcost = rcostm
                            }
                        } else {
                            if(selectedLogo === 9){
                                if(code >= macostm){
                                    code = code - macostm
                                    macostm = macostm + cost9
                                    maUsers = maUsers + 1
                                    maUsers1 = maUsers1 + 1
                                    cost9 = cost9 + 1000000
                                    macost = macostm
                                }
                            } else {
                                if(selectedLogo === 10){
                                    if(code >= acostm){
                                        code = code - acostm
                                        acostm = acostm + cost10
                                        aUsers1 = aUsers1 + 1
                                        aUsers = aUsers + 1
                                        cost10 = cost10 + 25000000
                                        acost = acostm
                                    }
                                }
                            }
                        }
                    }
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
}

function ubuntuUsersIncome() {
    var codeIncomeTest = (uUsers * 0.1) * uUsersUpgrade
    codeIncomeTest = codeIncomeTest + (dUsers * 1) * dUsersUpgrade
    codeIncomeTest = codeIncomeTest + (cUsers * 8) * cUsersUpgrade
    codeIncomeTest = codeIncomeTest + (tUsers * 47) * tUsersUpgrade
    codeIncomeTest = codeIncomeTest + (mUsers * 260) * mUsersUpgrade
    codeIncomeTest = codeIncomeTest + (fUsers * 1400) * fUsersUpgrade
    codeIncomeTest = codeIncomeTest + (sUsers * 7800) * sUsersUpgrade
    codeIncomeTest = codeIncomeTest + (rUsers * 44000) * rUsersUpgrade
    codeIncomeTest = codeIncomeTest + (maUsers * 260000) * maUsersUpgrade
    codeIncomeTest = codeIncomeTest + (aUsers * 1600000) * aUsersUpgrade
    code = codeIncomeTest + code
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
    if (selectedLogo < 10){
        selectedLogo = selectedLogo + 1
    }
}

function aTenth(){
    code = code + 0.1
}

function uUpgrade(){
    if(uUsersUpgrade < 2){
    if (code >= 100){
        code = code - 100
        uUsersUpgrade = uUsersUpgrade + 1
        uUcost = "Max"
    }
    }
}

function dUpgrade(){
    if(dUsersUpgrade < 2){
    if (code >= 500){
        code = code - 500
        dUsersUpgrade = dUsersUpgrade + 1
        dUcost = "Max"
    }
    }
}

function cUpgrade(){
    if(cUsersUpgrade){
    if (code >= 15000){
        code = code - 15000
        cUsersUpgrade = cUsersUpgrade + 1
        cUcost = "Max"
    }
    }
}

function tUpgrade(){
    if(tUsersUpgrade < 2){
    if (code >= 500000){
        code = code - 500000
        tUsersUpgrade = tUsersUpgrade + 1
        tUcost = "Max"
    }
    }
}

function mUpgrade(){
    if(mUsersUpgrade < 2){
    if (code >= 5000000){
        code = code - 5000000
        mUsersUpgrade = mUsersUpgrade + 1
        mUcost = "Max"
    }
    }
}

function fUpgrade(){
    if(fUsersUpgrade < 2){
    if (code >= 25000000){
        code = code - 25000000
        fUsersUpgrade = fUsersUpgrade + 1
        fUcost = "Max"
    }
    }
}

function sUpgrade(){
    if(sUsersUpgrade < 2){
    if (code >= 150000000){
        code = code - 150000000
        sUsersUpgrade = sUsersUpgrade + 1
        sUcost = "Max"
    }
    }
}

function rUpgrade(){
    if(rUsersUpgrade){
    if (code >= 500000000){
        code = code - 500000000
        rUsersUpgrade = rUsersUpgrade + 1
        rUcost = "Max"
    }
    }
}

function maUpgrade(){
    if(maUsersUpgrade < 2){
    if (code >= 10000000000){
        code = code - 10000000000
        maUsersUpgrade = maUsersUpgrade + 1
        maUcost = "Max"
    }
    }
}

function aUpgrade(){
    if(aUsersUpgrade < 2){
    if (code >= 100000000000){
        code = code - 100000000000
        aUsersUpgrade = aUsersUpgrade + 1
        aUcost = "Max"
    }
    }
}



function away(){
    setTimeout(() => {
        awayA()
    }, 100)
}

var offD = 0
function awayA(){
    if(secondsAway > 59){
        var off = secondsAway * codePSNS
        if (off === 0){
        } else {
        if (off > 9999){
            if (off > 9999999) {
                if (off > 9999999999){
                    offD = (off / 1000000000) .toFixed(1) + "B"
                } else {
                    offD = (off / 1000000) .toFixed(1) + "M"
                }
            } else {
                offD = (off / 1000) .toFixed(1) + "K"
            }
        } else {
            offD = off
        }
        var offDF = offD
        alert("while you were away you have earn't " + offD)
        code = code + off
        off = 0
    }
} else {
    console.log(secondsAway);
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
                    } else {
                        if(selectedLogo === 6){
                            if(fUsers > 0){
                                cost6 = cost6 - 0
                                fcost = fcost - cost6
                                fUsers = fUsers - 1
                                code = code + mcost
                            }
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



function setBackground(){
    var colorEntered = document.getElementById("color")
    colorEntered = colorEntered.value
    var body = document.getElementById("body")
    body.style.backgroundColor = colorEntered
}