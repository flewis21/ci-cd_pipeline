// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
// Compiled using sipoc 1.0.0 (TypeScript 4.6.3)
function scriptJs(name) {
  var url = '';
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName('Customers');

  ws.appendRow([name]);

  let country = 'USA';
  let continent = 'North America';
  let population = 331.45 * 1000000;

  // Logger.log(name + " clicked the button");
  // Logger.log(country);
  // Logger.log(continent);
  // Logger.log(population);
}
