// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function doGet(e) {
  //SlidesApp.getUi();
  //DriveApp.getRootFolder();
  //UrlFetchApp.fetch("");
  const htmlOutput = HtmlService.createTemplateFromFile('index');
  return htmlOutput.evaluate();
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function addToSideBar() {
  var htmlServ = HtmlService.createTemplateFromFile('index');
  var html = htmlServ.evaluate();
  var ui = FormApp.getUi();
  ui.showSidebar(html);
}
