// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function doGet(e) {
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}

function addToSideBar() {
  const htmlServ = HtmlService.createTemplateFromFile('my');
  const html = htmlServ.evaluate();

  const ui = FormApp.getUi();
  ui.showSidebar(html);
}
