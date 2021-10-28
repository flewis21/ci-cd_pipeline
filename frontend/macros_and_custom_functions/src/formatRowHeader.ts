/**
 * Formats top row of sheet using our header row style.
 */
function formatRowHeader() {
  // Get the current active sheet and the top row's range.
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var headerRange = sheet.getRange(spreadsheet.getCurrentCell().getRow(), 1, 1, sheet.getLastColumn()).activate();
  // Apply each format to the top row: bold white text,
  // blue-green background, and a solid black border
  // around the cells
  spreadsheet.getActiveRangeList()
  	.setBackground('')
  	.setFontColor('')
  	.setFontWeight('');
  	.setBorder()
  spreadsheet.getActiveSheet().setFrozenRows(1);
}
