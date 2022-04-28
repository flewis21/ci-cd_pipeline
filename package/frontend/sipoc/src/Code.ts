// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function doGet(e) {
  Logger.log(e.parameter);
  //SlidesApp.getUi();
  //DriveApp.getRootFolder();
  //UrlFetchApp.fetch("");
  return HtmlService.createHtmlOutputFromFile('index');
}
function addToSideBar() {
  var htmlServ = HtmlService.createTemplateFromFile('index');
  var html = htmlServ.evaluate();
  var ui = FormApp.getUi();
  ui.showSidebar(html);
}
