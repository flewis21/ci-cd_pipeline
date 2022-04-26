// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function doGet(e) {
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}

function addToSideBar() {
  const htmlServ = HtmlService.createTemplateFromFile('my');
  const html = htmlServ.evaluate();

  const ui = FormsApp.getUi();
  ui.showSidebar(html);
<<<<<<< HEAD

} 
=======
}

>>>>>>> 90433ae773c163ef3a93ddcb0333be2d924bfccc