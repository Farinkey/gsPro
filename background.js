chrome.runtime.onMessage.addListener(function(refNum){
    chrome.tabs.create({url:`https://gossluzhba.gov.ru/Cabinet/UserSupport/UserSupport#/user-requests/edit/${refNum - 457413}/info`});
});