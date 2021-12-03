/**
 * Formats top row of sheet using our header row style.
 */
function Header() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  // @ts-ignore
  sheet.getRange(spreadsheet.getCurrentCell().getRow(), 1, 1, 10).activate();
  //@ts-ignore
  spreadsheet.getActiveRangeList().setBackground('#afeeee').setFontColor('#191970').setFontWeight('bold');
  spreadsheet.getActiveSheet().setFrozenRows(1);
}
