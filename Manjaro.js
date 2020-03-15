function codeActivate(){
    setInterval(() => {
        codeReset()
    }, 100);
}

var codeLocal
var playedBefore = localStorage.getItem("code")
if (playedBefore >= 0) {
    var code = localStorage.getItem("code")
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
    codeLocal = code
    localStorage.removeItem("code")
    localStorage.setItem("code", codeLocal)
    codeDiv.innerHTML = "<br><em>" + code + "</em>";
}