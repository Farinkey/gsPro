chrome.webNavigation.onCompleted.addListener(function() {
  alert("This is my favorite website!");
}, {url: [{urlMatches : 'https://mail.gossluzhba.gov.ru/owa/rezerv@gossluzhba.gov.ru/#path=/mail'}]});

chrome.runtime.onMessage.addListener(function(refNum){
  chrome.tabs.create({url:`https://gossluzhba.gov.ru/Cabinet/UserSupport/UserSupport#/user-requests/edit/${refNum - 457413}/info`});
  chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.executeScript(activeInfo.tabId, {
        file: 'content.js'
    }); 
});
});