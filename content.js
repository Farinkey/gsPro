let facts = document.querySelector(`a[ng-click="setState('factWorks')"]`),
    contentBlock = document.querySelector(`.content-block`);

facts.click();

contentBlock.addEventListener("DOMNodeInserted", factAdd);

function factAdd() {
  let addFactBtn = document.querySelector(`[data-ng-click="add()"]`);
  addFactBtn.click();

  contentBlock.removeEventListener("DOMNodeInserted", factAdd);

  document.addEventListener("load", () => {
    document.querySelector("#s2id_autogen45 > a").click();
    document.querySelector("#select2-results-46 > li:nth-child(1)").click();
  });
}