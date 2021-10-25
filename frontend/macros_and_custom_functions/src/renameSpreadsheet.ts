/* eslint-env es2017 */
/* global renameSpreadsheet:writable */
function renameSpreadsheet() {
  var mySS = SpreadsheetApp.getActiveSpreadsheet();
  mySS.rename('Define Sipoc and create value stream');
}
