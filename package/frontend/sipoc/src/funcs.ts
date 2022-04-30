// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function scriptJs(name) {
  var url = '';
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName('Suppliers');

  ws.appendRow([name]);
}
