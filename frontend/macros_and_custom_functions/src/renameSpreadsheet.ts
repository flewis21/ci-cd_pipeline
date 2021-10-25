/* global renameSpreadsheet */
function renameSpreadsheet() {
  var mySS = SpreadsheetApp.getActiveSpreadsheet();
  mySS.rename('Define Sipoc and create value stream');
}
