"use strict";

// let msgList = document.querySelector(".conductorContent");

document.body.addEventListener("click", function() {
  document.addEventListener("DOMContentLoaded", function() {
    let theme = document.querySelector('.allowTextSelection span'),
    // reNum = /5*/,
    btnsField = document.querySelector('._rp_Y div'),
    reply = document.querySelector('button[autoid="_rp_g"]'),
    btn = document.createElement('button');

    btn.classList.add('_rp_31', 'ms-font-xs', 'o365button', 'ms-font-m', 'ms-font-color-neutralSecondary');
    btn.textContent = 'На вторую';
    btnsField.insertBefore(btn, reply);
  });
});


// let theme = document.querySelector('.allowTextSelection span'),
//     // reNum = /5*/,
//     btnsFiels = document.querySelector('._rp_Y div'),
//     reply = document.querySelector('button[autoid="_rp_g"]'),
//     btn = document.createElement('button');

// btnsFiels.insertBefore(btn, reply);
// btn.classList.add('_rp_31', 'ms-font-xs o365button', 'ms-font-m ms-font-color-neutralSecondary');
// btn.textContent = 'На вторую';

// btn.addEventListener("click", function() {
//   // if (theme.search(reNum) != -1)
//   if (document.querySelector('.attachmentWell div div div div div table tbody tr td div div') != null) {
//     document.querySelector('button[autoid="_rp_i"]').click();
//   } else {
//     document.querySelector('button[autoid="_rp_h"]').click()
//   }
// });

// setTimeout(() => {
//   let firstMsg = document.querySelector('button[autoid="_lv_B"]');
//   firstMsg.click();
// }, 1000); 
