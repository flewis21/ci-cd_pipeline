// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function scriptJs(name) {
  const url = 'https://docs.google.com/spreadsheets/d/1-rMshTSU0TdKsyJOe-NJUbUMLPYSmnnxBk0GvoOzVZ4/edit#gid=0';
  const ss = SpreadsheetApp.openByUrl(url);
  const ws = ss.getSheetByName('Suppliers');

  ws.appendRow([name]);
}
