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
  let johnMass = 92;
  let johnHeight = 1.95;
  let markMass = 78;
  let markHeight = 1.69;
  // BMI = mass / height ** 2 = mass / (height * height);
  let johnBMI = johnMass / johnHeight ** 2;
  let markBMI = markMass / (markHeight * markHeight);
  let markHigherBMI;
  if (markBMI > johnBMI) markHigherBMI = true;
  else markhigherBMI = false;

  // Logger.log(name + " clicked the button");
  // Logger.log(country);
  // Logger.log(continent);
  // Logger.log(population);
}
