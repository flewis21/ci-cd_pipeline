// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function scriptJs(name) {
  const url = '';
  const ss = SpreadsheetApp.openByUrl(url);
  const ws = ss.getSheetByName('Suppliers');

  ws.appendRow([name]);
}
