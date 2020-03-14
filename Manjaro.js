var code = 0

function CookieUrl() {
    location.assign("https://orteil.dashnet.org/cookieclicker/")
}

function LinuxClick() {
    code = code + 1
    codeReset()
}

var codeDiv = document.querySelector("#codeCount");

function codeReset() {
    codeDiv.innerHTML = "<br><em>" + code + "</em>";
    
}