let facts = document.querySelector(`a[ng-click="setState('factWorks')"]`);

facts.click();

document.addEventListener("DOMContentLoaded", () => {
  let addFact = document.querySelector(`a[data-ng-click="add()"]`);

  addFact.click();

  document.addEventListener("DOMContentLoaded", () => {
    
  });
})