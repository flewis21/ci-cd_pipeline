/* eslint-env es2017 */
/* eslint no-unused-vars: ["error", { "caughtErrorsIgnorePattern": "renameSpreadsheet" }] */
function renameSpreadsheet() {
  var mySS = SpreadsheetApp.getActiveSpreadsheet();
  mySS.rename('Define Sipoc and create value stream');
}
