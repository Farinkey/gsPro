let s = document.createElement('script');
s.src = chrome.extension.getURL('content.js');
s.async = false;
(document.body || document.documentElement).appendChild(s);