function getDimmingList() {
    return [
        'https://www.facebook.com/'
    ];
}

function getRedirectList() {
    return [
        'https://www.youtube.com/'
    ];
}

chrome.runtime.onMessage.addListener(
    function (msgReceived, sender, sendResponse) {
        console.log("content.script received: ", msgReceived);
        var url = msgReceived.currentTab.url;

        if (getRedirectList().indexOf(url) > -1) {
            console.log("Now redirecting: ", url);
            chrome.runtime.sendMessage({action: "redirect", tabToRedirect: msgReceived.currentTab});
        } else if (getDimmingList().indexOf(url) > -1) {
            console.log("Now dimming: ", url);
            dimPage();
        }
    });

function dimPage() {
    var dimmerId = "beetrackerDimmer";

    // first remove any existing dimmer
    var elemDiv;
    elemDiv = document.getElementById(dimmerId);
    if (elemDiv) {
        elemDiv.parentNode.parentNode.removeChild(elemDiv.parentNode);
        console.log("removed dimmer for elemDiv: ", elemDiv);
    }

    // apply dimmer
    // elemDiv = document.createElement('div');
    // elemDiv.setAttribute("id", dimmerId);

    // setTimeout(function () {
    //     // elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, 0);';
    //     document.body.appendChild(elemDiv);
    // }, 3000);

}
