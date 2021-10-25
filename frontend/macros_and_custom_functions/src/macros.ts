// Compiled using ci-cd_pipeline 1.0.0 (TypeScript 4.4.4)
// version 1.0.0

/* global Header */
function Header() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(spreadsheet.getCurrentCell().getRow(), 1, 1, 10).activate();
  spreadsheet.getActiveRangeList().setBackground('#afeeee').setFontColor('#191970').setFontWeight('bold');
  spreadsheet.getActiveSheet().setFrozenRows(1);
}
