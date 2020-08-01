let s = document.createElement('script');
s.src = chrome.extension.getURL('content.js');
(document.body || document.documentElement).appendChild(s);