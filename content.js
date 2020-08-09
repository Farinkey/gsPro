let facts = document.querySelector(`a[ng-click="setState('factWorks')"]`),
    contentBlock = document.querySelector(`.content-block`);

facts.click();

factAdd();

function factAdd() {
  if (document.querySelector(`[data-ng-click="add()"]`) != null) {
    let addFactBtn = document.querySelector(`[data-ng-click="add()"]`);
    addFactBtn.click();

    document.addEventListener("load", () => {
      factGen();
    });
  } else {
    setTimeout(factAdd, 500);
  }
}

function factGen() {
  if (document.querySelectorAll('.form-group').length > 5) {
    let formGroup = document.querySelectorAll('.form-group');
    doClick(formGroup[5].querySelector('a'));
  } else {
    setTimeout(factGen, 500);
  }
}

function doClick(n) {
    e = document.createEvent("MouseEvents");  
    e.initEvent("mousedown", true, false);  
    n.dispatchEvent(e,true); 
    e = document.createEvent("MouseEvents");  
    e.initEvent("mouseup", true, false);  
    n.dispatchEvent(e,true);
}