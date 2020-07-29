"use strict";

let reNum = /[5]{1}[0-9]{5}/,
    refNum,
    userName = prompt("Как звать?", localStorage.name),
    btn = document.createElement('button');

// document.addEventListener('load readystatechange', () => );
function start() {
  let msgs = document.querySelector("._lv_I3");
  if (msgs != null) {
    msgs.addEventListener("click", () => {
      let btnsField = document.querySelector('._rp_Y div'),
          reply = document.querySelector('button[autoid="_rp_g"]'),
          mainTheme = document.querySelector('span[autoid="_rp_I"]').textContent || document.querySelector('input[autoid="_mcp_k"]').value;

      if (document.querySelector('.optButton') == (null || undefined) && btnsField != null) {
        btn.classList.add('_rp_31', 'ms-font-xs', 'o365button', 'ms-font-m', 'ms-font-color-neutralSecondary', 'optButton');
        btn.style = "font-family: 'o365Icons'!important; padding: 9px 0; font-size: 11px; vertical-align: middle; text-transform: uppercase;";
        btn.textContent = 'На вторую';
        btnsField.insertBefore(btn, reply);
      }

      if (reNum.exec(mainTheme) != null && reNum.exec(mainTheme)[0] >= 500000) {
        refNum = reNum.exec(mainTheme)[0];
        return refNum;
      } else {
        refNum = false;
        return refNum;
      }
    });
  } else {
    setTimeout(start, 500);
  }
}

start();

btn.addEventListener("click", function init() {
  // Проверка наличия вложений
  if (document.querySelector('.attachmentWell div div div div div table tbody tr td div div') != null) {
    document.querySelector('button[autoid="_rp_i"]').click();
    iframeLoad();
  } else {
    document.querySelector('button[autoid="_rp_h"]').click();
    iframeLoad();
  }
});

function textGen() {
  document.getElementById('EditorBody').onload = () => {
    let textIframe = document.getElementById('EditorBody').contentDocument;
    let msgField = textIframe.querySelector("#Signature > div > p:nth-child(1) > span"),
        msgSign = textIframe.querySelector("#Signature > div > p:nth-child(2) > span:nth-child(2)");

    textIframe.querySelector("#MicrosoftOWAEditorRegion").children[0].remove();
    textIframe.querySelector("#MicrosoftOWAEditorRegion").children[0].remove();

    if (refNum) {
      msgField.innerHTML = `Добрый день!<br>Обращение №${refNum}<br><br>Ваше обращение передано специалистам. По исполнению сообщим дополнительно.<br>`;
      addOld();
    } else {
      msgField.innerHTML = `Добрый день!<br>Обращение №${refNum}<br><br>Ваше обращение зарегистрировано и передано специалистам. По исполнению сообщим дополнительно.<br>`;
    }

    msgSign.textContent = `С уважение, ${userName}`;
  };
}

function iframeLoad() {
  try {
    textGen();
  } catch {
    setTimeout(textGen, 1000);
  }
}

function addOld() {
  // chrome.runtime.sendMessage(refNum);
}